/**
 * Utility package work working with special HTML
 * characters in strings.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-html-entities/
 *
 */
declare module '@wordpress/html-entities' {
	/**
	 * Decodes the HTML entities from a given string.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-html-entities/#decodeentities
	 */
	export function decodeEntities( html: string ): string;

	export default interface HtmlEntities {
		decodeEntities: typeof decodeEntities;
	}
}
