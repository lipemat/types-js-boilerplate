/**
 * Definitions for the `@wordpress/block-library` package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-library/
 *
 */
declare module '@wordpress/block-library' {
	import {BlockSettings} from '@wordpress/blocks';

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-library/#registercoreblocks
	 */
	export function registerCoreBlocks<Blocks extends Array<BlockSettings<any>>>( blocks?: Blocks ): void;

	export default interface BlockLibrary {
		registerCoreBlocks: typeof registerCoreBlocks;
	}
}
