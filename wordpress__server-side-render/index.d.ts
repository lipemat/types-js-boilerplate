import {ComponentType, ReactChild} from 'react';

/**
 * ServerSideRender component
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/
 */
declare module '@wordpress/server-side-render' {
	interface ServerSideRender<A = object, U = object> {
		block: string;
		attributes?: A;
		className?: string;
		httpMethod?: 'GET' | 'POST';
		urlQueryArgs?: U;
		EmptyResponsePlaceholder?: ComponentType<ServerSideRender<A, U>>;
		ErrorResponsePlaceholder?: ComponentType<ServerSideRender<A, U> & {
			response: object;
		}>;
		LoadingResponsePlaceholder?: ComponentType<ServerSideRender<A, U> & {
			showLoader: boolean;
			children: ReactChild | [];
		}>;
	}

	const ServerSideRender: ComponentType<ServerSideRender>;
	export default ServerSideRender;
}
