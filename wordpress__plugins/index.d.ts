/**
 * Definitions for the `@wordpress/plugins` package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/
 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/plugins/src/api/index.ts
 */
declare module '@wordpress/plugins' {
	import {ComponentClass, ComponentType, FunctionComponent} from '@lipemat/js-boilerplate/helpers';
	import {ReactNode} from 'react';
	import {WPBlockTypeIconRender} from '@wordpress/components';

	/**
	 * @notice If `icon` is not set to `null` during `registerPlugin`,
	 *         using `null` for individual slot fills won't work
	 *         because `icon` will be inherited from `registerPlugin`.
	 *
	 * @notice If a scope is specified, the plugin will only be rendered
	 *         in a matching PluginArea. Currently, WP core does not provide
	 *         and scoped areas, so only use `scope` if adding a custom one.
	 */
	export type WPPlugin = {
		name: string;
		icon: WPBlockTypeIconRender,
		render: ComponentType<any>,
		scope: string;
	}

	export interface withPluginContextType {
		name: string,
		icon: WPBlockTypeIconRender;
	}

	export interface PluginSettings extends Partial <Omit<WPPlugin, 'name'>> {
	}

	/**
	 * Returns a registered plugin settings.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/#getplugin
	 *
	 * @param {string} name Plugin name.
	 *
	 * @return {?WPPlugin} Plugin setting.
	 */
	export function getPlugin( name: string ): WPPlugin | undefined;

	/**
	 * Returns all registered plugins without a scope or for a given scope.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/#getplugins
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
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/#pluginarea
	 */
	interface PluginArea {
		scope: string;
	}


	/**
	 * Registers a plugin to the editor.
	 *
	 @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/#registerplugin
	 *
	 * @param {string}   name     A string identifying the plugin.Must be
	 *                            unique across all registered plugins.
	 *                            May only contain lowercase letters
	 *                            and dashes.
	 * @param {WPPlugin} settings The settings for this plugin.
	 *
	 *
	 * @return {WPPlugin} The final plugin settings object.
	 */
	export function registerPlugin( name: string, settings: PluginSettings ): WPPlugin;

	/**
	 * Unregisters a plugin by name.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/#unregisterplugin
	 *
	 * @param {string} name Plugin name.
	 *
	 * @return {?WPPlugin} The previous plugin settings object, if it has been
	 *                     successfully unregistered; otherwise `undefined`.
	 */
	export function unregisterPlugin( name: string ): WPPlugin | undefined;

	/**
	 * A Higher Order Component used to inject Plugin context to the
	 * wrapped component.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/#withplugincontext
	 *
	 * @param {Function} mapContextToProps Function called on every context change,
	 *                                     expected to return object of props to
	 *                                     merge with the component's own props.
	 */
	export function withPluginContext<P extends C, C = withPluginContextType>(
		mapContextToProps: ( context: C ) => Partial<P>,
	): ( component: ReactNode ) => FunctionComponent<P>;


	export const PluginArea: ComponentClass<PluginArea>;

	export default interface Plugins {
		getPlugin: typeof getPlugin;
		getPlugins: typeof getPlugins;
		PluginArea: typeof PluginArea;
		registerPlugin: typeof registerPlugin;
		unregisterPlugin: typeof unregisterPlugin;
		widthPluginContext: typeof withPluginContext;
	}
}
