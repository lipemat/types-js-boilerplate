/**
 * Search REST Endpoint
 *
 * @link https://developer.wordpress.org/rest-api/reference/search-results/
 */
declare module '@wordpress/api/search' {
	import {Category, Collection, Global, Links, Post} from '@wordpress/api';

	export type SubType = 'post' | 'page' | 'category' | 'post_tag' | 'any';

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/search-results/#schema
	 */
	export type SearchItem = PostItem | TermItem | PostFormatItem;

	export interface PostItem<ST extends string = 'post' | 'page'> {
		id: string | number;
		title: string;
		url: string;
		type: 'post';
		subtype: ST;
		_links: Links;
		_embedded?: {
			self: [ Post | Category ]
		};
	}

	export interface TermItem<T extends string = 'category' | 'post_tag'> {
		id: number;
		title: string;
		url: string;
		type: T;
		_links: Links;
		subtype?: never;
		_embedded?: {
			self: [ Category ]
		};
	}

	export interface PostFormatItem {
		id: string;
		title: string;
		url: string;
		type: 'post-format';
		subtype?: never;
		_links: {
			collection: Collection[];
		};
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
