/* eslint-disable camelcase */
declare module '@wordpress/api/types' {
	import {Links} from '@wordpress/api';

	/**
	 * Post Type Endpoint.
	 *
	 * https://developer.wordpress.org/rest-api/reference/post-types/#retrieve-a-type-2
	 */
	export interface Type {
		capabilities?: {
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
		}
		description: string;
		hierarchical: boolean;
		viewable?: boolean;
		labels?: {
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
		}
		name: string,
		slug: string,
		supports?: {
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
		}
		taxonomies: Array<string>,
		rest_base: string,
		_links: Links;
	}
}
