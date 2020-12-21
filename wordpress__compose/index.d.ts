declare module '@wordpress/compose' {
	import {ComponentType} from 'react';

	// @note displayName is assigned directly to component, not a prop.
	export interface createHigherOrderComponentProps {
		displayName?: string;
	}
	type createHigherOrderComponent = <P>( WrappedComponent: ComponentType<P> ) => ComponentType<P> & createHigherOrderComponentProps;

	export interface withInstanceIdProps {
		instanceId?: string;
	}
	type withInstanceId = <P>( WrappedComponent: ComponentType<P> ) => ComponentType<P & withInstanceIdProps> & createHigherOrderComponentProps;

	export const createHigherOrderComponent: createHigherOrderComponent;
	export const withInstanceId: withInstanceId;

	export default interface Compose {
		createHigherOrderComponent: createHigherOrderComponent;
		withInstanceId: withInstanceId;
	}
}
