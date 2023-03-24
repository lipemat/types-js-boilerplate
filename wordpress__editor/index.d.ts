/**
 * Definitions for the `@wordpress/edit-post` package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-editor/
 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__editor/index.d.ts
 */
declare module '@wordpress/editor' {
	import {ComponentType} from '@lipemat/js-boilerplate/helpers';
	import {Settings} from 'tinymce';

	/**
	 * Initialize the classic tinymce editor.
	 * @link https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/classic/edit.js
	 */
	type initialize = ( id: string, settings: {
		quicktags?: boolean;
		mediaButtons?: boolean;
		tinymce: Settings;
	} | false ) => void;

	/**
	 * @link https://github.com/WordPress/gutenberg/tree/trunk/packages/editor/src/components/post-taxonomies
	 */
	interface FlatTermSelector {
		slug: string;
	}

	/**
	 * @link https://github.com/WordPress/gutenberg/tree/trunk/packages/editor/src/components/post-taxonomies
	 */
	interface HierarchicalTermSelector {
		slug: string;
	}

	export const PostTaxonomiesFlatTermSelector: ComponentType<FlatTermSelector>;
	export const PostTaxonomiesHierarchicalTermSelector: ComponentType<HierarchicalTermSelector>;
	export const initialize: initialize;

	export default interface Editor {
		initialize: initialize;
		PostTaxonomiesFlatTermSelector: ComponentType<FlatTermSelector>;
		PostTaxonomiesHierarchicalTermSelector: ComponentType<HierarchicalTermSelector>;
	}
}
