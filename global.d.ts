import {WpMedia} from '@lipemat/js-boilerplate/global/wp-media';

/**
 * Adds the global `wp` variable to `window` definitions.
 *
 * If additional declarations on the `wp` variable are needed
 * simply copy/paste this block into your project and define
 * additional properties.
 */
declare global {
	interface Window {
		wp: {
			media: WpMedia;
		}
	}
}
