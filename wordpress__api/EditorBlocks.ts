/**
 * Editor Blocks REST endpoint.
 *
 * Reusable blocks `wp_block` post type.
 *
 * @link https://developer.wordpress.org/rest-api/reference/blocks/
 *
 */
declare module '@wordpress/api/editor-blocks' {
	import {Context, Global, Links, Order} from '@wordpress/api';
	import {Media} from '@wordpress/api/media';
	import {Category} from '@wordpress/api/categories';
	import {PostStatus} from '@wordpress/api/posts';

	/**
	 * Editor Block Schema
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/blocks/#schema
	 */
	export interface EditorBlock {
		content: {
			protected: boolean;
			raw: string;
		};
		date: string;
		date_gmt: string;
		guid: {
			rendered: string;
		};
		id: number;
		link: string;
		modified: string;
		modified_gmt: string;
		slug: string;
		status: PostStatus;
		template: string;
		title: {
			raw: string;
		};
		type: 'wp_block' | string;
		_links: Links;
		_embedded?: {
			'wp:featuredmedia'?: Media[];
			'wp:term'?: Category[];
		};
	}

	/**
	 * Create Editor Block.
	 *
	 * https://developer.wordpress.org/rest-api/reference/blocks/#create-a-editor-block
	 */
	export interface EditorBlockCreate {
		date?: string;
		date_gmt?: string;
		password?: string;
		slug?: string;
		status?: PostStatus;
		title?: string | {
			raw: string;
		};
		content?: string | {
			raw: string;
		};
		template?: string;
	}

	/**
	 * List Editor Blocks
	 *
	 * @https://developer.wordpress.org/rest-api/reference/blocks/#list-editor-blocks
	 */
	export interface EditorBlocksQuery extends Global<EditorBlock> {
		after?: string;
		before?: string;
		context?: Context;
		exclude?: number[];
		include?: number[];
		offset?: number;
		order?: Order;
		orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
		page?: number;
		per_page?: number;
		search?: string;
		slug?: string;
		status?: PostStatus;
	}
}
