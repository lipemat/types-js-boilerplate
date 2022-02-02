import {WpMedia} from '@lipemat/js-boilerplate/global/wp-media';
import {WpCodeEditor} from '@lipemat/js-boilerplate/global/wp-code-editor';
import ApiFetch from '@wordpress/api-fetch';
import EditPost from '@wordpress/edit-post';
import BlockEditor from '@wordpress/block-editor';
import Blocks from '@wordpress/blocks';
import Components from '@wordpress/components';
import CoreData from '@wordpress/core-data';
import Data from '@wordpress/data';
import Editor from '@wordpress/editor';
import Element from '@wordpress/element';
import {Hook} from '@wordpress/hooks';
import I18N from '@wordpress/i18n';
import Icons from '@wordpress/icons';
import MediaUtils from '@wordpress/media-utils';
import Plugins from '@wordpress/plugins';
import Primitives from '@wordpress/primitives';
import URL from '@wordpress/url';

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
			apiFetch?: typeof ApiFetch,
			blockEditor?: BlockEditor;
			blocks?: Blocks,
			codeEditor?: WpCodeEditor;
			components?: Components;
			coreData?: CoreData;
			data?: Data;
			editPost?: EditPost,
			editor?: Editor;
			element?: Element;
			hooks?: Hook;
			i18n?: I18N;
			icons?: Icons;
			media?: WpMedia;
			mediaUtils?: MediaUtils;
			plugins?: Plugins;
			primitives?: Primitives;
			url?: URL;
		}
	}
}
