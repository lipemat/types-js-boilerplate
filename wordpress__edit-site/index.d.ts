/**
 * Edit Site Module for WordPress.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-edit-site/
 */
declare module '@wordpress/edit-site' {
	import {FunctionComponent, ReactNode} from 'react';
	import {MIME_TYPES} from '@lipemat/js-boilerplate/mime';
	import {WPBlockTypeIconRender} from '@wordpress/components';

	/**
	 * Settings used to initialize the editor.
	 *
	 * Settings are passed to `updateSettings` of the 'core/edit-site' store.
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-edit-site/#updatesettings
	 *
	 * The default settings passed to the editor may also be
	 * filtered on the PHP side
	 * @link https://developer.wordpress.org/block-editor/reference-guides/filters/editor-filters/#block_editor_settings
	 *
	 */
	export interface EditorSettings {
		alignWide: boolean;
		allowedBlockTypes: boolean;
		allowedMimeTypes: { [ extension: string ]: MIME_TYPES };
		autosaveInterval: number;
		availableTemplates: { [ template: string ]: string };
		bodyPlaceholder: string;
		defaultEditorStyles: Array<{
			css: string;
		}>;
		defaultTemplatePartAreas: Array<{
			area: string;
			area_tag: string;
			description: string;
			icon: string;
			label: string;
		}>;
		defaultTemplateTypes: Array<{
			description: string;
			slug: string;
			title: string;
		}>;
		disableCustomColors: boolean;
		disableCustomFontSizes: boolean;
		disableCustomGradients: boolean;
		disablePostFormats: boolean;
		enableCustomFields: boolean;
		enableCustomLineHeight: boolean;
		enableCustomSpacing: boolean;
		enableCustomUnits: boolean;
		focusMode: boolean;
		fontSizes: any[]; //@todo
		gradients: any[]; //@todo
		hasFixedToolbar: boolean;
		imageDefaultSize: string;
		imageDimensions: {
			[ size: string ]: {
				width: number;
				height: number;
				crop: boolean;
			}
		};
		imageEditing: boolean;
		imageSizes: Array<{
			slug: string;
			name: string;
		}>;
		isRTL: boolean;
		keepCaretInsideBlock: boolean;
		localAutosaveInterval: number;
		maxUploadFileSize: number;
		outlineMode: boolean;
		postLock: {
			isLocked: boolean;
			activePostLock: string;
		};
		postLockUtils: {
			nonce: string;
			unlockNonce: string;
			ajaxUrl: string;
		};
		postsPerPage: string; //number
		richEditingEnabled: boolean;
		showIconLabels: boolean;
		siteUrl: string;
		spacingSizes: any[]; //@todo
		styles: Array<{
			css: string;
		}>;
		supportsLayout: boolean;
		supportsTemplatePartsMode: boolean;
		svgFilters: ReactNode[];
		titlePlaceholder: string;
	}

	/**
	 * Initializes an instance of Editor.
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-site/src/index.js
	 */
	export function initializeEditor( id: string, settings: Partial<EditorSettings> ): void;

	/**
	 * SlotFill for rendering a menu item in `Plugins` group in `More Menu` drop down.
	 * Can be used to as a button or link depending on the props provided.
	 *
	 * Similar to the `PluginMoreMenuItem` slot fill available in the Post Editor.
	 * @notice Not coming from same package as example.
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-more-menu-item/
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-site/src/components/header-edit-mode/plugin-more-menu-item/index.js
	 *
	 */
	interface PluginMoreMenuItem {
		icon?: WPBlockTypeIconRender,
		onClick?: () => void,
	}

	/**
	 * SlotFill for rendering an item in the Sidebar of the Site Editor.
	 *
	 * Similar to the `PluginSidebar` slot fill available in the Post Editor.
	 * @notice Not coming from same package as example.
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar/
	 *
	 * @see PluginSidebarMoreMenuItem
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-site/src/components/sidebar-edit-mode/plugin-sidebar/index.js
	 */
	interface PluginSidebar {
		className?: string;
		icon?: WPBlockTypeIconRender;
		isPinnable?: boolean;
		name: string;
		title: string;
	}

	/**
	 * SlotFill for a menu item in `Plugins` group in `More Menu` drop down,
	 * and can be used to activate the corresponding `PluginSidebar` component.
	 * The text within the component appears as the menu item label.
	 *
	 * Similar to the `PluginSidebarMoreMenuItem` slot fill available in the Post Editor.
	 * @notice Not coming from same package as example.
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar-more-menu-item/
	 *
	 * @see PluginSidebar
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-site/src/components/header-edit-mode/plugin-sidebar-more-menu-item/index.js
	 */
	interface PluginSidebarMoreMenuItem {
		// A string identifying the target sidebar you wish to be activated by this menu item. Must be the same as the `name` prop you have given to that sidebar.
		target: string;
		icon?: WPBlockTypeIconRender;
	}

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
	 * @param {Element} target   DOM node in which editor is rendered.
	 * @param {?Object} settings Editor settings object.
	 *                           considered as non-user-initiated (bypass for
	 *                           unsaved changes prompt).
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-site/src/index.js
	 */
	export function reinitializeEditor( target: Element, settings: Partial<EditorSettings> ): void;

	export const PluginMoreMenuItem: FunctionComponent<PluginMoreMenuItem>;
	export const PluginSidebar: FunctionComponent<PluginSidebar>;
	export const PluginSidebarMoreMenuItem: FunctionComponent<PluginSidebarMoreMenuItem>;

	export default interface editSite {
		initializeEditor: typeof initializeEditor;
		PluginMoreMenuItem: FunctionComponent<PluginMoreMenuItem>;
		PluginSidebar: FunctionComponent<PluginSidebar>;
		PluginSidebarMoreMenuItem: FunctionComponent<PluginSidebarMoreMenuItem>;
		reinitializeEditor: typeof reinitializeEditor;
	}
}
