/**
 * @todo Complete and wrap in namespace.
 *
 * @link https://github.com/WordPress/gutenberg/tree/master/packages/hooks
 *
 */
declare module '@wordpress/hooks' {
	type addFilter = ( filter: string, namespace: string, cb: Function, priority?: number ) => void;

	export const addFilter: addFilter;
	export default interface Hooks {
		addFilter: addFilter;
	}
}
