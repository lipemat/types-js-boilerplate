/**
 * Entity types handling for the Core Data package.
 *
 */
declare module '@wordpress/core-data/entity-types' {
	import {CategoriesQuery, Context, PostsQuery} from '@wordpress/api';

	import type {Attachment, Category, Comment, MenuLocation, NavMenu, NavMenuItem, Page, Plugin, Post, Settings, Sidebar, Tag, Taxonomy, Theme, Type, User, Widget, WidgetType, WpTemplate, WpTemplatePart} from '@wordpress/core-data/entities';
	import {PagesQuery} from '@wordpress/api/pages';

	/**
	 * Helper type that transforms "raw" entity configuration.
	 * into a format that makes searching by root and kind easy and extensible.
	 *
	 * This is the foundation of return type inference in calls such as:
	 * `getEntityRecord( "root", "comment", 15 )`.
	 */
	export type EntityType<Config extends Pick<EntityConfig<Record, C>, RequiredConfigKeys>,
		Record extends AllEntityRecords<C>,
		C extends Context> = {
		record: Record;
		config: Omit<EntityConfig<Record, C>, RequiredConfigKeys> & Config;
		key: Config[ 'key' ] extends string ? Config[ 'key' ] : 'id';
		defaultContext: Config[ 'baseURLParams' ] extends {
			context: infer InferredContext
		} ? InferredContext : 'view';
	};

	type RequiredConfigKeys = 'name' | 'kind' | 'key' | 'baseURLParams';


	export interface EntityConfig<R extends AllEntityRecords<C>, C extends Context> {
		/** Path in WP REST API from which to request records of this entity. */
		baseURL: string;

		/** Arguments to supply by default to API requests for records of this entity. */
		baseURLParams?: Record<string, any> & {
			context?: Context;
			/**
			 * The requested fields. If specified, the REST API will remove from the response
			 * any fields not on that list.
			 */
			_fields?: Array<keyof R>;
		};

		/**
		 * Returns the title for a given record of this entity.
		 *
		 * Some entities have an associated title, such as the name of a
		 * particular template part ("full width") or of a menu ("main nav").
		 */
		getTitle?: ( record: R ) => string;

		/**
		 * Indicates an alternate field in record that can be used for identification.
		 *
		 * e.g. a post has an id but may also be uniquely identified by its `slug`
		 */
		key?: string;

		/**
		 * Collection in which to classify records of this entity.
		 *
		 * 'root' is a special name given to the core entities provided by the editor.
		 *
		 * It may be the case that we request an entity record for which we have no
		 * valid config in memory. In these cases the editor will look for a loader
		 * function to requests more entity configs from the server for the given
		 * "kind." This is how WordPress defers loading of template entity configs.
		 */
		kind: string;

		/** Translated form of human-recognizable name or reference to records of this entity. */
		label: string;

		mergedEdits?: {
			meta?: boolean;
		};

		/** Name given to records of this entity, e.g. 'media', 'postType', 'widget' */
		name: string;

		/**
		 * Manually provided plural form of the entity name.
		 *
		 * When not supplied the editor will attempt to auto-generate a plural form.
		 */
		plural?: string;

		/**
		 * Parameters this entity supports when querying.
		 *
		 */
		queryParams?: {};

		/**
		 * Fields in record of this entity which may appear as a compound object with
		 * a source value (`raw`) as well as a processed value (`rendered`).
		 *
		 * e.g. a post's `content` in the edit context contains the raw value stored
		 *      in the database as well as the rendered version with shortcodes replaced,
		 *      content texturized, blocks transformed, etc…
		 */
		rawAttributes?: ( keyof R )[];

		/**
		 * Which transient edit operations records of this entity support.
		 */
		transientEdits?: {
			blocks?: boolean;
			selection?: boolean;
		};
	}

	/**
	 * A union of all the registered entities.
	 */
	type AllEntities<C extends Context = any> = CoreEntities<C>;


	/**
	 * A union of all known record types.
	 */
	export type AllEntityRecords<C extends Context = any> =
		AllEntities<C>[ 'record' ];

