declare module '@wordpress/element' {
	import {ComponentType} from 'react';

	export const Fragment: ComponentType<{}>;

	export default interface Element {
		Fragment: ComponentType<{}>;
	}
}
