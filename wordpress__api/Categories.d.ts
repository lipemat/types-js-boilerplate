declare module '@wordpress/api/categories' {
	import {Links} from '@wordpress/api';

	/**
	 * Categories Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/categories/
	 */
	export interface Category {
		id: number;
		count: number;
		description: string;
		link: string;
		name: string;
		taxonomy: string;
		parent: number;
		_links: Links;
	}
}
