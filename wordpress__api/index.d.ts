/**
 * Type declarations for WP Rest Api.
 *
 * @author Mat Lipe
 *
 * @link https://developer.wordpress.org/rest-api/reference/
 *
 * @link https://github.com/WordPress/gutenberg/tree/trunk/packages/core-data/src/entity-types
 *
 */
declare module '@wordpress/api' {
	export * from '@wordpress/api/application-passwords';
	export * from '@wordpress/api/categories';
	export * from '@wordpress/api/comments';
	export * from '@wordpress/api/editor-blocks';
	export * from '@wordpress/api/media';
	export * from '@wordpress/api/menu-items';
	export * from '@wordpress/api/menu-locations';
	export * from '@wordpress/api/menus';
	export * from '@wordpress/api/pages';
	export * from '@wordpress/api/posts';
	export * from '@wordpress/api/search';
	export * from '@wordpress/api/settings';
	export * from '@wordpress/api/taxonomies';
	export * from '@wordpress/api/types';
	export * from '@wordpress/api/users';

	export type Order = 'asc' | 'desc';
	export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
	export type Meta = {
		[ key: string ]: any;
	}

	export interface Collection {
		href: string;
	}

	export type CommentingStatus = 'open' | 'closed';
	export type Context = 'view' | 'edit' | 'embed';
	export type PingStatus = 'open' | 'closed';

	/**
	 * ContextualField makes the field available only in the specified given contexts.
	 *
	 * If the current context is not found in available, the type will
	 * be set to `never`.
	 *
	 * Used with `OmitNever` and properties not in this context will be removed.
	 */
	export type ContextualField<T, AvailableIn extends Context, Current extends Context> = AvailableIn extends Current ? T : never;

	/**
	 * Convert all RenderedText values to string.
	 *
	 * If we are editing an item the `RenderedText` fields
	 * only accept `string` not the full `{raw:string,rendered:string}` objects.
	 *
	 * @see RenderedText
	 */
	export type Editing<T> = Partial<{
		[K in keyof T]: T[ K ] extends RenderedText<any> ? string : T[ K ];
	}>;


	export interface Embeddable {
		embeddable: boolean;
		href: string;
	}

	/**
	 * Text fields, which include a `raw` in edit context,
	 * and a `rendered` in all other context.
	 *
	 * Used with `Editing` this field is converted
	 * to `string` when making edits.
	 */
	export interface RenderedText<C extends Context> {
		raw: ContextualField<string, 'edit', C>;
		rendered: string;
	}

	export interface Links {
		about: Collection[],
		author?: Embeddable[];
		collection: Collection[];
		curies?: [ {
			name: string;
			href: string;
			templated: boolean;
		} ];
		replies?: Embeddable[];
		'version-history'?: [ {
			count: number;
			href: string;
		} ];
		'predecessor-version'?: [ {
			id: number;
			href: string;
		} ];
		self: Collection[] | Embeddable[];
		'wp:attachment'?: Collection[];
		'wp:featuredmedia'?: Embeddable[];
		'wp:menu'?: Embeddable[];
		'wp:menu-location'?: Embeddable[];
		'wp:menu-item-object'?: [ {
			post_type: string;
			embeddable: boolean;
			href: string;
		} ];
		'wp:post_type'?: Collection[];
		'wp:term'?: [ {
			taxonomy: string;
			embeddable: boolean;
			href: string;
		} ]
	}

	export interface Global<T> {
		_embed?: true | 'author' | 'replies' | 'wp:featuredmedia' | 'wp:attachment' | 'wp:term';
		_fields?: Array<keyof T>;
		context?: Context;
	}
}
