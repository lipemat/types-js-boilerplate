/**
 * General helpers for this library.
 *
 * @notice You probably don't want to use these in your project.
 */
declare module '@lipemat/js-boilerplate/helpers' {
	import {ComponentClass as CC, ComponentType as CT, FC, PropsWithChildren} from 'react';
	/**
	 * Old React 17 style function component, which included
	 * `children` in its type.
	 *
	 * Used to simplify large libraries but is generally discouraged
	 * in favor of adding `children: ReactNode` to `Props` of a component.
	 *
	 * @internal
	 */
	export type FunctionComponent<P = {}> = FC<PropsWithChildren<P>>;

	/**
	 * Old React 17 style component class, which included
	 * `children` in its type.
	 *
	 * Used to simplify large libraries but is generally discouraged
	 * in favor of adding `children: ReactNode` to `Props` of a component.
	 *
	 * @internal
	 */
	export type ComponentClass<P = {}> = CC<PropsWithChildren<P>>;

	/**
	 * Old React 17 style component type, which included
	 * `children` in its type.
	 *
	 * Used to simplify large libraries but is generally discouraged
	 * in favor of adding `children: ReactNode` to `Props` of a component.
	 *
	 * @internal
	 */
	export type ComponentType<P = {}> = CT<PropsWithChildren<P>>;
}
