/**
 * Rich Text utilities.
 *
 * This module contains helper functions to convert HTML or a DOM tree into a rich text
 * value and back, and to modify the value with functions that are like String methods,
 * plus some additional ones for formatting.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-rich-text
 */
declare module '@wordpress/rich-text' {
	import {ComponentType} from '@lipemat/js-boilerplate/helpers';
	import {ForwardedRef} from 'react';
	import {AtLeast} from '@lipemat/js-boilerplate/utility';

	export type RichTextFormat = WPFormat & {
		type: string;
	}

	export type RichTextValue = {
		formats: Array<null | Array<{
			type: string;
		}>>;
		replacements: null[];
		text: string;
		start: number;
		end: number;
		activeFormats: Array<{
			title: string;
			type: string;
		}>
	}

	export type WPFormatEdit = {
		isActive: boolean,
		activeAttributes: object;
		isObjectActive: boolean;
		activeObjectAttributes: object;
		value: RichTextValue;
		onChange: ( value: RichTextValue ) => void;
		onFocus: () => void;
		contentRef: ForwardedRef<any>;
	}

	export type WPFormat = {
		title: string;
		// Name of HTML tag to wrap the formatted text.
		tagName: string;
		className: string | null;
		// Maximum array length of 3.
		keywords?: readonly [ string?, string?, string? ];
		// @link https://github.com/WordPress/gutenberg/blob/trunk/packages/rich-text/src/component/format-edit.js
		edit: ComponentType<WPFormatEdit>
	}

	/**
	 * Register a format type for changing the format of selected text.
	 *
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/format-api/
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-rich-text/#registerformattype
	 */
	export function registerFormatType( name: string, settings ): WPFormat | undefined;

	/**
	 * Toggles a format object to a Rich Text value at the current selection.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-rich-text/#toggleformat
	 */
	export function toggleFormat( value: RichTextValue, format: AtLeast<RichTextFormat, 'type'> ): RichTextValue;

	/**
	 * Unregister a format type.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-rich-text/#unregisterformattype
	 */
	export function unregisterFormatType( name: string ): WPFormat | undefined;

	export default interface RichText {
		registerFormatType: typeof registerFormatType;
		toggleFormat: typeof toggleFormat;
		unregisterFormatType: typeof unregisterFormatType;
	}
}
