
declare module '@wordpress/api/comments' {
	import {Links} from '@wordpress/api';

	/* eslint camelcase: 0 */

	/**
	 * Comments Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/comments/
	 */
	export interface Comment {
		id: number;
		post: number;
		parent: number;
		author: number;
		author_name: string;
		author_url: string;
		date: string,
		date_gmt: string,
		content: {
			rendered: string;
		},
		link: string;
		status: 'approved' | 'unapproved' | 'spam' | 'trash';
		type: 'comment' | 'pingback' | 'trackback';
		author_avatar_urls: {
			24: string,
			48: string,
			96: string
		},
		meta: { [ key: string ]: any };
		_links: Links;
	}

	/**
	 * Comment Create.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/comments/#arguments-2
	 */
	export interface CommentCreate {
		author?: number;
		author_email?: string;
		author_ip?: string;
		author_name?: string;
		author_url?: string;
		author_user_agent?: string;
		content: string;
		date?: string;
		date_gmt?: string;
		parent?: number;
		post: number;
		status?: 'approved' | 'unapproved' | 'spam' | 'trash';
		meta?: { [ key: string ]: any };
	}
}
