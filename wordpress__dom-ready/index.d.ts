/**
 * WordPress DOM Ready
 *
 * Execute a callback after the DOM is loaded.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dom-ready/
 */
declare module '@wordpress/dom-ready' {
	export function domReady( callback: () => void ): void;

	export default interface DomReady {
		domReady: typeof domReady;
	}
}
