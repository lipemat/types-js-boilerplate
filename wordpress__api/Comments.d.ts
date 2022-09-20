/**
 * Comments endpoint.
 *
 * @link https://developer.wordpress.org/rest-api/reference/comments/
 */
declare module '@wordpress/api/comments' {
	import {Context, ContextualField, Editing, Links, Order, RenderedText} from '@wordpress/api';
	import {OmitNever} from '@lipemat/js-boilerplate/utility';
	import {AvatarUrls} from '@wordpress/api/users';

	export type CommentStatus = 'hold' | 'approve' | 'spam' | 'trash' | '1' | '0';

	export type CommentType = 'comment' | 'pingback' | 'trackback';

	/**
	 * Comments Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/comments/
	 */
	export type Comment<C extends Context = 'view'> = OmitNever<{
		id: number;
		author: number;
		author_email: ContextualField<string, 'edit', C>;
		author_ip: ContextualField<string, 'edit', C>;
		author_name: string;
		author_url: string;
		author_user_agent: ContextualField<string, 'edit', C>;
		content: RenderedText<C>;
		date: string,
		date_gmt: ContextualField<string, 'view' | 'edit', C>;
		link: string;
		parent: number;
		post: ContextualField<number, 'view' | 'edit', C>;
		status: ContextualField<CommentStatus, 'view' | 'edit', C>;
		type: CommentType;
		author_avatar_urls: AvatarUrls;
		meta: ContextualField<{ [ key: string ]: any }, 'view' | 'edit', C>;
		_links: Links;
	}>

	/**
	 * Comment Create.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/comments/#create-a-comment
	 */
	export interface CommentCreate extends Editing<Partial<Comment<'edit'>>> {
	}

	/**
	 * Comment Update.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/comments/#update-a-comment
	 */
	export interface CommentUpdate extends CommentCreate {
		id: number;
	}

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/comments/#list-comments
	 */
	export interface CommentsQuery {
		context?: Context;
		page?: number;
		per_page?: number;
		search?: string;
		after?: string;
		author?: number[];
		author_exclude?: number[];
		author_email?: string;
		before?: string;
		exclude?: number[];
		include?: number[];
		offset?: number;
		order?: Order;
		orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';
		parent?: number[];
		parent_exclude?: number[];
		post?: number[];
		status?: CommentStatus;
		type?: CommentType;
		password?: string;
		_embed?: true | 'author' | 'up' | 'in-reply-to';
		_fields?: Array<keyof Comment>;
	}
}
