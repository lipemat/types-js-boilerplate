/**
 * Escape HTML utilities.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-escape-html/
 *
 * @since 1.35.0
 */
declare module '@wordpress/escape-html' {
	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-escape-html/#escapeampersand
	 */
	export function escapeAmpersand( value: string ): string;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-escape-html/#escapeattribute
	 */
	export function escapeAttribute( value: string ): string;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-escape-html/#escapeeditablehtml
	 */
	export function escapeEditableHTML( value: string ): string;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-escape-html/#escapehtml
	 */
	export function escapeHTML( value: string ): string;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-escape-html/#escapelessthan
	 */
	export function escapeLessThan( value: string ): string;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-escape-html/#escapequotationmark
	 */
	export function escapeQuotationMark( value: string ): string;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-escape-html/#isvalidattributename
	 */
	export function isValidAttributeName( value: string ): boolean;

	export default interface EscapeHtml {
		escapeAmpersand: typeof escapeAmpersand;
		escapeAttribute: typeof escapeAttribute;
		escapeEditableHTML: typeof escapeEditableHTML;
		escapeHTML: typeof escapeHTML;
		escapeLessThan: typeof escapeLessThan;
		escapeQuotationMark: typeof escapeQuotationMark;
		isValidAttributeName: typeof isValidAttributeName;
	}
}
