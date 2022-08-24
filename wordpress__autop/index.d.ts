/**
 * Type declarations for WP Autop package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-autop/
 */
declare module '@wordpress/autop' {
	/**
	 * Replaces double line-breaks with paragraph elements.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-autop/#autop
	 */
	export function autop( text: string, br?: boolean ): string;

	/**
	 * Replaces <p> tags with two line breaks. “Opposite” of autop().
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-autop/#removep
	 */
	export function removep( text: string ): string;

	export default interface Autop {
		autop: typeof autop;
		removep: typeof removep;
	}
}
