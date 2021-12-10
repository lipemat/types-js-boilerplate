import {WpMedia} from '@lipemat/js-boilerplate/global/wp-media';
import {WpCodeEditor} from '@lipemat/js-boilerplate/global/wp-code-editor';

/**
 * Adds the global `wp` variable to `window` typescript definitions.
 *
 * May be accessed via `window.wp` and typescript will
 * understand the shape.
 *
 * @see global/wp-media.d.ts for separate/partial use of the
 * definitions via the exports.
 *
 * If additional declarations on the `wp` variable are needed
 * simply copy/paste this block into your project and define
 * additional properties.
 */
declare global {
	interface Window {
		wp: {
			media: WpMedia;
			codeEditor: WpCodeEditor;
		}
	}
}
