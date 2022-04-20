/**
 * Definitions for the `@wordpress/compose` package.
 *
 * @link https://www.npmjs.com/package/@wordpress/compose
 */
declare module '@wordpress/compose' {
	import {ComponentType, Ref} from 'react';

	// @note displayName is assigned directly to component, not a prop.
	export interface createHigherOrderComponentProps {
		displayName?: string;
	}

	/**
	 * Given a function mapping a component to an enhanced component and modifier
	 * name, returns the enhanced component augmented with a generated displayName.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-compose/#createhigherordercomponent
	 */
	type createHigherOrderComponent = <P>( WrappedComponent: ComponentType<P>, modifierName: string ) => ComponentType<P> & createHigherOrderComponentProps;

	/**
	 * Copy text to clipboard.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-compose/#usecopytoclipboard
	 */
	type useCopyToClipboard = <T = HTMLButtonElement>( text: string | (() => string), onSuccess: () => void ) => Ref<T>;


	export interface withInstanceIdProps {
		instanceId?: string;
	}

	type withInstanceId = <P>( WrappedComponent: ComponentType<P> ) => ComponentType<P & withInstanceIdProps> & createHigherOrderComponentProps;


	export const createHigherOrderComponent: createHigherOrderComponent;
	export const useCopyToClipboard: useCopyToClipboard;
	export const withInstanceId: withInstanceId;

	export default interface Compose {
		createHigherOrderComponent: createHigherOrderComponent;
		useCopyToClipboard: useCopyToClipboard;
		withInstanceId: withInstanceId;
	}
}
