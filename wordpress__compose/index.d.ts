/**
 * Definitions for the `@wordpress/compose` package.
 *
 * @link https://www.npmjs.com/package/@wordpress/compose
 */
declare module '@wordpress/compose' {
	import {ComponentType, MutableRefObject} from 'react';

	// @note displayName is assigned directly to component, not a prop.
	export interface createHigherOrderComponentProps {
		displayName?: string;
	}

	type createHigherOrderComponent = <P>( WrappedComponent: ComponentType<P> ) => ComponentType<P> & createHigherOrderComponentProps;

	/**
	 * Copy text to clipboard.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-compose/#usecopytoclipboard
	 */
	type useCopyToClipboard = ( text: string | ( () => string ), onSuccess: () => void ) => MutableRefObject<string>;


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
