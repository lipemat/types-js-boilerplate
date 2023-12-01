/**
 * Definitions for the `@wordpress/components` package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/
 */
declare module '@wordpress/commands' {
	import Element = React.JSX.Element;
	import React, {FunctionComponent} from 'react';

	export type WPCommandLoaderHook = ( search: string ) => WPCommandConfig[];

	export type WPCommandConfig = {
		name: string;
		label: string;
		searchLabel?: string;
		// @todo icon became optional staring in WP 6.4.
		icon: Element;
		callback: ( ...args: any[] ) => void;
	}

	export type WPCommandLoaderConfig = {
		name: string;
		context?: string;
		hook: WPCommandLoaderHook;
	}


	/**
	 * Attach a command to the command palette.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/#usecommand
	 */
	export function useCommand( command: WPCommandConfig ): void;

	/**
	 * Attach a command loader to the command palette.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/#usecommandloader
	 */
	export function useCommandLoader( config: WPCommandLoaderConfig ): void;

	/**
	 * Render the command palette.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/#commandmenu
	 */
	export const CommandMenu: FunctionComponent<{}>;

	export default interface Commands {
		CommandMenu: typeof CommandMenu;
		useCommand: typeof useCommand;
		useCommandLoader: typeof useCommandLoader;
	}
}
