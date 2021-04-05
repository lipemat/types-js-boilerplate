/**
 * Definitions for the `@wordpress/plugins` package.
 *
 * @link https://www.npmjs.com/package/@wordpress/plugins
 */
declare module '@wordpress/plugins' {
	import {ComponentClass, FunctionComponent, ReactNode} from 'react';

	export type WPPlugin = {
		name: string;
		icon: ReactNode,
		render: ReactNode,
		scope: string;
	}

	/**
	 * Returns a registered plugin settings.
	 *
	 * @param {string} name Plugin name.
	 *
	 * @return {?WPPlugin} Plugin setting.
	 */
	export function getPlugin( name: string ): WPPlugin | undefined;

	/**
	 * Returns all registered plugins without a scope or for a given scope.
	 *
	 * @param {string} [scope] The scope to be used when rendering inside
	 *                         a plugin area. No scope by default.
	 *
	 * @return {WPPlugin[]} The list of plugins without a scope or for a given scope.
	 */
	export function getPlugins( scope: string ): WPPlugin[];

	/**
	 * A component that renders all plugin fills in a hidden div.
	 *
	 * @example
	 * ```js
	 * import { PluginArea } from '@wordpress/plugins';
	 *
	 * const Layout = () => (
	 * 	<div>
	 * 		Content of the page
	 * 		<PluginArea scope="my-page" />
	 * 	</div>
	 * );
	 * ```
	 */
	interface PluginArea {
		scope: string;
	}

	/**
	 * Registers a plugin to the editor.
	 *
	 * @param {string}   name     A string identifying the plugin.Must be
	 *                            unique across all registered plugins.
	 * @param {WPPlugin} settings The settings for this plugin.
	 *
	 * @example
	 * ```js
	 * import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
	 * import { registerPlugin } from '@wordpress/plugins';
	 * import { more } from '@wordpress/icons';
	 *
	 * const Component = () => (
	 * 	<>
	 * 		<PluginSidebarMoreMenuItem
	 * 			target="sidebar-name"
	 * 		>
	 * 			My Sidebar
	 * 		</PluginSidebarMoreMenuItem>
	 * 		<PluginSidebar
	 * 			name="sidebar-name"
	 * 			title="My Sidebar"
	 * 		>
	 * 			Content of the sidebar
	 * 		</PluginSidebar>
	 * 	</>
	 * );
	 *
	 * registerPlugin( 'plugin-name', {
	 * 	icon: more,
	 * 	render: Component,
	 * 	scope: 'my-page',
	 * } );
	 * ```
	 *
	 * @return {WPPlugin} The final plugin settings object.
	 */
	export function registerPlugin( name: string, settings: Omit<WPPlugin, 'name'> ): WPPlugin;

	/**
	 * Unregisters a plugin by name.
	 *
	 * @param {string} name Plugin name.
	 *
	 * @example
	 * ```js
	 * import { unregisterPlugin } from '@wordpress/plugins';
	 *
	 * unregisterPlugin( 'plugin-name' );
	 * ```
	 *
	 * @return {?WPPlugin} The previous plugin settings object, if it has been
	 *                     successfully unregistered; otherwise `undefined`.
	 */
	export function unregisterPlugin( name: string ): WPPlugin | undefined;

	export interface withPluginContext {
		name: string,
		icon: ReactNode,
	}

	/**
	 * A Higher Order Component used to inject Plugin context to the
	 * wrapped component.
	 *
	 * @param {Function} mapContextToProps Function called on every context change,
	 *                                     expected to return object of props to
	 *                                     merge with the component's own props.
	 */
	export function withPluginContext<P extends C, C = withPluginContext>(
		mapContextToProps: ( context: C ) => Partial<P>,
	): ( component: ReactNode ) => FunctionComponent<P>;


	export const PluginArea: ComponentClass<PluginArea>;

	export default interface Plugins {
		getPlugin: typeof getPlugin;
		getPlugins: typeof getPlugins;
		PluginArea: ComponentClass<PluginArea>;
		registerPlugin: typeof registerPlugin;
		unregisterPlugin: typeof unregisterPlugin;
		widthPluginContext: typeof withPluginContext;
	}
}
