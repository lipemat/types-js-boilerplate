declare module '@wordpress/api/taxonomies' {
	import {Links} from '@wordpress/api';

	/**
	 * Taxonomies Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/taxonomies/
	 */
	export interface Taxonomy {
		name: string;
		slug: string;
		description: string;
		type: Array<string>;
		hierarchical: boolean;
		// eslint-disable-next-line camelcase
		rest_base: string;
		_links: Links;
	}
}
