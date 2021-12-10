/**
 * `wp.codeEditor` global variable.
 *
 * The `global.d.ts` includes these definitions as part
 * of the `window.wp.codeEditor` variable, and they may be used
 * directly.
 *
 * These definitions may also be used partially or separately,
 * via the exports.
 *
 * @see ../global.d.ts
 *
 */
declare module '@lipemat/js-boilerplate/global/wp-code-editor' {
	import {Editor, EditorConfiguration} from 'codemirror';
	export type WpCodeEditor = {
		defaultSettings: {
			codemirror: EditorConfiguration,
			csslint: object,
			htmlhint: object,
			jshint: object,
			onTabNext: Function;
			onTabPrevious: Function;
			onChangeLintingErrors: Function;
			onUpdateErrorNotice: Function;
		};
		initialize: ( textarea: string | JQuery | Element, settings: Partial<WpCodeEditor['defaultSettings']> ) => Editor;
	}
}
