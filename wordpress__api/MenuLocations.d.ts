/**
 * @notice Not available until WP 5.9.
 * @todo Add links to documentation when the WP docs are published.
 */
declare module '@wordpress/api/menu-locations' {
	import {Links} from '@wordpress/api';

	export interface MenuLocation {
		description: string;
		menu: number;
		name: string;
		_links: Links;
	}
}
