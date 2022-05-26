import {WpMedia} from '@lipemat/js-boilerplate/global/wp-media';
import {WpCodeEditor} from '@lipemat/js-boilerplate/global/wp-code-editor';
import ApiFetch from '@wordpress/api-fetch';
import EditPost from '@wordpress/edit-post';
import BlockEditor from '@wordpress/block-editor';
import Blocks from '@wordpress/blocks';
import BlockSerialize from '@wordpress/block-serialization-default-parser';
import Components from '@wordpress/components';
import CoreData from '@wordpress/core-data';
import Data from '@wordpress/data';
import Editor from '@wordpress/editor';
import Element from '@wordpress/element';
import Hooks from '@wordpress/hooks';
import HtmlEntities from '@wordpress/html-entities';
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
			blockSerializationDefaultParser?: BlockSerialize,
			codeEditor?: WpCodeEditor;
			components?: Components;
			coreData?: CoreData;
			data?: Data;
			editPost?: EditPost,
			editor?: Editor;
			element?: Element;
			hooks?: Hooks;
			htmlEntities?: HtmlEntities;
			i18n?: I18N;
			icons?: Icons;
			media?: WpMedia;
			mediaUtils?: MediaUtils;
			// wp_enqueue_scripts( 'password-strength-meter' );
			passwordStrength?: {
				meter: ( value: string, blacklist: string[] ) => number;
				userInputDisallowedList: () => string[];
			}
			plugins?: Plugins;
			primitives?: Primitives;
			url?: URL;
			// wp_enqueue_scripts( 'wp-api-fetch' );
			wpApiSettings?: {
				root: string;
				nonce: string;
				versionString: string;
			};
		}
	}
}
