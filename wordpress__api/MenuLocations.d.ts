/**
 * @notice Not available until WP 5.9.
 * @todo Add links to documentation when the WP docs are published.
 */
declare module '@wordpress/api/menu-locations' {
	import {Context, Links} from '@wordpress/api';

	export interface MenuLocation<C extends Context = 'view'> {
		description: string;
		menu: number;
		name: string;
		_links: Links;
	}
}
