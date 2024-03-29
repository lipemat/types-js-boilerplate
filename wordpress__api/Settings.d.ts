/* eslint-disable camelcase */
/**
 * Settings API.
 */
declare module '@wordpress/api/settings' {
	import {Context} from '@wordpress/api';

	/**
	 * Settings Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/settings/
	 */
	export interface Settings<C extends Context = 'view'> {
		date_format: string;
		default_category: number;
		default_comment_status: 'open' | 'closed';
		default_ping_status: 'open' | 'closed';
		default_post_format: string;
		description: string;
		language: string;
		posts_per_page: number;
		start_of_week: string;
		time_format: string;
		timezone: string;
		title: string;
		use_smilies: boolean;
	}
}
