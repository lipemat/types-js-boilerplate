/**
 * Editor Blocks REST endpoint.
 *
 * Reusable blocks `wp_block` post type.
 *
 * @link https://developer.wordpress.org/rest-api/reference/blocks/
 *
 */
declare module '@wordpress/api/editor-blocks' {
	import {PostReadOnly, PostStatus} from '@wordpress/api/posts';
	import {Context, ContextualField, Editing, Global, Links, Order, RenderedText} from '@wordpress/api';
	import {Media} from '@wordpress/api/media';
	import {Category} from '@wordpress/api/categories';
	import {OmitNever} from '@lipemat/js-boilerplate/utility';
	/**
	 * Editor Block Schema
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/blocks/#schema
	 */
	export type EditorBlock<C extends Context = 'view'> = OmitNever<{
		content: ContextualField<RenderedText<C> & {
			protected: boolean;
		}, 'view' | 'edit', C>;
		date: string | null;
		date_gmt: ContextualField<string | null, 'view' | 'edit', C>;
		guid: ContextualField<RenderedText<C>, 'view' | 'edit', C>;
		id: number;
		link: string;
		modified: ContextualField<string, 'view' | 'edit', C>;
		modified_gmt: ContextualField<string, 'view' | 'edit', C>;
		slug: string;
		status: ContextualField<PostStatus, 'view' | 'edit', C>;
		template: ContextualField<string, 'view' | 'edit', C>;
		title: RenderedText<C>;
		type: 'wp_block' | string;
		_links: Links;
		_embedded?: {
			'wp:featuredmedia'?: Media[];
			'wp:term'?: Category[];
		};
	}>

	/**
	 * Create Editor Block.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/blocks/#create-a-editor-block
	 */
	export interface EditorBlockCreate extends Partial<Editing<Omit<EditorBlock<'edit'>, PostReadOnly>>> {
	}

	/**
	 * Update an Editor Block
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/blocks/#update-a-editor-block
	 */
	export interface EditorBlockUpdate extends EditorBlockCreate {
		id: number;
	}

	/**
	 * List Editor Blocks
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/blocks/#list-editor-blocks
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
