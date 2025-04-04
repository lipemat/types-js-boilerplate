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
			add_new_item: string;
			add_or_remove_items: null;
			all_items: string;
			back_to_items: string;
			choose_from_most_used: null;
			desc_field_description: string;
			edit_item: string;
			filter_by_item: string;
			item_link: string;
			item_link_description: string;
			items_list: string;
			items_list_navigation: string;
			menu_name: string;
			most_used: string;
			name: string;
			name_admin_bar: string;
			name_field_description: string;
			new_item_name: string;
			no_item: string;
			no_terms: string;
			not_found: string;
			parent_field_description: string;
			parent_item: string;
			parent_item_colon: string;
			popular_items: null;
			search_items: string;
			separate_items_with_commas: null;
			singular_name: string;
			slug_field_description: string;
			update_item: string;
			view_item: string;
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