	/**
	 * An entity corresponding to a specified record type.
	 */
	export type EntityOf<RecordOrKind extends AllEntityRecords | Kind,
		N extends Name | undefined = undefined> = RecordOrKind extends AllEntityRecords
		? Extract<AllEntities, { record: RecordOrKind }>
		: Extract<AllEntities, { config: { kind: RecordOrKind; name: N } }>;

	/**
	 * Config of requested entity.
	 */
	export type EntityConfigOf<RecordOrKind extends AllEntityRecords | Kind,
		N extends Name | undefined = undefined> = EntityOf<RecordOrKind, N>[ 'config' ];


	/**
	 * Name of the requested entity.
	 */
	export type NameOf<R extends AllEntityRecords> =
		EntityConfigOf<R>[ 'name' ];

	/**
	 * Kind of the requested entity.
	 */
	export type KindOf<R extends AllEntityRecords> =
		EntityConfigOf<R>[ 'kind' ];

	/**
	 * Primary key type of the requested entity.
	 *
	 * Translates the `key` value (e.g. "id") to the
	 * type of the record's field matching the key.
	 *
	 * For instance a `Category` key type would be `number` because it's
	 * its config `key` is "id" and "id" field is of type "number".
	 */
	export type KeyType<
		R extends AllEntityRecords,
		N extends Name,
		E extends AllEntities = EntityOf<R, N>
	> = E[ 'key' ] extends keyof E[ 'record' ] ? E[ 'record' ][ E[ 'key' ] ] : never;

	/**
	 * Default context of the requested entity, sourced from PerPackageEntities.
	 *
	 * For core entities, the default context is extracted from the entity configuration
	 * in entities.js.
	 */
	export type DefaultContextOf<RecordOrKind extends AllEntityRecords | Kind,
		N extends Name | undefined = undefined> = EntityOf<RecordOrKind, N>[ 'defaultContext' ];

	/**
	 * An entity record type associated with specified kind and name, sourced from PerPackageEntities.
	 */
	export type EntityRecordOf<K extends Kind, N extends Name, C extends Context = DefaultContextOf<K, N>> = Extract<AllEntities<C>, {
		config: {
			kind: K;
			name: N
		}
	}>[ 'record' ];


	export type EntityQuery<C extends Context, R extends AllEntityRecords, WithFields extends boolean> =
		EntityConfigOf<R>['queryParams'] extends undefined ? Omit<Record<string, any>, '_fields'> : Omit<EntityConfigOf<R>['queryParams'], '_fields'> & {
			context?: C;
		} & ( WithFields extends true ? {
			/**
			 * The requested fields. If specified, the REST API will remove from the response
			 * any fields not on that list.
			 */
			_fields: Array<keyof R>;
		} : {} );

	/**
	 * A union of all known entity kinds.
	 */
	export type Kind = AllEntities[ 'config' ][ 'kind' ];
	/**
	 * A union of all known entity names.
	 */
	export type Name = AllEntities[ 'config' ][ 'name' ];

	type PostTypeConfig = {
		kind: 'postType';
		key: 'id';
		baseURLParams: { context: 'edit' };
		queryParams: PostsQuery;
	};

	type AttachmentEntity<C extends Context = Context> = EntityType<{
		name: 'media';
		kind: 'root';
		baseURLParams: { context: 'edit' };
	}, Attachment<C>, C>;

	type CategoryEntity<C extends Context = Context> = EntityType<{
		name: 'category';
		kind: 'taxonomy';
		key: 'id';
		baseURLParams: { context: 'edit' };
		queryParams: CategoriesQuery
	}, Category<C>, C>;

	type SiteEntity<C extends Context = Context> = EntityType<{
		name: 'site';
		kind: 'root';
	}, Settings<C>, C>;

	type PostTypeEntity<C extends Context = Context> = EntityType<{
		name: 'postType';
		kind: 'root';
		key: 'slug';
		baseURLParams: { context: 'edit' };
	}, Type<C>, C>;

