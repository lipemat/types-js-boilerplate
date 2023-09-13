import {WpMedia} from '@lipemat/js-boilerplate/global/wp-media';
import {WpCodeEditor} from '@lipemat/js-boilerplate/global/wp-code-editor';
import ApiFetch from '@wordpress/api-fetch';
import Autop from '@wordpress/autop';
import BlockEditor from '@wordpress/block-editor';
import BlockLibrary from '@wordpress/block-library';
import Blocks from '@wordpress/blocks';
import BlockSerialize from '@wordpress/block-serialization-default-parser';
import Commands from '@wordpress/commands';
import Components from '@wordpress/components';
import CoreData from '@wordpress/core-data';
import Data from '@wordpress/data';
import DomReady from '@wordpress/dom-ready';
import EditPost from '@wordpress/edit-post';
import EditSite from '@wordpress/edit-site';
import Editor from '@wordpress/editor';
import Element from '@wordpress/element';
import EscapeHtml from '@wordpress/escape-html';
import Hooks from '@wordpress/hooks';
import HtmlEntities from '@wordpress/html-entities';
import I18N from '@wordpress/i18n';
import Keycodes from '@wordpress/keycodes';
import MediaUtils from '@wordpress/media-utils';
import Plugins from '@wordpress/plugins';
import Primitives from '@wordpress/primitives';
import RichText from '@wordpress/rich-text';
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
			autop?: Autop;
			blockEditor?: BlockEditor;
			blockLibrary?: BlockLibrary;
			blocks?: Blocks,
			blockSerializationDefaultParser?: BlockSerialize,
			codeEditor?: WpCodeEditor;
			commands?: Commands;
			components?: Components;
			coreData?: CoreData;
			customize?: {
				bind: ( event: string | 'ready', callback: () => void ) => void;
			};
			data?: Data;
			editPost?: EditPost,
			editSite?: EditSite,
			editor?: Editor;
			element?: Element;
			escapeHtml?: EscapeHtml;
			domReady?: typeof DomReady;
			hooks?: Hooks;
			htmlEntities?: HtmlEntities;
			i18n?: I18N;
			keycodes?: Keycodes;
			media?: WpMedia;
			mediaUtils?: MediaUtils;
			// wp_enqueue_scripts( 'password-strength-meter' );
			passwordStrength?: {
				meter: ( value: string, blacklist: string[] ) => number;
				userInputDisallowedList: () => string[];
			}
			plugins?: Plugins;
			primitives?: Primitives;
			richText?: RichText;
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
