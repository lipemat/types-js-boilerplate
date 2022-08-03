declare module '@wordpress/api/categories' {
	import {Context, Global, Links, Meta, Order} from '@wordpress/api';

	/**
	 * Categories Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/categories/
	 */
	export interface Category {
		id: number;
		count: number;
		description: string;
		link: string;
		name: string;
		slug: string;
		taxonomy: string;
		parent: number;
		_links: Links;
		meta: Meta;
	}

	/**
	 * https://developer.wordpress.org/rest-api/reference/categories/#create-a-category
	 */
	export interface CategoryCreate {
		description?: string;
		name: string;
		slug?: string;
		parent?: number;
		meta?: Meta;
	}

	/**
	 * https://developer.wordpress.org/rest-api/reference/categories/#update-a-category
	 */
	export interface CategoryUpdate extends Partial<CategoryCreate> {
		id: number;
	}

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/categories/#list-categories
	 */
	export interface CategoriesQuery extends Global<Category> {
		context?: Context;
		page?: number;
		per_page?: number;
		search?: string;
		exclude?: number[];
		include?: number[];
		order?: Order;
		orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
		hide_empty?: boolean;
		parent?: number;
		post?: number;
		slug?: string | string[];
	}
}
