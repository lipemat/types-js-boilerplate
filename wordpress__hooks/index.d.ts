/**
 * Actions and filters via JS.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-hooks/
 */
declare module '@wordpress/hooks' {
	export interface Hook {
		priority: number;
		namespace: string;
		callback: Function;
	}

	type actions = {
		[ hook: string ]: {
			handlers: Hook[]
		}
	};
	type filters = {
		[ hook: string ]: {
			handlers: Hook[]
		}
	};

	type Callback<P, R> = ( props: P ) => R;

	export function addAction<P, R = any>( action: string, namespace: string, cb: Callback<P, R>, priority?: number ): void;

	export function addFilter<P, R = any>( filter: string, namespace: string, cb: Callback<P, R>, priority?: number ): void;

	type applyFilters = <T = any>( filter: string, content: any, ...args: any ) => T;
	type createHooks = () => void;
	type doAction = ( action: string, ...args: any ) => void;

	type doingAction = ( action: string ) => void;
	type doingFilter = ( filter: string ) => void;
	type didAction = ( action: string ) => void;
	type didFilter = ( filter: string ) => void;
	type hasAction = ( action: string, namespace: string ) => void;
	type hasFilter = ( filter: string, namespace: string ) => void;

	type removeAction = ( action: string, namespace: string ) => void;
	type removeFilter = ( filter: string, namespace: string ) => void;
	type removeAllActions = ( action: string ) => void;
	type removeAllFilters = ( filter: string ) => void;

	export const actions: actions;
	export const applyFilters: applyFilters;
	export const createHooks: createHooks;
	export const doAction: doAction;
	export const doingAction: doingAction;
	export const doingFilter: doingFilter;
	export const didAction: didAction;
	export const didFilter: didFilter;
	export const filters: filters;
	export const hasAction: hasAction;
	export const hasFilter: hasFilter;
	export const removeAction: removeAction;
	export const removeFilter: removeFilter;
	export const removeAllActions: removeAllActions;
	export const removeAllFilters: removeAllFilters;

	export default interface Hooks {
		actions: actions;
		addFilter: typeof addFilter;
		addAction: typeof addAction;
		applyFilters: applyFilters;
		createHooks: createHooks;
		doAction: doAction;
		doingAction: doingAction;
		doingFilter: doingFilter;
		didAction: didAction;
		didFilter: didFilter;
		filters: filters;
		hasAction: hasAction;
		hasFilter: hasFilter;
		removeAction: removeAction;
		removeFilter: removeFilter;
		removeAllActions: removeAllActions;
		removeAllFilters: removeAllFilters;
	}
}
