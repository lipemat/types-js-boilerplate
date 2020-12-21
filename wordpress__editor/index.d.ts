declare module '@wordpress/editor' {
	import {ComponentType} from 'react';
	import {withInstanceIdProps} from '@wordpress/compose';
	import {withSpokenMessages} from '@wordpress/components'
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
	 * @notice Not publicly available yet!!
	 *
	 * @issue https://github.com/WordPress/gutenberg/issues/17476
	 */
	interface HierarchicalTermSelector extends withInstanceIdProps, withSpokenMessages {
		hasCreateAction?: boolean;
		hasAssignAction?: boolean;
		terms?: Array<{
			id: number;
			count: number;
			description: string;
			link: string;
			name: string;
			taxonomy: string;
			parent: number;
		}>;
		slug: string;
		taxonomy?: string;
	}

	export const HierarchicalTermSelector: ComponentType<HierarchicalTermSelector>;
	export const initialize: initialize;

	export default interface Editor {
		initialize: initialize
		HierarchicalTermSelector: ComponentType<HierarchicalTermSelector>;
	}
}
