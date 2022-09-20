/**
 * Categories API.
 *
 * @link https://developer.wordpress.org/rest-api/reference/categories/
 *
 */
declare module '@wordpress/api/categories' {
	import {Context, ContextualField, Global, Links, Meta, Order} from '@wordpress/api';
	import {OmitNever} from '@lipemat/js-boilerplate/utility';

	/**
	 * Categories Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/categories/
	 */
	export type Category<C extends Context = 'view'> = OmitNever<{
		id: number;
		count: ContextualField<number, 'view' | 'edit', C>;
		description: ContextualField<string, 'view' | 'edit', C>;
		link: string;
		name: string;
		slug: string;
		taxonomy: string;
		parent: ContextualField<number, 'view' | 'edit', C>;
		_links: Links;
		meta: ContextualField<Meta, 'view' | 'edit', C>;
	}>

	/**
	 * https://developer.wordpress.org/rest-api/reference/categories/#create-a-category
	 */
	export interface CategoryCreate extends Partial<Category<'edit'>> {
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
