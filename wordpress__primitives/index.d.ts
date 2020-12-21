/**
 * Definitions for the `@wordpress/primitives` package.
 *
 * Currently not available as a global variable and must
 * be used from the package directly.
 *
 * @link https://www.npmjs.com/package/@wordpress/primitives
 *
 * @todo Adjust configurations to use webpack external and remove
 *       direct package access and package.json dependency
 *       when available in WP Core.
 */
declare module '@wordpress/primitives' {
	import {ComponentType, SVGAttributes} from 'react';
	import {ClassValue} from 'classnames/types';


	interface BlockQuotation extends HTMLQuoteElement {
	}

	interface HorizontalRule extends HTMLHRElement {
	}

	interface Circle extends React.SVGProps<SVGCircleElement> {
	}

	interface G extends React.SVGProps<SVGGElement> {
	}

	interface Path extends React.SVGProps<SVGPathElement> {
	}

	interface Polygon extends React.SVGProps<SVGPolygonElement> {
	}

	interface Rect extends React.SVGProps<SVGRectElement> {
	}

	interface Defs extends React.SVGProps<SVGDefsElement> {
	}

	interface RadialGradient extends React.SVGProps<SVGRadialGradientElement> {
	}

	interface LinearGradient extends React.SVGProps<SVGLinearGradientElement> {
	}

	interface Stop extends React.SVGProps<SVGStopElement> {
	}

	interface SVG extends Omit<SVGAttributes<SVGElement>, 'className'> {
		className?: ClassValue;
		isPressed?: boolean;
	}

	export const BlockQuotation: ComponentType<BlockQuotation>;
	export const Circle: ComponentType<Circle>;
	export const Defs: ComponentType<Defs>;
	export const G: ComponentType<G>;
	export const HorizontalRule: ComponentType<HorizontalRule>;
	export const LinearGradient: ComponentType<LinearGradient>;
	export const Path: ComponentType<Path>;
	export const Polygon: ComponentType<Polygon>;
	export const RadialGradient: ComponentType<RadialGradient>;
	export const Rect: ComponentType<Rect>;
	export const SVG: ComponentType<SVG>;
	export const Stop: ComponentType<Stop>;

	export default interface Primitives {
		BlockQuotation: ComponentType<BlockQuotation>;
		Circle: ComponentType<Circle>;
		Defs: ComponentType<Defs>;
		G: ComponentType<G>;
		HorizontalRule: ComponentType<HorizontalRule>;
		LinearGradient: ComponentType<LinearGradient>;
		Path: ComponentType<Path>;
		Polygon: ComponentType<Polygon>;
		RadialGradient: ComponentType<RadialGradient>;
		Rect: ComponentType<Rect>;
		SVG: ComponentType<SVG>;
		Stop: ComponentType<Stop>;
	}


}
