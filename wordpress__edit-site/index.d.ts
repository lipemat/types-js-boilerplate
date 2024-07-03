/**
 * Edit Site Module for WordPress.
 *
 * Interacting with the FSE Site Editor area of the admin.
 * Commonly used to insert custom items into the Site Editor specific screen.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-edit-site/
 */
declare module '@wordpress/edit-site' {
	import type {ReactNode} from 'react';
	import type {MIME_TYPES} from '@lipemat/js-boilerplate/mime';
	import {Fill} from '@wordpress/components';
	import type {PluginMoreMenuItem as PluginMoreMenuItemSlot, PluginSidebar as PluginSidebarSlot, PluginSidebarMoreMenuItem as PluginSidebarMoreMenuItemSlot} from '@wordpress/editor';

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
	 * Slot for rendering in the Site Editor "Template" sidebar.
	 */
	type PluginTemplateSettingPanel = typeof Fill & {}

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

	export const PluginTemplateSettingPanel: PluginTemplateSettingPanel;

	/**
	 * @deprecated WP 6.6 Use `PluginMoreMenuItem` from `@wordpress/editor` instead.
	 */
	export const PluginMoreMenuItem: PluginMoreMenuItemSlot;
	/**
	 * @deprecated WP 6.6 Use `PluginSidebar` from `@wordpress/editor` instead.
	 */
	export const PluginSidebar: PluginSidebarSlot;
	/**
	 * @deprecated WP 6.6 Use `PluginSidebarMoreMenuItem` from `@wordpress/editor` instead.
	 */
	export const PluginSidebarMoreMenuItem: PluginSidebarMoreMenuItemSlot;

	export default interface editSite {
		initializeEditor: typeof initializeEditor;
		PluginMoreMenuItem: typeof PluginMoreMenuItem;
		PluginTemplateSettingPanel: PluginTemplateSettingPanel;
		PluginSidebar: typeof PluginSidebar;
		PluginSidebarMoreMenuItem: typeof PluginSidebarMoreMenuItem;
		reinitializeEditor: typeof reinitializeEditor;
	}
}
