/**
 * Edit Post Module for WordPress.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-edit-post/
 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__edit-post/index.d.ts
 */
declare module '@wordpress/edit-post' {
	import type {MIME_TYPES} from '@lipemat/js-boilerplate/mime';
	import type {OptionalNonIntersect} from '@lipemat/js-boilerplate/utility';
	import type {RawPage, RawPost} from '@wordpress/core-data/entities';
	import type {PluginBlockSettingsMenuItem as PluginBlockSettingsMenuItemSlot, PluginDocumentSettingPanel as PluginDocumentSettingPanelSlot, PluginMoreMenuItem as PluginMoreMenuItemSlot, PluginPostPublishPanel as PluginPostPublishPanelSlot, PluginPostStatusInfo as PluginPostStatusInfoSlot, PluginPrePublishPanel as PluginPrePublishPanelSlot, PluginSidebar as PluginSidebarSlot, PluginSidebarMoreMenuItem as PluginSidebarMoreMenuItemSlot} from '@wordpress/editor';

	/**
	 * Convenience interface when working with Post data in the editor.
	 *
	 * The post data mirrors the REST API except it flattens
	 * a few of the `raw` keys to one level.
	 */
	export interface PostEditing extends OptionalNonIntersect<RawPage, RawPost> {
	}

	/**
	 * Settings used to initialize the editor.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-edit-post/#initializeEditor
	 *
	 * The default settings passed to the editor may also be
	 * filtered on the PHP side
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#block_editor_settings
	 *
	 */
	export interface EditorSettings {
		alignWide: boolean;
		availableTemplates: { [ template: string ]: string };
		allowedBlockTypes: boolean;
		disableCustomColors: boolean;
		disableCustomFontSizes: boolean;
		disableCustomGradients: boolean;
		disablePostFormats: boolean;
		titlePlaceholder: string;
		bodyPlaceholder: string;
		isRTL: boolean;
		autosaveInterval: number;
		maxUploadFileSize: number;
		allowedMimeTypes: { [ extension: string ]: MIME_TYPES };
		styles: Array<{
			css: string;
		}>;
		defaultEditorStyles: Array<{
			css: string;
		}>;
		imageSizes: Array<{
			slug: string;
			name: string;
		}>;
		imageDimensions: {
			[ size: string ]: {
				width: number;
				height: number;
				crop: boolean;
			}
		};
		richEditingEnabled: boolean;
		postLock: {
			isLocked: boolean;
			activePostLock: string;
		};
		postLockUtils: {
			nonce: string;
			unlockNonce: string;
			ajaxUrl: string;
		};
		enableCustomFields: boolean;
		enableCustomLineHeight: boolean;
		enableCustomUnits: boolean;
		enableCustomSpacing: boolean;
	}

	/**
	 * Initializes an instance of Editor.
	 *
	 * The return value of this function is not necessary if we change where we
	 * call initializeEditor(). This is due to metaBox timing.
	 *
	 * @param {string}  id           Unique identifier for editor instance.
	 *                               Will render to a dom element which matches this
	 *                               id via `document.getElementById`.
	 * @param {string}  postType     Post type of the post to edit.
	 * @param {number}  postId       ID of the post to edit.
	 * @param {?Object} settings     Editor settings object.
	 * @param {?Object}  initialEdits Programmatic edits to apply initially, to be
	 *                               considered as non-user-initiated (bypass for
	 *                               unsaved changes prompt).
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-edit-post/#initializeEditor
	 */
	export function initializeEditor( id: string, postType: string, postId: number, settings: Partial<EditorSettings>, initialEdits?: object ): void;


	/**
	 * Reinitialize the editor after the user chooses to reboot the editor after
	 * an unhandled error occurs, replacing previously mounted editor element using
	 * an initial state from before the crash.
	 *
	 * @notice If a crash did not occur, using this method will clear out
	 *         the content and replace it with nothing.
	 *         Only can reinitialize with current postId, otherwise the meta boxes
	 *         will not match.
	 *
	 *
	 * @param {string}  postType     Post type of the post to edit.
	 * @param {number}  postId       ID of the post to edit.
	 * @param {Element} target       DOM node in which editor is rendered.
	 * @param {?Object} settings     Editor settings object.
	 * @param {Object}  initialEdits Programmatic edits to apply initially, to be
	 *                               considered as non-user-initiated (bypass for
	 *                               unsaved changes prompt).
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-edit-post/#reinitializeEditor
	 */
	export function reinitializeEditor( postType: string, postId: number, target: Element, settings: Partial<EditorSettings>, initialEdits?: object ): void;


	/**
	 * Falling back for these slots for cross version.
	 *
	 * @link https://make.wordpress.org/core/2024/06/18/editor-unified-extensibility-apis-in-6-6/
	 */

	/**
	 * @deprecated WP 6.6 Use `PluginBlockSettingsMenuItem` from `@wordpress/editor` instead.
	 */
	export const PluginBlockSettingsMenuItem: PluginBlockSettingsMenuItemSlot;
	/**
	 * @deprecated WP 6.6 Use `PluginDocumentSettingPanel` from `@wordpress/editor` instead.
	 */
	export const PluginDocumentSettingPanel: PluginDocumentSettingPanelSlot;
	/**
	 * @deprecated WP 6.6 Use `PluginMoreMenuItem` from `@wordpress/editor` instead.
	 */
	export const PluginMoreMenuItem: PluginMoreMenuItemSlot;
	/**
	 * @deprecated WP 6.6 Use `PluginPostPublishPanel` from `@wordpress/editor` instead.
	 */
	export const PluginPostPublishPanel: PluginPostPublishPanelSlot;
	/**
	 * @deprecated WP 6.6 Use `PluginPostStatusInfo` from `@wordpress/editor` instead.
	 */
	export const PluginPostStatusInfo: PluginPostStatusInfoSlot;
	/**
	 * @deprecated WP 6.6 Use `PluginPrePublishPanel` from `@wordpress/editor` instead.
	 */
	export const PluginPrePublishPanel: PluginPrePublishPanelSlot;
	/**
	 * @deprecated WP 6.6 Use `PluginSidebar` from `@wordpress/editor` instead.
	 */
	export const PluginSidebar: PluginSidebarSlot;
	/**
	 * @deprecated WP 6.6 Use `PluginSidebarMoreMenuItem` from `@wordpress/editor` instead.
	 */
	export const PluginSidebarMoreMenuItem: PluginSidebarMoreMenuItemSlot;

	export default interface EditPost {
		initializeEditor: typeof initializeEditor;
		PluginBlockSettingsMenuItem: typeof PluginBlockSettingsMenuItem;
		PluginDocumentSettingPanel: typeof PluginDocumentSettingPanel;
		PluginMoreMenuItem: typeof PluginMoreMenuItem;
		PluginPostPublishPanel: typeof PluginPostPublishPanel;
		PluginPostStatusInfo: typeof PluginPostStatusInfo;
		PluginPrePublishPanel: typeof PluginPrePublishPanel;
		PluginSidebar: typeof PluginSidebar;
		PluginSidebarMoreMenuItem: typeof PluginSidebarMoreMenuItem;
		reinitializeEditor: typeof reinitializeEditor;
	}
}
