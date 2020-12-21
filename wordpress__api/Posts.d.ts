/* eslint camelcase: 0 */
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

	/**
	 * Posts Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/posts/
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
	 * List Posts.
	 *
	 * https://developer.wordpress.org/rest-api/reference/posts/#arguments
	 */
	export interface PostsQuery extends Global<Post> {
		page?: number;
		per_page?: number;
		search?: string;
		after?: string;
		author?: number | number[];
		author_exclude?: number | number[];
		before?: string;
		exclude?: number[];
		include?: number[];
		offset?: number;
		order?: order;
		orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'relevance' | 'slug' | 'include_slugs' | 'title';
		slug?: string;
		status?: PostStatus;
		categories?: number[];
		categories_exclude?: number[];
		tags?: number[];
		tags_exclude?: number[];
		tax_relation?: 'OR' | 'AND';
		sticky?: boolean;
	}
}
