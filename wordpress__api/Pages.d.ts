/* eslint-disable camelcase */

/**
 * Pages REST endpoint.
 *
 * @link https://developer.wordpress.org/rest-api/reference/pages/
 *
 */
declare module '@wordpress/api/pages' {
	import {Context, Global} from '@wordpress/api';
	import {Post, PostCreate, PostsQuery} from '@wordpress/api/posts';
	import {OmitNever} from '@lipemat/js-boilerplate/utility';

	/**
	 * Pages Schema.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/pages/#schema
	 */
	export type Page<C extends Context = 'view'> = OmitNever<Omit<Post<C>, 'categories' | 'tags' | 'format'> & {
		parent: number;
		menu_order: number;
	}>


	/**
	 * List Pages.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/pages/#list-pages
	 */
	export interface PagesQuery extends Omit<PostsQuery, 'orderby' | 'categories' | 'tags' | '_fields' | 'sticky'>, Global<Page> {
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
	export interface PageCreate extends Omit<PostCreate, 'categories' | 'tags' | 'sticky'> {
		parent?: number;
		menu_order?: number;
	}

	/**
	 * Edit Page.
	 *
	 * https://developer.wordpress.org/rest-api/reference/pages/#update-a-page
	 */
	export interface PageUpdate extends PageCreate {
		id: number;
	}
}
