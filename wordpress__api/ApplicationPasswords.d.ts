/* eslint-disable camelcase */
declare module '@wordpress/api/application-passwords' {
	/**
	 * Application password endpoint
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/application-passwords/
	 */
	export interface ApplicationPassword {
		uuid: string;
		app_id: string | null;
		name: string;
		created: number;
		last_used: number | null;
		last_ip: string | null;
	}

	/**
	 * Create an application password
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/application-passwords/#create-a-application-password
	 */
	export interface ApplicationPasswordCreate {
		app_id?: string;
		name?: string;
	}

}