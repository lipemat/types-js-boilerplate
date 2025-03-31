
/**
 * Menus REST endpoint.
 *
 * @link https://developer.wordpress.org/rest-api/reference/nav_menus/
 *
 * @note Must be logged in with correct permissions or use the `rest_menu_read_access` filter.
 * @see https://make.wordpress.org/core/2025/03/27/new-rest-api-filter-for-exposing-menus-publicly-in-wordpress-6-8/
 */
declare module '@wordpress/api/menus' {
	import {Context, ContextualField, Links, Meta} from '@wordpress/api';
	import {CategoriesQuery, CategoryCreate} from '@wordpress/api/categories';

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/nav_menus/#schema
	 */
	export interface Menu<C extends Context = 'view'> {
		auto_add: ContextualField<boolean, 'view' | 'edit', C>;
		description: ContextualField<string, 'view' | 'edit', C>;
		id: number;
		locations: ContextualField<string[], 'view' | 'edit', C>;
		meta: ContextualField<Meta, 'view' | 'edit', C>;
		name: string;
		slug: string;
		_links: Links;
	}

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/nav_menus/#create-a-nav_menu
	 */
	export interface MenuCreate extends Omit<CategoryCreate, 'parent'> {
		auto_add?: boolean;
		locations?: string[];
	}

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/nav_menus/#update-a-nav_menu
	 */
	export interface MenuUpdate extends Partial<MenuCreate> {
		id: number;
	}

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/nav_menus/#list-nav_menus
	 */
	export interface MenusQuery extends Omit<CategoriesQuery, '_fields'> {
		_fields?: Array<keyof Menu>;
	}
}
