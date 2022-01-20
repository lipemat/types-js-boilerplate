/**
 * @todo Complete and wrap in namespace.
 *
 * @link https://github.com/WordPress/gutenberg/tree/master/packages/hooks
 *
 */
declare module '@wordpress/hooks' {
	type AddFilter = ( filter: string, namespace: string, cb: Function, priority?: number ) => void;

	export const addFilter: AddFilter;
	export default interface Hooks {
		addFilter: AddFilter;
	}
}
