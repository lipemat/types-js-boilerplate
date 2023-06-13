/**
 * Element is simply, an abstraction layer atop React.
 *
 * @note You probably don't need to use this.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
declare module '@wordpress/element' {
	import {ComponentType} from '@lipemat/js-boilerplate/helpers';
	import {useEffect as reactUseEffect, useState as reactUseState} from 'react';
	import {render as reactRender} from 'react-dom';

	export const Fragment: ComponentType<{}>;

	export const useEffect: typeof reactUseEffect;

	export const useState: typeof reactUseState;

	/**
	 * @notice This will likely break HMR if you are using React Hot Reloader.
	 *         It is recommended to use the standard `ReactDOM.render` to allow
	 *         your `externals` configuration to differentiate between the
	 *         proper `react-dom` to use.
	 *
	 * @deprecated
	 */
	export const render: typeof reactRender;

	export default interface Element {
		Fragment: typeof Fragment;
		render: typeof render;
		useEffect: typeof useEffect;
		useState: typeof useState;
	}
}
