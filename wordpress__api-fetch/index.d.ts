declare module '@wordpress/api-fetch' {
	import {method} from '@wordpress/api';

	export type Middleware<D> = ( options: FetchOptions<D>, next: Middleware<D> ) => D;

	export interface NonceMiddleware {
		( options, next ): Middleware<{ headers: object }>;
		nonce: string;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/packages/packages-api-fetch/
	 */
	export interface FetchOptions<D> extends RequestInit {
		data?: D; // Data passed as JSON body.
		method?: method; // Defaults to false.
		parse?: boolean; // Return items, or entire request.
		path: string; // Path relative to provided root.
		url?: string; // Absolute url of request.
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
