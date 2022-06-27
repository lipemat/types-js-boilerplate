/**
 * Element is simply, an abstraction layer atop React.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
declare module '@wordpress/element' {
	import {ComponentType} from 'react';

	export const Fragment: ComponentType<{}>;

	export default interface Element {
		Fragment: ComponentType<{}>;
	}
}
