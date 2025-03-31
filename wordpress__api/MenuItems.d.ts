/**
 * Menu items REST endpoint.
 *
 * @link https://developer.wordpress.org/rest-api/reference/nav_menu_items/
 *
 * @note Must be logged in with correct permissions or use the `rest_menu_read_access` filter.
 * @see https://make.wordpress.org/core/2025/03/27/new-rest-api-filter-for-exposing-menus-publicly-in-wordpress-6-8/
 */
declare module '@wordpress/api/menu-items' {
	import {PostsQuery, PostStatus, TaxQuery} from '@wordpress/api/posts';
	import {Context, Links, Meta, RenderedText} from '@wordpress/api';
	import type {PagesQuery} from '@wordpress/api/pages';

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/nav_menu_items/#schema
	 */
	export interface MenuItem<C extends Context = 'view'> {
		attr_title: string;
		classes: string[];
		description: string;
		id: number;
		invalid: boolean;
		menu_order: number;
		menus: number;
		meta: Meta;
		object: string;
		object_id: number;
		parent: number;
		status: PostStatus;
		target: string;
		title: RenderedText<C>;
		type: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
		type_label: string;
		url: string;
		xfn: string[];
		_links: Links;
	}

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/nav_menu_items/#create-a-nav_menu_item
	 */
	export interface MenuItemCreate extends Partial<Omit<MenuItem<'edit'>, 'title'>> {
		title: string;
		type: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
	}

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/nav_menu_items/#update-a-nav_menu_item
	 */
	export interface MenuItemUpdate extends Partial<MenuItemCreate> {
		id: number;
	}

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/nav_menu_items/#list-nav_menu_items
	 */
	export interface MenuItemsQuery extends Omit<PostsQuery, 'orderby' | '_fields'> {
		menu_order?: number;
		menus?: number[] | TaxQuery;
		menus_exclude?: number[] | TaxQuery;
		order?: 'asc' | 'desc';
		orderby?: PagesQuery['orderby'];
		per_page?: number;
		search_columns?: Array<keyof MenuItem>;
		tax_relation?: 'OR' | 'AND';
		_fields?: Array<keyof MenuItem>;
	}
}
