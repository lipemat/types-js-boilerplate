/**
 * @link https://github.com/WordPress/gutenberg/blob/master/packages/i18n/src/index.js
 */
declare module '@wordpress/i18n' {
	type single = string;
	type plural = string;
	// The empty string key is used as the configuration ""
	type emptyKey = {
		domain: string;
		lang: string;
		// eslint-disable-next-line camelcase
		plural_forms: string;
	};
	type setLocaleData = ( data: { [ key: string ]: [ single, plural ] | emptyKey }, domain?: string ) => void;

	type __ = ( text: string, domain?: string ) => string;
	type _x = ( text: string, context: string, domain?: string ) => string;
	type _n = ( single: string, plural: string, number: number, domain?: string ) => string;
	type _nx = ( single: string, plural: string, number: number, context: string, domain?: string ) => string;

	type sprintf = ( format: string, ...args: Array<string | number> ) => string;

	export const setLocaleData: setLocaleData;
	export const __: __;
	export const _x: _x;
	export const _n: _n;
	export const _nx: _nx;
	export const sprintf: sprintf;

	export default interface I18N {
		setLocaleData: setLocaleData
		__: __;
		_x: _x;
		_n: _n;
		_nx: _nx;
		sprintf: sprintf;
	}

}
