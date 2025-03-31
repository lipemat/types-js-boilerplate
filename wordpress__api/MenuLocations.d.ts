/**
 * Menu locations REST endpoint.
 *
 * @link https://developer.wordpress.org/rest-api/reference/menu-locations/
 */
declare module '@wordpress/api/menu-locations' {
	import {Context, Links} from '@wordpress/api';

	/**
	 * @link https://developer.wordpress.org/rest-api/reference/menu-locations/#schema
	 */
	export interface MenuLocation<C extends Context = 'view'> {
		description: string;
		menu: number;
		name: string;
		_links: Links;
	}
}
