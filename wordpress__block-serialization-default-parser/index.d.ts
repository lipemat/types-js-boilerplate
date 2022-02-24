/**
 * Parser utility for converting HTML block JSON to block objects
 *
 * Handle initial parsing while complete parsing is done via `parse`
 * in `@wordpress/blocks.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-serialization-default-parser/
 */
declare module '@wordpress/block-serialization-default-parser' {

	export interface ParsedBlock<A = { [ key: string ]: any }, I = []> {
		attrs: A,
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
