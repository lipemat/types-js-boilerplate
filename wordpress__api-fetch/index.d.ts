declare module '@wordpress/api-fetch' {
	import {Method} from '@wordpress/api';

	export type Middleware<D> = ( options: FetchOptions<D>, next: Middleware<D> ) => D;

	export interface NonceMiddleware {
		( options, next ): Middleware<{ headers: object }>;
		nonce: string;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/packages/packages-api-fetch/
	 */
	export type FetchOptions<D> = {
		data: D; // Data passed as JSON body.
		method: Exclude<Method, 'GET' | 'OPTIONS'>;
		parse?: boolean; // Return items instead of entire request (default true).
		path: string; // Path relative to provided root.
		url?: never; // URL is not allowed with path.
	} | {
		method?: 'GET' | 'OPTIONS' | undefined;
		data?: never;
		parse?: boolean; // Return items instead of entire request (default true).
		path: string; // Path relative to provided root.
		url?: never;  // URL is not allowed with path.
	} | {
		method?: 'GET' | 'OPTIONS' | undefined;
		data?: never;
		parse?: boolean; // Return items instead of entire request (default true).
		path?: never; // Path is not allowed with url.
		url: string; // Absolute url of request.
	} | {
		data: D; // Data passed as JSON body.
		method: Exclude<Method, 'GET' | 'OPTIONS'>;
		parse?: boolean; // Return items instead of entire request (default true).
		path?: never; // Path is not allowed with url.
		url: string; // Absolute url of request.
	}

	interface ApiFetch {
		<T, D = {}>( options: FetchOptions<D> ): Promise<T>;
		createNonceMiddleware: <D>( nonce: string ) => NonceMiddleware;
		createRootURLMiddleware: <D>( URL: string ) => Middleware<D>;
		nonceEndpoint?: string;
		nonceMiddleware?: NonceMiddleware;
		setFetchHandler: <T, D= {}>( handler: ( options: D ) => Promise<T> ) => void;
		use: <D>( middleware: Middleware<D> ) => void;
	}


	const apiFetch: ApiFetch;

	export default apiFetch;
}
