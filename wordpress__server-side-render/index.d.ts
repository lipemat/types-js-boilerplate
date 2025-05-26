/**
 * ServerSideRender component
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/
 */
declare module '@wordpress/server-side-render' {
	import type {ComponentType} from '@lipemat/js-boilerplate/helpers';
	import type {PropsWithChildren, ReactElement} from 'react';

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/#props
	 */
	interface ServerSideRenderProps<A, U> {
		block: string;
		attributes?: A;
		className?: string;
		httpMethod?: 'GET' | 'POST';
		urlQueryArgs?: U;
		EmptyResponsePlaceholder?: ComponentType<ServerSideRenderProps<A, U>>;
		ErrorResponsePlaceholder?: ComponentType<ServerSideRenderProps<A, U> & {
			response: object;
		}>;
		LoadingResponsePlaceholder?: ComponentType<ServerSideRenderProps<A, U>> & {
			isLoading: boolean;
		};
		skipBlockSupportAttributes?: boolean;
	}

	export default function ServerSideRender<A, U = object>( props: PropsWithChildren<ServerSideRenderProps<A, U>>, context?: any ): ReactElement;
}
