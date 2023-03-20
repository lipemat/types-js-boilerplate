/**
 * Definitions for the `@wordpress/compose` package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-compose/
 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__compose/index.d.ts
 */
declare module '@wordpress/compose' {
	import {ComponentType} from '@lipemat/js-boilerplate/helpers';
	import {Ref} from 'react';

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
	type createHigherOrderComponent = <T extends ComponentType<any>,
		R extends ComponentType<any>>( mapCallback: ( WrappedComponent: T) => R, modifierName: string ) => ( Inner: T ) => R & createHigherOrderComponentProps;

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
