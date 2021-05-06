/* eslint-disable camelcase */
/**
 * @link https://developer.wordpress.org/rest-api/reference/search-results/
 */
declare module '@wordpress/api/search' {
	import {Category, Global, Links, Post} from '@wordpress/api';

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/search-results/#schema
	 */
	export interface SearchItem {
		id: string | number;
		title: string;
		url: string;
		type: 'post' | 'term' | 'post-format';
		subtype: 'post' | 'page' | 'category' | 'post_tag';
		_links: Links;
		_embedded?: {
			self: Array<Post | Category>
		}
	}

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/search-results/#list-search-results
	 */
	export interface SearchQuery extends Omit<Global<SearchItem>, '_embed'> {
		// Defaults to 1.
		page?: number;
		// Defaults to 10.
		per_page?: number;
		search?: string;
		// Defaults to 'post'.
		type?: 'post' | 'term' | 'post-format';
		subtype?: 'post' | 'page' | 'category' | 'post_tag';
		_embed?: 'self' | true;
	}
}
