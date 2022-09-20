/**
 * Taxonomy API.
 *
 * @link https://developer.wordpress.org/rest-api/reference/taxonomies/
 */
declare module '@wordpress/api/taxonomies' {
	import {Context, ContextualField, Links} from '@wordpress/api';
	import {OmitNever} from '@lipemat/js-boilerplate/utility';

	/**
	 * Taxonomies Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/taxonomies/
	 */
	export type Taxonomy<C extends Context = 'view'> = OmitNever<{
		capabilities: ContextualField<{
			manage_terms: string;
			edit_terms: string;
			delete_terms: string;
			assign_terms: string;
		}, 'edit', C>;
		description: ContextualField<string, 'view' | 'edit', C>;
		hierarchical: ContextualField<boolean, 'view' | 'edit', C>;
		labels: ContextualField<{
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
		}, 'edit', C>;
		name: string;
		slug: string;
		show_cloud: ContextualField<boolean, 'edit', C>;
		types: ContextualField<string[], 'view' | 'edit', C>;
		rest_base: string;
		rest_namespace: string;
		visibility: ContextualField<{
			public: boolean;
			publicly_queryable: boolean;
			show_admin_column: boolean;
			show_in_nav_menus: boolean;
			show_in_quick_edit: boolean;
			show_ui: boolean;
		}, 'edit', C>;
		_links: Links;
	}>

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/taxonomies/#arguments
	 */
	export interface TaxonomiesQuery {
		content?: Context;
		type?: string;
	}
}
