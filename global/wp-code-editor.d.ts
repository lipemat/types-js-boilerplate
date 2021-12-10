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
 * @link https://codemirror.net/doc/manual.html
 *
 */
declare module '@lipemat/js-boilerplate/global/wp-code-editor' {
	import {Editor, EditorConfiguration, EditorFromTextArea} from 'codemirror';
	import 'codemirror/addon/hint/show-hint';
	import 'codemirror/addon/hint/anyword-hint';
	import 'codemirror/addon/hint/css-hint';
	import 'codemirror/addon/hint/html-hint';
	import 'codemirror/addon/hint/javascript-hint';
	import 'codemirror/addon/hint/sql-hint';
	import 'codemirror/addon/hint/xml-hint';
	import 'codemirror/addon/lint/lint';
	import 'codemirror/addon/lint/css-lint';
	import 'codemirror/addon/lint/html-lint';
	import 'codemirror/addon/lint/javascript-lint';
	import 'codemirror/addon/lint/json-lint';
	import 'codemirror/addon/comment/comment';
	import 'codemirror/addon/comment/continuecomment';
	import 'codemirror/addon/fold/xml-fold';
	import 'codemirror/addon/mode/overlay';
	import 'codemirror/addon/edit/closebrackets';
	import 'codemirror/addon/edit/closetag';
	import 'codemirror/addon/edit/continuelist';
	import 'codemirror/addon/edit/matchbrackets';
	import 'codemirror/addon/edit/matchtags';
	import 'codemirror/addon/edit/trailingspace';
	import 'codemirror/addon/dialog/dialog';
	import 'codemirror/addon/display/autorefresh';
	import 'codemirror/addon/display/fullscreen';
	import 'codemirror/addon/display/panel';
	import 'codemirror/addon/display/placeholder';
	import 'codemirror/addon/display/rulers';
	import 'codemirror/addon/fold/brace-fold';
	import 'codemirror/addon/fold/comment-fold';
	import 'codemirror/addon/fold/foldcode';
	import 'codemirror/addon/fold/foldgutter';
	import 'codemirror/addon/fold/indent-fold';
	import 'codemirror/addon/fold/markdown-fold';
	import 'codemirror/addon/merge/merge';
	import 'codemirror/addon/mode/loadmode';
	import 'codemirror/addon/mode/multiplex';
	import 'codemirror/addon/mode/simple';
	import 'codemirror/addon/runmode/runmode';
	import 'codemirror/addon/runmode/colorize';
	import 'codemirror/addon/runmode/runmode-standalone';
	import 'codemirror/addon/scroll/annotatescrollbar';
	import 'codemirror/addon/scroll/scrollpastend';
	import 'codemirror/addon/scroll/simplescrollbars';
	import 'codemirror/addon/search/search';
	import 'codemirror/addon/search/jump-to-line';
	import 'codemirror/addon/search/match-highlighter';
	import 'codemirror/addon/search/matchesonscrollbar';
	import 'codemirror/addon/search/searchcursor';
	import 'codemirror/addon/tern/tern';
	import 'codemirror/addon/tern/worker';
	import 'codemirror/addon/wrap/hardwrap';
	import 'codemirror/addon/selection/active-line';
	import 'codemirror/addon/selection/mark-selection';
	import 'codemirror/addon/selection/selection-pointer';
	import 'codemirror/mode/meta';
	import 'codemirror/mode/clike/clike';
	import 'codemirror/mode/css/css';
	import 'codemirror/mode/diff/diff';
	import 'codemirror/mode/htmlmixed/htmlmixed';
	import 'codemirror/mode/http/http';
	import 'codemirror/mode/javascript/javascript';
	import 'codemirror/mode/jsx/jsx';
	import 'codemirror/mode/markdown/markdown';
	import 'codemirror/mode/gfm/gfm';
	import 'codemirror/mode/nginx/nginx';
	import 'codemirror/mode/php/php';
	import 'codemirror/mode/sass/sass';
	import 'codemirror/mode/shell/shell';
	import 'codemirror/mode/sql/sql';
	import 'codemirror/mode/xml/xml';
	import 'codemirror/mode/yaml/yaml';

	export type WpCodeEditor<T = Editor> = {
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
		initialize: ( textarea: string | JQuery | Element, settings: Partial<WpCodeEditor['defaultSettings']> ) => {
			codemirror: EditorFromTextArea;
			settings: WpCodeEditor['defaultSettings']['codemirror'];
		};
	}
}
