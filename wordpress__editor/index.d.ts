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
	 *
	 * @see wp_enqueue_editor
	 * @link https://github.com/WordPress/WordPress/blob/master/wp-admin/js/editor.js#L1216
	 * @link https://www.tiny.cloud/docs-4x/
	 *
	 * Alternative integrations via React or Svelte components
	 * are available
	 * @link https://www.tiny.cloud/docs/integrations/
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
