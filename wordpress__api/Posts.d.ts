/* eslint-disable camelcase */

/**
 * Posts REST endpoint.
 *
 * @link https://developer.wordpress.org/rest-api/reference/posts/
 *
 */
declare module '@wordpress/api/posts' {
	import {Global, Links, order} from '@wordpress/api';
	import {User} from '@wordpress/api/users';
	import {Media} from '@wordpress/api/media';
	import {Category} from '@wordpress/api/categories';

	export type PostFormat =
		'standard'
		| 'aside'
		| 'chat'
		| 'gallery'
		| 'link'
		| 'image'
		| 'quote'
		| 'status'
		| 'video'
		| 'audio';
	export type PostStatus = 'publish' | 'future' | 'draft' | 'pending' | 'private';
	export type PostMeta = {
		[ key: string ]: any;
	}
	export type TaxQuery = {
		terms: number[];
		include_children?: boolean;
		operator?: 'OR' | 'AND'; // WP 5.8+.
	}

	/**
	 * Post Schema.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/posts/#schema
	 */
	export interface Post {
		id: number;
		date: string;
		date_gmt: string;
		guid: {
			raw?: string;
			rendered: string;
		}
		modified: string;
		modified_gmt: string;
		slug: string;
		status: PostStatus;
		type: 'post' | string;
		password?: string;
		permalink_template?: string;
		generated_slug?: string;
		link: string;
		title: {
			raw?: string;
			rendered: string;
		}
		content: {
			block_version?: number;
			protected: boolean;
			raw?: string;
			rendered: string;
		}
		excerpt: {
			raw?: string;
			rendered: string;
			protected: boolean;
		}
		author: number;
		featured_media: number;
		meta: PostMeta;
		comment_status: 'open' | 'closed';
		ping_status: 'open' | 'closed';
		sticky: boolean;
		template: string;
		format: PostFormat;
		categories: number[];
		tags: number[];
		_links: Links;
		_embedded?: {
			author: User[];
			'wp:featuredmedia'?: Media[];
			'wp:term'?: Category[];
		}
	}

	/**
	 * Create Post.
	 *
	 * https://developer.wordpress.org/rest-api/reference/posts/#create-a-post
	 */
	export interface PostCreate {
		date?: string;
		date_gmt?: string;
		slug?: string;
		status?: PostStatus;
		password?: string;
		title?: string | {
			raw: string;
		};
		content?: string | {
			raw: string;
		};
		author?: number;
		excerpt?: string | {
			raw: string;
		};
		featured_media?: number;
		comment_status?: 'open' | 'closed';
		ping_status?: 'open' | 'closed';
		format?: PostFormat;
		meta?: PostMeta;
		sticky?: boolean;
		template?: string;
		categories?: number[];
		tags?: number[];
	}

	/**
	 * Update a Post.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/posts/#arguments-4
	 */
	export interface PostUpdate extends PostCreate {
		id: number;
	}

	/**
	 * List Posts.
	 *
	 * https://developer.wordpress.org/rest-api/reference/posts/#arguments
	 */
	export interface PostsQuery extends Global<Post> {
		after?: string;
		author?: number | number[];
		author_exclude?: number | number[];
		before?: string;
		categories?: number[] | TaxQuery;
		categories_exclude?: number[];
		exclude?: number[];
		include?: number[];
		modified_after?: string;
		modified_before?: string;
		offset?: number;
		order?: order;
		orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'relevance' | 'slug' | 'include_slugs' | 'title';
		page?: number;
		per_page?: number;
		search?: string;
		slug?: string;
		status?: PostStatus;
		sticky?: boolean;
		tags?: number[] | TaxQuery;
		tags_exclude?: number[];
		tax_relation?: 'OR' | 'AND';
	}
}
