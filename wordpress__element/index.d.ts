/**
 * Element is simply, an abstraction layer atop React.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
declare module '@wordpress/element' {
	import {ComponentType, useEffect as reactUseEffect, useState as reactUseState} from 'react';

	export const Fragment: ComponentType<{}>;
	export const useEffect: typeof reactUseEffect;
	export const useState: typeof reactUseState;

	export default interface Element {
		Fragment: typeof Fragment;
		useEffect: typeof useEffect;
		useState: typeof useState;
	}
}
