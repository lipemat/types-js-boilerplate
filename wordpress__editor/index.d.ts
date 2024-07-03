/**
 * Definitions for the `@wordpress/editor` package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-editor/
 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__editor/index.d.ts
 */
declare module '@wordpress/editor' {
	import type {ComponentType, FunctionComponent} from '@lipemat/js-boilerplate/helpers';
	import type {Settings} from 'tinymce';
	import type {WPBlockTypeIconRender} from '@wordpress/components';
	import type {FC, ReactNode} from 'react';

	type FillOrFunction<P> = {
		children?: ReactNode | ( ( fillProps: P ) => ReactNode )
	}

	/**
	 * Initialize the classic tinymce editor.
	 *
	 * @see wp_enqueue_editor
	 * @link https://github.com/WordPress/WordPress/blob/master/wp-admin/js/editor.js#L1216
	 * @link https://www.tiny.cloud/docs-4x/
	 *
	 * Alternative integrations via React or Svelte components
	 * are available
	 * @link https://www.tiny.cloud/docs/integrations/
	 */
	type initialize = ( id: string, settings: {
		quicktags?: boolean;
		mediaButtons?: boolean;
		tinymce: Settings;
	} | false ) => void;

	/**
	 * @link https://github.com/WordPress/gutenberg/tree/trunk/packages/editor/src/components/post-taxonomies
	 */
	interface FlatTermSelector {
		slug: string;
	}

	/**
	 * @link https://github.com/WordPress/gutenberg/tree/trunk/packages/editor/src/components/post-taxonomies
	 */
	interface HierarchicalTermSelector {
		slug: string;
	}

	/**
	 * Renders a new item in the block settings menu.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-block-settings-menu-item/
	 */
	export type PluginBlockSettingsMenuItem = FC<{
		allowedBlocks: string[],
		icon?: WPBlockTypeIconRender,
		label: string,
		onClick: () => void,
		// The ARIA role for the menu item.
		role?: string,
		// Whether to render the label or not.
		small?: boolean,
	}>;

	/**
	 * Renders items below the Status & Availability panel in the Document Sidebar.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-document-setting-panel/
	 *
	 */
	export type PluginDocumentSettingPanel = FC<FillOrFunction<{ opened: boolean }> & {
		className?: string,
		icon?: WPBlockTypeIconRender,
		name: string,
		title: string,
	}>

	/**
	 * Renders a menu item in `Plugins` group in `More Menu` drop down, and can be used to as a button or link depending on the props provided.
	 * The text within the component appears as the menu item label.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-more-menu-item/
	 *
	 */
	export type PluginMoreMenuItem = FunctionComponent<{
		icon?: WPBlockTypeIconRender,
		onClick?: () => void,
	}>;

	/**
	 * Renders provided content to the post-publish panel in the publish flow
	 * (side panel that opens after a user publishes the post).
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-post-publish-panel/
	 *
	 */
	export type PluginPostPublishPanel = FunctionComponent<{
		className?: string;
		title?: string;
		initialOpen?: boolean;
		icon?: WPBlockTypeIconRender;
	}>

	/**
	 * Renders a row in the Status & visibility panel of the Document sidebar.
	 * Note that this is named and implemented around the function it serves
	 * and not its location, which may change in future iterations.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-post-status-info/
	 */
	export type PluginPostStatusInfo = FunctionComponent<{
		className?: string;
	}>;

	/**
	 * Renders provided content to the pre-publish side panel in the publishing flow
	 * (side panel that opens when a user first pushes "Publish" from the main editor).
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-pre-publish-panel/
	 */
	export type PluginPrePublishPanel = FC<FillOrFunction<{ opened: boolean }> & {
		className?: string;
		title?: string;
		initialOpen?: boolean;
		icon?: WPBlockTypeIconRender;
	}>;

	/**
	 * Renders a sidebar when activated. The contents within the `PluginSidebar`
	 * will appear as content within the sidebar.
	 * It also automatically renders a corresponding `PluginSidebarMenuItem` component
	 * when `isPinnable` flag is set to `true`.
	 * If you wish to display the sidebar, you can with use the `PluginSidebarMoreMenuItem`
	 * component, or the `wp.data.dispatch` API:
	 * ```js
	 * wp.data.dispatch('core/edit-post').openGeneralSidebar('plugin-name/sidebar-name');
	 * ```
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar/
	 *
	 * @see PluginSidebarMoreMenuItem
	 *
	 */
	export type PluginSidebar = FunctionComponent<{
		className?: string;
		icon?: WPBlockTypeIconRender;
		// Whether to allow to pin sidebar to the toolbar. When set to `true` it also automatically renders a corresponding menu item.
		isPinnable?: boolean;
		name: string;
		title: string;
	}>;

	/**
	 * Renders a menu item in `Plugins` group in `More Menu` drop down,
	 * and can be used to activate the corresponding `PluginSidebar` component.
	 * The text within the component appears as the menu item label.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar-more-menu-item/
	 *
	 * @see PluginSidebar
	 */
	export type PluginSidebarMoreMenuItem = FunctionComponent<{
		// A string identifying the target sidebar you wish to be activated by this menu item. Must be the same as the `name` prop you have given to that sidebar.
		target: string;
		icon?: WPBlockTypeIconRender;
	}>;


	export const PostTaxonomiesFlatTermSelector: ComponentType<FlatTermSelector>;
	export const PostTaxonomiesHierarchicalTermSelector: ComponentType<HierarchicalTermSelector>;
	export const initialize: initialize;

	export const PluginBlockSettingsMenuItem: PluginBlockSettingsMenuItem;
	export const PluginDocumentSettingPanel: PluginDocumentSettingPanel;
	export const PluginMoreMenuItem: FunctionComponent<PluginMoreMenuItem>;
	export const PluginPostPublishPanel: PluginPostPublishPanel;
	export const PluginPostStatusInfo: PluginPostStatusInfo;
	export const PluginPrePublishPanel: PluginPrePublishPanel;
	export const PluginSidebar: PluginSidebar;
	export const PluginSidebarMoreMenuItem: PluginSidebarMoreMenuItem;

	export default interface Editor {
		initialize: initialize;
		PluginBlockSettingsMenuItem: typeof PluginBlockSettingsMenuItem;
		PluginDocumentSettingPanel: typeof PluginDocumentSettingPanel;
		PluginMoreMenuItem: typeof PluginMoreMenuItem;
		PluginPostPublishPanel: typeof PluginPostPublishPanel;
		PluginPostStatusInfo: typeof PluginPostStatusInfo;
		PluginPrePublishPanel: typeof PluginPrePublishPanel;
		PluginSidebar: typeof PluginSidebar;
		PluginSidebarMoreMenuItem: typeof PluginSidebarMoreMenuItem;
		PostTaxonomiesFlatTermSelector: ComponentType<FlatTermSelector>;
		PostTaxonomiesHierarchicalTermSelector: ComponentType<HierarchicalTermSelector>;
	}
}
