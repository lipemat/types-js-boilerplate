/**
 * Element is simply, an abstraction layer atop React.
 *
 * @note You probably don't need to use this.
 *
 * @deprecated Gutenberg has remove all uses of this package and documentation.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
declare module '@wordpress/element' {
	import {ComponentType} from '@lipemat/js-boilerplate/helpers';
	import {useEffect as reactUseEffect, useState as reactUseState} from 'react';
	import {render as reactRender} from 'react-dom';

	/**
	 * @deprecated in favor of using `react` directly.
	 */
	export const Fragment: ComponentType<{}>;

	/**
	 * @deprecated in favor of using `react` directly.
	 */
	export const useEffect: typeof reactUseEffect;

	/**
	 * @deprecated in favor of using `react` directly.
	 */
	export const useState: typeof reactUseState;

	/**
	 * @notice This will likely break HMR if you are using React Hot Reloader.
	 *         It is recommended to use the standard `ReactDOM.render` to allow
	 *         your `externals` configuration to differentiate between the
	 *         proper `react-dom` to use.
	 *
	 * @deprecated in favor of using `react` directly.
	 */
	export const render: typeof reactRender;

	export default interface Element {
		Fragment: typeof Fragment;
		render: typeof render;
		useEffect: typeof useEffect;
		useState: typeof useState;
	}
}
