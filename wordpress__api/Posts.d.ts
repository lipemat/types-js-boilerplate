/* eslint-disable camelcase */

/**
 * Posts REST endpoint.
 *
 * @link https://developer.wordpress.org/rest-api/reference/posts/
 *
 */
declare module '@wordpress/api/posts' {
	import {
		CommentingStatus,
		Context,
		ContextualField,
		Editing,
		Global,
		Links,
		Order,
		PingStatus,
		RenderedText
	} from '@wordpress/api';
	import {User} from '@wordpress/api/users';
	import {Media} from '@wordpress/api/media';
	import {Category} from '@wordpress/api/categories';
	import {OmitNever} from '@lipemat/js-boilerplate/utility';

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
	export type Post<C extends Context = 'view'> = OmitNever<{
		author: number;
		categories: ContextualField<number[], 'view' | 'edit', C>;
		comment_status: ContextualField<CommentingStatus, 'view' | 'edit', C>;
		content: ContextualField<RenderedText<C> & {
			block_version?: number;
			protected: boolean;
		}, 'view' | 'edit', C>;
		date: string | null;
		date_gmt: ContextualField<string | null, 'view' | 'edit', C>;
		excerpt: RenderedText<C> & {
			protected: boolean;
		};
		featured_media: number;
		format: PostFormat;
		generated_slug: ContextualField<string, 'edit', C>;
		guid: ContextualField<RenderedText<C>, 'view' | 'edit', C>;
		id: number;
		link: string;
		meta: ContextualField<PostMeta, 'view' | 'edit', C>;
		modified: ContextualField<string, 'view' | 'edit', C>;
		modified_gmt: ContextualField<string, 'view' | 'edit', C>;
		password: ContextualField<string, 'edit', C>;
		permalink_template: ContextualField<string, 'edit', C>;
		ping_status: ContextualField<PingStatus, 'view' | 'edit', C>;
		slug: string;
		status: ContextualField<PostStatus, 'view' | 'edit', C>;
		sticky: ContextualField<boolean, 'view' | 'edit', C>;
		tags: ContextualField<number[], 'view' | 'edit', C>;
		template: ContextualField<string, 'view' | 'edit', C>;
		title: RenderedText<C>;
		type: 'post' | string;
		_links: Links;
		_embedded?: {
			author: User[];
			'wp:featuredmedia'?: Media[];
			'wp:term'?: Category[];
		};
	}>;


	/**
	 * Create Post.
	 *
	 * https://developer.wordpress.org/rest-api/reference/posts/#create-a-post
	 */
	export interface PostCreate extends Partial<Editing<Post<'edit'>>> {
	}

	/**
	 * Update a Post.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/posts/#update-a-post
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
		order?: Order;
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
