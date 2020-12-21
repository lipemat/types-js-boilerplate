declare module '@wordpress/url' {
	export type QueryArgObject = {
		[ key: string ]: string | string[] | any;
	};
	export type QueryArgParsed = string | string[] | QueryArgObject


	/**
	 * Determines whether the given string looks like a URL.
	 *
	 * @param {string} url The string to scrutinise.
	 *
	 * @example
	 * ```js
	 * const isURL = isURL( 'https://wordpress.org' ); // true
	 * ```
	 *
	 * @see https://url.spec.whatwg.org/
	 * @see https://url.spec.whatwg.org/#valid-url-string
	 *
	 * @return {boolean} Whether or not it looks like a URL.
	 */
	export function isURL( url: string ): boolean;

	/**
	 * Determines whether the given string looks like an email.
	 *
	 * @param {string} email The string to scrutinise.
	 *
	 * @example
	 * ```js
	 * const isEmail = isEmail( 'hello@wordpress.org' ); // true
	 * ```
	 *
	 * @return {boolean} Whether or not it looks like an email.
	 */
	export function isEmail( email: string ): boolean;

	/**
	 * Returns the protocol part of the URL.
	 *
	 * @param {string} url The full URL.
	 *
	 * @example
	 * ```js
	 * const protocol1 = getProtocol( 'tel:012345678' ); // 'tel:'
	 * const protocol2 = getProtocol( 'https://wordpress.org' ); // 'https:'
	 * ```
	 *
	 * @return {string|void} The protocol part of the URL.
	 */
	export function getProtocol( url: string ): string | void;

	/**
	 * Tests if a url protocol is valid.
	 *
	 * @param {string} protocol The url protocol.
	 *
	 * @example
	 * ```js
	 * const isValid = isValidProtocol( 'https:' ); // true
	 * const isNotValid = isValidProtocol( 'https :' ); // false
	 * ```
	 *
	 * @return {boolean} True if the argument is a valid protocol (e.g. http:, tel:).
	 */
	export function isValidProtocol( protocol: string ): boolean;

	/**
	 * Returns the authority part of the URL.
	 *
	 * @param {string} url The full URL.
	 *
	 * @example
	 * ```js
	 * const authority1 = getAuthority( 'https://wordpress.org/help/' ); // 'wordpress.org'
	 * const authority2 = getAuthority( 'https://localhost:8080/test/' ); // 'localhost:8080'
	 * ```
	 *
	 * @return {string|void} The authority part of the URL.
	 */
	export function getAuthority( url: string ): string | void;

	/**
	 * Checks for invalid characters within the provided authority.
	 *
	 * @param {string} authority A string containing the URL authority.
	 *
	 * @example
	 * ```js
	 * const isValid = isValidAuthority( 'wordpress.org' ); // true
	 * const isNotValid = isValidAuthority( 'wordpress#org' ); // false
	 * ```
	 *
	 * @return {boolean} True if the argument contains a valid authority.
	 */
	export function isValidAuthority( authority: string ): boolean;

	/**
	 * Returns the path part and query string part of the URL.
	 *
	 * @param {string} url The full URL.
	 *
	 * @example
	 * ```js
	 * const pathAndQueryString1 = getPathAndQueryString( 'http://localhost:8080/this/is/a/test?query=true' ); // '/this/is/a/test?query=true'
	 * const pathAndQueryString2 = getPathAndQueryString( 'https://wordpress.org/help/faq/' ); // '/help/faq'
	 * ```
	 *
	 * @return {string} The path part and query string part of the URL.
	 */
	export function getPathAndQueryString( url: string ): string;

	/**
	 * Returns the fragment part of the URL.
	 *
	 * @param {string} url The full URL
	 *
	 * @example
	 * ```js
	 * const fragment1 = getFragment( 'http://localhost:8080/this/is/a/test?query=true#fragment' ); // '#fragment'
	 * const fragment2 = getFragment( 'https://wordpress.org#another-fragment?query=true' ); // '#another-fragment'
	 * ```
	 *
	 * @return {string|void} The fragment part of the URL.
	 */
	export function getFragment( url: string ): string | void;

	/**
	 * Checks for invalid characters within the provided fragment.
	 *
	 * @param {string} fragment The url fragment.
	 *
	 * @example
	 * ```js
	 * const isValid = isValidFragment( '#valid-fragment' ); // true
	 * const isNotValid = isValidFragment( '#invalid-#fragment' ); // false
	 * ```
	 *
	 * @return {boolean} True if the argument contains a valid fragment.
	 */
	export function isValidFragment( fragment: string ): boolean;

	/**
	 * Appends arguments as querystring to the provided URL. If the URL already
	 * includes query arguments, the arguments are merged with (and take precedent
	 * over) the existing set.
	 *
	 * @param {string} [url='']  URL to which arguments should be appended. If omitted,
	 *                           only the resulting querystring is returned.
	 * @param {Object} [args]    Query arguments to apply to URL.
	 *
	 * @example
	 * ```js
	 * const newURL = addQueryArgs( 'https://google.com', { q: 'test' } ); // https://google.com/?q=test
	 * ```
	 *
	 * @return {string} URL with arguments applied.
	 */
	export function addQueryArgs( url?: string | undefined, args?: Object | undefined ): string;

	/**
	 * Returns a single query argument of the url
	 *
	 * @param {string} url URL.
	 * @param {string} arg Query arg name.
	 *
	 * @example
	 * ```js
	 * const foo = getQueryArg( 'https://wordpress.org?foo=bar&bar=baz', 'foo' ); // bar
	 * ```
	 *
	 * @return {QueryArgParsed|undefined} Query arg value.
	 */
	export function getQueryArg( url: string, arg: string ): QueryArgParsed | undefined;

	/**
	 * Determines whether the URL contains a given query arg.
	 *
	 * @param {string} url URL.
	 * @param {string} arg Query arg name.
	 *
	 * @example
	 * ```js
	 * const hasBar = hasQueryArg( 'https://wordpress.org?foo=bar&bar=baz', 'bar' ); // true
	 * ```
	 *
	 * @return {boolean} Whether or not the URL contains the query arg.
	 */
	export function hasQueryArg( url: string, arg: string ): boolean;

	/**
	 * Removes arguments from the query string of the url
	 *
	 * @param {string}    url  URL.
	 * @param {...string} args Query Args.
	 *
	 * @example
	 * ```js
	 * const newUrl = removeQueryArgs( 'https://wordpress.org?foo=bar&bar=baz&baz=foobar', 'foo', 'bar' ); // https://wordpress.org?baz=foobar
	 * ```
	 *
	 * @return {string} Updated URL.
	 */
	export function removeQueryArgs( url: string, ...args: string[] ): string;

	/**
	 * Prepends "http://" to a url, if it looks like something that is meant to be a TLD.
	 *
	 * @param {string} url The URL to test.
	 *
	 * @example
	 * ```js
	 * const actualURL = prependHTTP( 'wordpress.org' ); // http://wordpress.org
	 * ```
	 *
	 * @return {string} The updated URL.
	 */
	export function prependHTTP( url: string ): string;

	/**
	 * Safely decodes a URI with `decodeURI`. Returns the URI unmodified if
	 * `decodeURI` throws an error.
	 *
	 * @param {string} uri URI to decode.
	 *
	 * @example
	 * ```js
	 * const badUri = safeDecodeURI( '%z' ); // does not throw an Error, simply returns '%z'
	 * ```
	 *
	 * @return {string} Decoded URI if possible.
	 */
	export function safeDecodeURI( uri: string ): string;

	/**
	 * Safely decodes a URI component with `decodeURIComponent`. Returns the URI component unmodified if
	 * `decodeURIComponent` throws an error.
	 *
	 * @param {string} uriComponent URI component to decode.
	 *
	 * @return {string} Decoded URI component if possible.
	 */
	export function safeDecodeURIComponent( uriComponent: string ): string;

	/**
	 * Returns a URL for display.
	 *
	 * @param {string} url Original URL.
	 *
	 * @example
	 * ```js
	 * const displayUrl = filterURLForDisplay( 'https://www.wordpress.org/gutenberg/' ); // wordpress.org/gutenberg
	 * ```
	 *
	 * @return {string} Displayed URL.
	 */
	export function filterURLForDisplay( url: string ): string;

	/**
	 * Performs some basic cleanup of a string for use as a post slug.
	 *
	 * This replicates some of what `sanitize_title()` does in WordPress core, but
	 * is only designed to approximate what the slug will be.
	 *
	 * Converts Latin-1 Supplement and Latin Extended-A letters to basic Latin
	 * letters. Removes combining diacritical marks. Converts whitespace, periods,
	 * and forward slashes to hyphens. Removes any remaining non-word characters
	 * except hyphens. Converts remaining string to lowercase. It does not account
	 * for octets, HTML entities, or other encoded characters.
	 *
	 * @param {string} string Title or slug to be processed.
	 *
	 * @return {string} Processed string.
	 */
	export function cleanForSlug( string: string ): string;

	export default interface URL {
		isURL: typeof isURL;
		isEmail: typeof isEmail;
		getProtocol: typeof getProtocol;
		isValidProtocol: typeof isValidProtocol;
		getAuthority: typeof getAuthority;
		isValidAuthority: typeof isValidAuthority;
		getPathAndQueryString: typeof getPathAndQueryString;
		getFragment: typeof getFragment;
		isValidFragment: typeof isValidFragment;
		addQueryArgs: typeof addQueryArgs;
		getQueryArg: typeof getQueryArg;
		hasQueryArg: typeof hasQueryArg;
		removeQueryArgs: typeof removeQueryArgs;
		prependHTTP: typeof prependHTTP;
		safeDecodeURI: typeof safeDecodeURI;
		safeDecodeURIComponent: typeof safeDecodeURIComponent;
		filterURLForDisplay: typeof filterURLForDisplay;
		cleanForSlug: typeof cleanForSlug;
	}
}