	type SidebarEntity<C extends Context = Context> = EntityType<{
		name: 'sidebar';
		kind: 'root';
		baseURLParams: { context: 'edit' };
	}, Sidebar<C>, C>;

	type WidgetEntity<C extends Context = Context> = EntityType<{
		name: 'widget';
		kind: 'root';
		baseURLParams: { context: 'edit' };
	}, Widget<C>, C>;

	type TagEntity<C extends Context = Context> = EntityType<{
		name: 'post_tag';
		kind: 'taxonomy';
		key: 'id';
		baseURLParams: { context: 'edit' };
		queryParams: CategoriesQuery
	}, Tag<C>, C>;

	type TaxonomyEntity<C extends Context = Context> = EntityType<{
		name: 'taxonomy';
		kind: 'root';
		key: 'slug';
		baseURLParams: { context: 'edit' };
	}, Taxonomy<C>, C>;

	type WidgetTypeEntity<C extends Context = Context> = EntityType<{
		name: 'widgetType';
		kind: 'root';
		baseURLParams: { context: 'edit' };
	}, WidgetType<C>, C>;

	type UserEntity<C extends Context = Context> = EntityType<{
		name: 'user';
		kind: 'root';
		baseURLParams: { context: 'edit' };
	}, User<C>, C>;

	type CommentEntity<C extends Context = Context> = EntityType<{
		name: 'comment';
		kind: 'root';
		baseURLParams: { context: 'edit' };
	}, Comment<C>, C>;

	type NavMenuEntity<C extends Context = Context> = EntityType<{
		name: 'menu';
		kind: 'root';
		baseURLParams: { context: 'edit' };
	}, NavMenu<C>, C>;


	type NavMenuItemEntity<C extends Context = Context> = EntityType<{
		name: 'menuItem';
		kind: 'root';
		baseURLParams: { context: 'edit' };
	}, NavMenuItem<C>, C>;

	type MenuLocationEntity<C extends Context = Context> = EntityType<{
		name: 'menuLocation';
		kind: 'root';
		key: 'name';
		baseURLParams: { context: 'edit' };
	}, MenuLocation<C>, C>;

	type ThemeEntity<C extends Context = Context> = EntityType<{
		name: 'theme';
		kind: 'root';
		baseURLParams: { context: 'edit' };
		key: 'stylesheet';
	}, Theme<C>, C>;

	type PluginEntity<C extends Context = Context> = EntityType<{
		name: 'plugin';
		kind: 'root';
		baseURLParams: { context: 'edit' };
		key: 'plugin';
	}, Plugin<C>, C>;

	type PostEntity<C extends Context = Context> = EntityType<PostTypeConfig & {
		name: 'post'
	}, Post<C>, C>;

	type PageEntity<C extends Context = Context> = EntityType<PostTypeConfig & {
		name: 'page';
		queryParams: PagesQuery
	}, Page<C>, C>;

	type WpTemplateEntity<C extends Context> = EntityType<PostTypeConfig & {
		name: 'wp_template'
	}, WpTemplate<C>, C>;

	type WpTemplatePartEntity<C extends Context> = EntityType<PostTypeConfig & {
		name: 'wp_template_part'
	}, WpTemplatePart<C>, C>;

	export type CoreEntities<C extends Context> =
		| AttachmentEntity<C>
		| CategoryEntity<C>
		| CommentEntity<C>
		| MenuLocationEntity<C>
		| NavMenuEntity<C>
		| NavMenuItemEntity<C>
		| PageEntity<C>
		| PluginEntity<C>
		| PostEntity<C>
		| PostTypeEntity<C>
		| SidebarEntity<C>
		| SiteEntity<C>
		| TagEntity<C>
		| TaxonomyEntity<C>
		| ThemeEntity<C>
		| UserEntity<C>
		| WidgetEntity<C>
		| WidgetTypeEntity<C>
		| WpTemplateEntity<C>
		| WpTemplatePartEntity<C>;

}
