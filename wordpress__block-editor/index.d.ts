// While incomplete, this prevents PHPStorm from finding the rest of the available items.
// Add them as needed

declare module '@wordpress/block-editor' {
	import {ComponentClass, ComponentType, FunctionComponent, ReactNode} from 'react';
	import {colorOptions, ColorPalette as PaletteComponent, PanelBody, PopoverProps} from '@wordpress/components';
	import {subBlocks} from '@wordpress/blocks';
	import {ALL_TYPES} from '@lipemat/js-boilerplate/mime';

	type getColorClassName = ( prefix: string, slug: string ) => string;
	/**
	 * @link https://github.com/WordPress/gutenberg/tree/master/packages/block-editor#useBlockDisplayInformation
	 */
	type useBlockDisplayInformation = ( blockId: string ) => {
		title: string;
		icon: string;
		description: string;
	}

	type withColorContext = {
		colors?: colorOptions;
		disableCustomColors?: boolean
	}

	interface ColorPalette extends Partial<PaletteComponent>, withColorContext {
	}

	interface ColorPaletteControl {
		colors: colorOptions;
		disableCustomColors: boolean;
		label: string;
		onChange: ( currentValue: string ) => void;
		value: string;
	}

	interface InspectorControls extends FunctionComponent {
	}

	export type AlignOptions = 'left' | 'center' | 'right' | 'space-between';

	/**
	 * Justify align options control
	 *
	 * @link https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/justify-toolbar
	 */
	interface JustifyToolbar {
		allowedControls? : Array<AlignOptions>;
		isCollapsed?: boolean;
		onChange?: ( align: AlignOptions | undefined ) => void;
		popoverProps?: PopoverProps;
		value?: AlignOptions | undefined;
	}

	/**
	 * Media manager opener and handler.
	 *
	 * @link https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/media-upload
	 */
	interface MediaUpload {
		allowedTypes?: Array<ALL_TYPES>;
		multiple?: boolean;
		value?: number | number[];
		onClose?: () => void;
		onSelect?: ( attachments: object | object[] ) => void;
		title?: string;
		modalClass?: string;
		addToGallery?: boolean;
		gallery?: boolean;
		render: ( args: { open: () => void } ) => ReactNode;
	}

	interface PanelColorSettings extends PanelBody, withColorContext {
		colorSettings: Array<Partial<ColorPaletteControl> & {
			colors?: colorOptions;
		}>;
	}


	interface RichText {
		children?: ReactNode[],
		className?: string;
		value: string;
		onChange: ( currentValue: string ) => void;
		tagName?: string; //defaults `div`
		placeholder?: string;
		keepPlaceholderOnFocus?: boolean
		//By default, a line break will be inserted on Enter. If the editable field can contain multiple paragraphs, this property can be set to create new paragraphs on Enter.
		multiline?: boolean;
		// Called when the content can be split, where value is a piece of content being split off. Here you should create a new block with that content and return it. Note that you also need to provide onReplace in order for this to take any effect.
		onSplit?: ( value: string, content?: string ) => void;
		// Called when the RichText instance can be replaced with the given blocks.
		onReplace?: ( blocks: ReactNode[], index?: number ) => void;
		// Called when blocks can be merged. forward is true when merging with the next block, false when merging with the previous block.
		onMerge?: ( forward: boolean ) => void;
		// Called when the block can be removed. forward is true when the selection is expected to move to the next block, false to the previous block.
		onRemove?: ( forward: boolean ) => void;
		// By default, all registered formats are allowed. This setting can be used to fine-tune the allowed formats
		allowedFormats?: string[]; // example: [ 'core/bold', 'core/link' ]
		// By default, all formatting controls are present. This setting can be used to remove formatting controls that would make content interactive. This is useful if you want to make content that is already interactive editable.
		withoutInteractiveFormatting?: boolean;
		// Whether to show the input is selected or not in order to show the formatting controls. By default it renders the controls when the block is selected.
		isSelected?: boolean;
		autocompleters?: string[];

	}

	/**
	 * Support blocks inside your block.
	 *
	 * @link https://developer.wordpress.org/block-editor/tutorials/block-tutorial/nested-blocks-inner-blocks/
	 */
	interface InnerBlocks {
		allowedBlocks: string[];
		template: subBlocks;
		orientation?: 'horizontal';
		placeholder?: boolean;
	}


	// These are needed for mapping the compiler to the global variables when using imports.
	export const ColorPalette: ComponentType<ColorPalette>;
	export const ColorPaletteControl: ComponentType<ColorPaletteControl>;
	export const getColorClassName: getColorClassName;
	export const InspectorControls: InspectorControls;
	export const JustifyToolbar: ComponentType<JustifyToolbar>;
	export const MediaUpload: ComponentClass<MediaUpload>;
	export const PanelColorSettings: ComponentType<PanelColorSettings>;
	export const RichText: ComponentType<RichText>;
	export const InnerBlocks: InnerBlocks;
	export const useBlockDisplayInformation: useBlockDisplayInformation;

	export default interface BlockEditor {
		ColorPalette: ComponentType<ColorPalette>;
		ColorPaletteControl: ComponentType<ColorPaletteControl>;
		getColorClassName: getColorClassName;
		InspectorControls: InspectorControls;
		JustifyToolbar: ComponentType<JustifyToolbar>;
		MediaUpload: ComponentClass<MediaUpload>;
		PanelColorSettings: ComponentType<PanelColorSettings>;
		RichText: ComponentType<RichText>;
		InnerBlocks: InnerBlocks;
		useBlockDisplayInformation: useBlockDisplayInformation;
	}
}
