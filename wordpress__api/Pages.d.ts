/**
 * Pages REST endpoint.
 *
 * @link https://developer.wordpress.org/rest-api/reference/pages/
 *
 */
declare module '@wordpress/api/pages' {
	import {CommentingStatus, Context, ContextualField, Editing, Global, Links, PingStatus, RenderedText} from '@wordpress/api';
	import {PostMeta, PostReadOnly, PostsQuery, PostStatus} from '@wordpress/api/posts';
	import {OmitNever} from '@lipemat/js-boilerplate/utility';
	import {User} from '@wordpress/api/users';
	import {Media} from '@wordpress/api/media';
	import {Category} from '@wordpress/api/categories';

	/**
	 * Pages Schema.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/pages/#schema
	 */
	export type Page<C extends Context = 'view'> = OmitNever<{
		parent: number;
		menu_order: number;
		author: number;
		comment_status: ContextualField<CommentingStatus, 'view' | 'edit', C>;
		content: ContextualField<RenderedText<C> & {
			block_version: ContextualField<string, 'edit', C>;
			protected: boolean;
		}, 'view' | 'edit', C>;
		date: string | null;
		date_gmt: ContextualField<string | null, 'view' | 'edit', C>;
		excerpt: RenderedText<C> & {
			protected: boolean;
		};
		featured_media: number;
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
		template: ContextualField<string, 'view' | 'edit', C>;
		title: RenderedText<C>;
		type: 'post' | string;
		_links: ContextualField<Links, 'view', C>;
		_embedded?: ContextualField<{
			author?: User[];
			'wp:featuredmedia'?: Media[];
			'wp:term'?: Category[];
		}, 'view', C>;
	}>


	/**
	 * Create Page.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/pages/#create-a-page
	 */
	export interface PageCreate extends Partial<Editing<Omit<Page<'edit'>, PostReadOnly>>> {
	}

	/**
	 * Edit Page.
	 *
	 * https://developer.wordpress.org/rest-api/reference/pages/#update-a-page
	 */
	export interface PageUpdate extends PageCreate {
		id: number;
	}

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
}
