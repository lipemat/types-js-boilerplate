/**
 * Taxonomy API.
 */
declare module '@wordpress/api/taxonomies' {
	import {Context, Links} from '@wordpress/api';

	/**
	 * Taxonomies Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/taxonomies/
	 */
	export interface Taxonomy<C extends Context = 'view'> {
		name: string;
		slug: string;
		capabilities?: {
			manage_terms: string;
			edit_terms: string;
			delete_terms: string;
			assign_terms: string;
		};
		description: string;
		labels?: {
			name: string;
			singular_name: string;
			search_items: string;
			popular_items: null;
			all_items: string;
			parent_item: string;
			parent_item_colon: string;
			name_field_description: string;
			slug_field_description: string;
			parent_field_description: string;
			desc_field_description: string;
			edit_item: string;
			view_item: string;
			update_item: string;
			add_new_item: string;
			new_item_name: string;
			separate_items_with_commas: null;
			add_or_remove_items: null;
			choose_from_most_used: null;
			not_found: string;
			no_terms: string;
			filter_by_item: string;
			items_list_navigation: string;
			items_list: string;
			most_used: string;
			back_to_items: string;
			item_link: string;
			item_link_description: string;
			menu_name: string;
			name_admin_bar: string;
		};
		types: Array<string>;
		show_cloud?: boolean;
		hierarchical: boolean;
		// eslint-disable-next-line camelcase
		rest_base: string;
		rest_namespace: string;
		visibility?: {
			public: boolean;
			publicly_queryable: boolean;
			show_admin_column: boolean;
			show_in_nav_menus: boolean;
			show_in_quick_edit: boolean;
			show_ui: boolean;
		};
		_links: Links;
	}
}
