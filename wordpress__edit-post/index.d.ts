/**
 * Edit Post Module for WordPress.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-edit-post/
 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__edit-post/index.d.ts
 */
declare module '@wordpress/edit-post' {
	import {FunctionComponent} from '@lipemat/js-boilerplate/helpers';
	import {MIME_TYPES} from '@lipemat/js-boilerplate/mime';
	import {WPBlockTypeIconRender} from '@wordpress/components';
	import {OptionalNonIntersect} from '@lipemat/js-boilerplate/utility';
	import type {RawPage, RawPost} from '@wordpress/core-data/entities';

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
	 * Renders a new item in the block settings menu.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-block-settings-menu-item/
	 */
	interface PluginBlockSettingsMenuItem {
		allowedBlocks: string[],
		icon?: WPBlockTypeIconRender,
		label: string,
		onClick: () => void,
		// The ARIA role for the menu item.
		role?: string,
		// Whether to render the label or not.
		small?: boolean,
	}

	/**
	 * Renders items below the Status & Availability panel in the Document Sidebar.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-document-setting-panel/
	 *
	 */
	interface PluginDocumentSettingPanel {
		className?: string,
		icon?: WPBlockTypeIconRender,
		name: string,
		title: string,
	}

	/**
	 * Renders a menu item in `Plugins` group in `More Menu` drop down, and can be used to as a button or link depending on the props provided.
	 * The text within the component appears as the menu item label.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-more-menu-item/
	 *
	 */
	interface PluginMoreMenuItem {
		icon?: WPBlockTypeIconRender,
		onClick?: () => void,
	}

	/**
	 * Renders provided content to the post-publish panel in the publish flow
	 * (side panel that opens after a user publishes the post).
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-post-publish-panel/
	 *
	 */
	interface PluginPostPublishPanel {
		className?: string;
		title?: string;
		initialOpen?: boolean;
		icon?: WPBlockTypeIconRender;
	}

	/**
	 * Renders a row in the Status & visibility panel of the Document sidebar.
	 * It should be noted that this is named and implemented around the function it serves
	 * and not its location, which may change in future iterations.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-post-status-info/
	 */
	interface PluginPostStatusInfo {
		className?: string;
	}

	/**
	 * Renders provided content to the pre-publish side panel in the publish flow
	 * (side panel that opens when a user first pushes "Publish" from the main editor).
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-pre-publish-panel/
	 */
	interface PluginPrePublishPanel {
		className?: string;
		title?: string;
		initialOpen?: boolean;
		icon?: WPBlockTypeIconRender;
	}

	/**
	 * Renders a sidebar when activated. The contents within the `PluginSidebar`
	 * will appear as content within the sidebar.
	 * It also automatically renders a corresponding `PluginSidebarMenuItem` component
	 * when `isPinnable` flag is set to `true`.
	 * If you wish to display the sidebar, you can with use the `PluginSidebarMoreMenuItem`
	 * component or the `wp.data.dispatch` API:
	 * ```js
	 * wp.data.dispatch( 'core/edit-post' ).openGeneralSidebar( 'plugin-name/sidebar-name' );
	 * ```
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar/
	 *
	 * @see PluginSidebarMoreMenuItem
	 *
	 */
	interface PluginSidebar {
		className?: string;
		icon?: WPBlockTypeIconRender;
		// Whether to allow to pin sidebar to the toolbar. When set to `true` it also automatically renders a corresponding menu item.
		isPinnable?: boolean;
		name: string;
		title: string;
	}

	/**
	 * Renders a menu item in `Plugins` group in `More Menu` drop down,
	 * and can be used to activate the corresponding `PluginSidebar` component.
	 * The text within the component appears as the menu item label.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar-more-menu-item/
	 */
	interface PluginSidebarMoreMenuItem {
		// A string identifying the target sidebar you wish to be activated by this menu item. Must be the same as the `name` prop you have given to that sidebar.
		target: string;
		icon?: WPBlockTypeIconRender;
	}

	/**
	 * Reinitialize the editor after the user chooses to reboot the editor after
	 * an unhandled error occurs, replacing previously mounted editor element using
	 * an initial state from prior to the crash.
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

	export const PluginBlockSettingsMenuItem: FunctionComponent<PluginBlockSettingsMenuItem>;
	export const PluginDocumentSettingPanel: FunctionComponent<PluginDocumentSettingPanel>;
	export const PluginMoreMenuItem: FunctionComponent<PluginMoreMenuItem>;
	export const PluginPostPublishPanel: FunctionComponent<PluginPostPublishPanel>;
	export const PluginPostStatusInfo: FunctionComponent<PluginPostStatusInfo>;
	export const PluginPrePublishPanel: FunctionComponent<PluginPrePublishPanel>;
	export const PluginSidebar: FunctionComponent<PluginSidebar>;
	export const PluginSidebarMoreMenuItem: FunctionComponent<PluginSidebarMoreMenuItem>;

	export default interface EditPost {
		initializeEditor: typeof initializeEditor;
		PluginBlockSettingsMenuItem: FunctionComponent<PluginBlockSettingsMenuItem>;
		PluginDocumentSettingPanel: FunctionComponent<PluginDocumentSettingPanel>;
		PluginMoreMenuItem: FunctionComponent<PluginMoreMenuItem>;
		PluginPostPublishPanel: FunctionComponent<PluginPostPublishPanel>;
		PluginPostStatusInfo: FunctionComponent<PluginPostStatusInfo>;
		PluginPrePublishPanel: FunctionComponent<PluginPrePublishPanel>;
		PluginSidebar: FunctionComponent<PluginSidebar>;
		PluginSidebarMoreMenuItem: FunctionComponent<PluginSidebarMoreMenuItem>;
		reinitializeEditor: typeof reinitializeEditor;
	}
}
