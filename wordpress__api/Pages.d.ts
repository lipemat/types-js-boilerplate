/* eslint camelcase: 0 */
declare module '@wordpress/api/pages' {
	import {Global} from '@wordpress/api';
	import {Post, PostCreate, PostsQuery} from '@wordpress/api/posts';

	/**
	 * Pages Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/pages/#schema
	 */
	export interface Page extends Omit<Post, 'categories' | 'tags' | 'format'> {
		parent: number;
		menu_order: number;
	}


	/**
	 * List Pages.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/pages/#list-pages
	 */
	export interface PagesQuery extends Omit<PostsQuery, 'orderby' | 'categories' | 'tags' | '_fields'>, Global<Page> {
		menu_order?: number;
		orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title' | 'menu_order';
		parent?: number;
		parent_exclude?: number[];
	}

	/**
	 * Create Page.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/pages/#create-a-page
	 */
	export interface PageCreate extends Omit<PostCreate, 'categories' | 'tags'> {
		parent?: number;
		menu_order?: number;
	}


}

