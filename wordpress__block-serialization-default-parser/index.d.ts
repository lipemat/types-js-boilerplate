
/**
 * Parser utility for converting HTML block JSON to block objects
 *
 * Handle initial parsing while complete parsing is done via `parse`
 * in `@wordpress/blocks.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-serialization-default-parser/
 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__block-serialization-spec-parser/index.d.ts
 */
declare module '@wordpress/block-serialization-default-parser' {
	import type {BlockMetadata} from '@wordpress/blocks';

	export interface ParsedBlock<A = { [ key: string ]: any }, I = []> {
		attrs: A & BlockMetadata;
		blockName: string;
		innerBlocks: I | Array<ParsedBlock>;
		innerContent: string[];
		innerHTML: string;

	}

	/**
	 * @see BlockParse
	 */
	export function parse( content: string ): ParsedBlock[]

	export default interface BlockSerializationDefaultParser {
		parse: typeof parse;
	}
}
