declare module '@wordpress/api/categories' {
	import {context, Links, meta, order} from '@wordpress/api';

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
		meta: meta;
	}

	/**
	 * https://developer.wordpress.org/rest-api/reference/categories/#create-a-category
	 */
	export interface CategoryCreate {
		description?: string;
		name: string;
		slug?: string;
		parent?: number;
		meta?: meta;
	}

	/**
	 * https://developer.wordpress.org/rest-api/reference/categories/#update-a-category
	 */
	export interface CategoryUpdate extends CategoryCreate {
		id: number;
	}

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/categories/#list-categories
	 */
	export interface CategoriesQuery {
		context?: context;
		page?: number;
		per_page?: number;
		search?: string;
		exclude?: number[];
		include?: number[];
		order?: order;
		orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
		hide_empty?: boolean;
		parent?: number;
		post?: number;
		slug: string | string[];
	}
}
