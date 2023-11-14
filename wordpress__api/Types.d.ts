/**
 * Post Type API.
 */
declare module '@wordpress/api/types' {
	import {Context, ContextualField, Global, Links} from '@wordpress/api';
	import {OmitNever} from '@lipemat/js-boilerplate/utility';

	/**
	 * Post Type Schema
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/post-types/#schema
	 */
	export type Type<C extends Context = 'view'> = OmitNever<{
		capabilities: ContextualField<{
			create_posts: string;
			delete_others_posts: string;
			delete_post: string;
			delete_posts: string;
			delete_private_posts: string;
			delete_published_posts: string;
			edit_others_posts: string;
			edit_post: string;
			edit_posts: string;
			edit_private_posts: string;
			edit_published_posts: string;
			publish_posts: string;
			read: string;
			read_post: string;
			read_private_posts: string;
		}, 'edit', C>;
		description: ContextualField<string, 'view' | 'edit', C>;
		hierarchical: ContextualField<boolean, 'view' | 'edit', C>;
		viewable: ContextualField<boolean, 'edit', C>;
		labels: ContextualField<{
			add_new: string;
			add_new_item: string;
			all_items: string;
			archives: string;
			attributes: string;
			edit_item: string;
			featured_image: string;
			filter_items_list: string;
			insert_into_item: string;
			item_published: string;
			item_published_privately: string;
			item_reverted_to_draft: string;
			item_scheduled: string;
			item_updated: string;
			items_list: string;
			items_list_navigation: string;
			menu_name: string;
			name: string;
			name_admin_bar: string;
			new_item: string;
			not_found: string;
			not_found_in_trash: string;
			parent_item_colon: string | null;
			remove_featured_image: string;
			search_items: string;
			set_featured_image: string;
			singular_name: string;
			uploaded_to_this_item: string;
			use_featured_image: string;
			view_item: string;
			view_items: string;
		}, 'edit', C>;
		name: string,
		slug: string,
		supports: ContextualField<{
			author?: boolean;
			comments?: boolean;
			'custom-fields'?: boolean;
			editor?: boolean;
			excerpt?: boolean;
			'post-formats'?: boolean;
			revisions?: boolean;
			thumbnail?: boolean;
			title?: boolean;
			trackbacks?: boolean;
			[ support: string ]: boolean | undefined;
		}, 'edit', C>;
		taxonomies: ContextualField<Array<string>, 'view' | 'edit', C>;
		rest_base: string,
		_links: Pick<Links, 'collection' | 'curies' | 'wp:items'>;
	}>

	/**
	 * List Types.
	 *
	 * The `page` and `per_page` arguments are not documented, but are used
	 * throughout Gutenberg.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/post-types/#retrieve-a-type-2
	 */
	export interface TypesQuery extends Global<Type> {
		page?: number;
		per_page?: number;
	}
}
