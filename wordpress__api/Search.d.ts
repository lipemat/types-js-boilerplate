/* eslint-disable camelcase */
/**
 * Search REST Endpoint
 *
 * @link https://developer.wordpress.org/rest-api/reference/search-results/
 */
declare module '@wordpress/api/search' {
	import {Category, Global, Links, Post} from '@wordpress/api';

	export type SubType = 'post' | 'page' | 'category' | 'post_tag' | 'any';

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
	 * Search Endpoint Query Parameters
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/search-results/#list-search-results
	 *
	 * @see https://make.wordpress.org/core/2022/10/11/miscellaneous-rest-api-improvements-in-wordpress-6-1/
	 */
	export interface SearchQuery<ST extends string = SubType> extends Omit<Global<SearchItem>, '_embed' | 'context'> {
		context?: 'view' | 'embed';
		exclude?: number[];
		include?: number[];
		page?: number;
		per_page?: number;
		search?: string;
		subtype?: ST;
		type?: 'post' | 'term' | 'post-format';
		_embed?: 'self' | true;
	}
}
