/**
 * Element is simply, an abstraction layer atop React.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
declare module '@wordpress/element' {
	import {ComponentType} from '@lipemat/js-boilerplate/helpers';
	import {useEffect as reactUseEffect, useState as reactUseState} from 'react';
	import {render as reactRender} from 'react-dom';

	export const Fragment: ComponentType<{}>;
	export const render: typeof reactRender;
	export const useEffect: typeof reactUseEffect;
	export const useState: typeof reactUseState;

	export default interface Element {
		Fragment: typeof Fragment;
		render: typeof render;
		useEffect: typeof useEffect;
		useState: typeof useState;
	}
}
