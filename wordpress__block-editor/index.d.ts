/**
 * Block editor elements and utilities.
 *
 * Supports stand-alone block editors, or work with WP core ones.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/tree/trunk/types/wordpress__block-editor
 */
declare module '@wordpress/block-editor' {
	import {ComponentClass, ComponentType, FunctionComponent, MouseEvent, MutableRefObject, ReactElement, ReactNode, RefCallback} from 'react';
	import {ColorOption, ColorPalette as PaletteComponent, Control, Fill, GradientOption, PanelBody, PopoverProps, WPBlockTypeIconRender} from '@wordpress/components';
	import {BlockIcon as Icon, ChildBlocks, CreateBlock} from '@wordpress/blocks';
    import {StoreDescriptor} from '@wordpress/data';
	import {ALL_TYPES} from '@lipemat/js-boilerplate/mime';
	import {SelectedMedia} from '@lipemat/js-boilerplate/global/wp-media';

	/**
	 * Returns a class based on the context a color is being used and its slug.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#getcolorclassname
	 */
	export function getColorClassName( colorContextName: string, colorSlug: string ): string;

	/**
	 * Provided an array of color objects as set by the theme or by the editor defaults,
	 * and the values of the defined color or custom color returns a color object describing the color.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#getcolorobjectbyattributevalues
	 */
	export function getColorObjectByAttributeValues( colors: ColorOption[], colorSlug?: string, colorValue?: string ): ColorOption | { color: string };

	/**
	 * Provided an array of color objects as set by the theme or by the editor defaults,
	 * and a color value returns the color object matching that value or undefined.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#getcolorobjectbycolorvalue
	 */
	export function getColorObjectByColorValue( colors: ColorOption[], colorValue?: string ): ColorOption | undefined;


	/**
	 * Retrieves the gradient slug per slug.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#getgradientslugbyvalue
	 */
	export function getGradientSlugByValue( gradients: GradientOption[], value: string ): string;

	/**
	 * Retrieves the gradient value per slug.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#getgradientvaluebyslug
	 */
	export function getGradientValueBySlug( gradients: GradientOption[], value: string ): string;

	/**
	 * @link https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor#useBlockDisplayInformation
	 */
	type useBlockDisplayInformation = ( blockId: string ) => {
		title: string;
		icon: string;
		description: string;
	}

	type BlockWrapAttributes = JSX.IntrinsicElements['div'] & {
		ref?: MutableRefObject<any>;
	};

	/**
	 * Receive HTML props to add to wrapper element when using `apiVersion:2`.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
	 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
	 */
	type useBlockProps = {
		save: ( props?: BlockWrapAttributes ) => BlockWrapAttributes,
		( props?: BlockWrapAttributes ): BlockWrapAttributes;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useinnerblocksprops
	 */
	type useInnerBlocksProps = {
		( props?: BlockWrapAttributes, options?: InnerBlock ): BlockWrapAttributes & {
			className: string;
			children: ReactElement;
			ref: RefCallback<any>;
		}
		save: ( props?: BlockWrapAttributes ) => BlockWrapAttributes,
		Content: ComponentType<{}>;
	}

	/**
	 * Retrieve a setting from the theme.json file.
	 *
	 * May retrieve WP core or custom settings.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#usesetting
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/
	 * @link https://raw.githubusercontent.com/WordPress/gutenberg/trunk/schemas/json/theme.json
	 */
	export function useSetting<T = any>( path: string ): T;
	export function useSetting( path: 'color.palette' ): ColorOption[];
	export function useSetting( path: 'color.gradients' ): GradientOption[];

	type withColorContext = {
		colors?: ColorOption[];
		disableCustomColors?: boolean
	}

	/**
	 * Add buttons to toolbar of a custom block.
	 *
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/
	 *
	 * @see `@wordpress/components.ToolbarButton`
	 *
	 * @notice The slot's fill is behind the 'useDisplayBlockControls' hook, so you
	 *         may only add buttons to custom block or parent of a custom block.
	 */
	interface BlockControls {
		group?: 'default' | 'block' | 'inline' | 'other' | 'parent';
		controls?: Array<Control>;
	}

	/**
	 * Display a blocks icons using its attributes.
	 *
	 * https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#blockicon
	 */
	interface BlockIcon {
		icon: Icon;
		showColors?: boolean;
		className?: string;
	}

	/**
	 *
	 * https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#blockverticalalignmenttoolbar
	 */
	interface BlockVerticalAlignmentToolbar {
		value: 'top' | 'center' | 'bottom' | undefined;
		onChange: ( align: 'top' | 'center' | 'bottom' | undefined ) => void;
		isCollapsed?: boolean;
		isToolbar?: boolean;
	}

	interface ColorPalette extends Partial<PaletteComponent>, withColorContext {
	}

	/**
	 * @see PanelColorSettings
	 */
	interface ColorPaletteControl {
		colors?: ColorOption[];
		disableCustomColors?: boolean;
		label?: string;
		onChange: ( currentValue: string ) => void;
		value: string;
	}

	interface CopyHandler {
		children: ReactNode;
	}

	/**
	 * Appear in the post settings sidebar when a block is being edited.
	 * The controls appear in both HTML and visual editing modes, and thus
	 * should contain settings that affect the entire block.
	 *
	 * Used commonly with `@wordpress/components.PanelBody`.
	 *
	 * @see module:@wordpress/components.PanelBody
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inspector-controls/README.md
	 */
	interface InspectorControls extends Fill {};

	export type AlignOptions = 'left' | 'center' | 'right' | 'space-between';

	/**
	 * Justify align options control
	 *
	 * @link https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/justify-content-control
	 */
	interface JustifyToolbar {
		allowedControls?: Array<AlignOptions>;
		isCollapsed?: boolean;
		onChange?: ( align: AlignOptions | undefined ) => void;
		popoverProps?: PopoverProps;
		value?: AlignOptions | undefined;
	}

	interface MediaUploadBase {
		addToGallery?: boolean;
		allowedTypes?: Array<ALL_TYPES> | ALL_TYPES;
		gallery?: boolean;
		modalClass?: string;
		onClose?: () => void;
		render: ( args: { open: () => void } ) => ReactNode;
		title?: string;
		value?: number | number[];
	}

	/**
	 * Media manager opener and handler.
	 *
	 * @link https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/media-upload
	 */
	export type MediaUpload = MediaUploadBase & {
		multiple: false,
		onSelect?: ( attachment: SelectedMedia ) => void;
	} | MediaUploadBase & {
		multiple: true,
		onSelect?: ( attachments: Array<SelectedMedia> ) => void;
	} | MediaUploadBase & {
		multiple: true,
		handleUpload: false;
		onSelect?: ( files: File[] ) => void;
	} | MediaUploadBase & {
		multiple: false,
		handleUpload: false;
		onSelect?: ( files: File ) => void;
	}

	/**
	 * Edit and display a blocks media.
	 *
	 * @notice Will only work in the Gutenberg interface.
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-placeholder/README.md
	 * @see https://github.dev/WordPress/gutenberg/blob/433bd236a9bb207b71abc2edd58390c17cb83eb3/packages/block-library/src/gallery/edit.js#L433
	 */
	export type MediaPlaceholder = MediaUpload & {
		accept?: string;
		className?: string;
		disableDropZone?: boolean;
		disableMediaButtons?: boolean;
		handleUpload?: boolean;
		icon?: WPBlockTypeIconRender;
		isAppender?: boolean;
		labels?: {
			title?: string;
			instructions?: string;
		},
		mediaLibraryButton?: ReactNode;
		mediaPreview?: ReactNode;
		notices?: ReactNode;
		onCancel?: () => void,
		onDoubleClick?: () => void,
		onError?: ( error: Error ) => void;
		onFilesPreUpload?: ( files: File[] ) => void;
		onHTMLDrop?: ( html: string ) => void;
		onSelectURL?: ( src: string ) => void;
		// Enabled featured image select.
		onToggleFeaturedImage?: ( ev: MouseEvent<HTMLButtonElement> ) => void
		placeholder?: ReactNode;
		style?: CSSStyleDeclaration,
	}

	/**
	 * Displays a panel with a list of colors settings to choose.
	 * Preferred method of offering custom color options.
	 *
	 * Default method used by WP core when a block supports colors.
	 *
	 * @see ColorEdit in packages/block-editor/src/hooks/color.js for retrieving
	 *      and saving custom color values outside this component.
	 *
	 */
	interface PanelColorSettings extends PanelBody, withColorContext {
		colorSettings: Array<Partial<ColorPaletteControl> & {
			colors?: ColorOption[];
		}>;
	}

	/**
	 * @link https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/rich-text/README.md
	 */
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
		// Show format controls inline instead of within block toolbar.
		inlineToolbar?: boolean;
	}

	/**
	 * @link https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/inner-blocks/README.md
	 */
	type InnerBlock = {
		allowedBlocks?: string[];
		onChange?: ( blocks: CreateBlock[] ) => void;
		orientation?: 'horizontal';
		placeholder?: ReactElement;
		renderAppender?: boolean | ( () => ReactNode );
		template?: ChildBlocks;
		templateLock?: 'all' | 'insert' | 'contentOnly' | boolean;
		value?: CreateBlock[];
	}

	/**
	 * Support blocks inside your block.
	 *
	 * @link https://developer.wordpress.org/block-editor/tutorials/block-tutorial/nested-blocks-inner-blocks/
	 */
	interface InnerBlocks extends ComponentClass<InnerBlock> {
		ButtonBlockAppender: ComponentType<{}>;
		DefaultBlockAppender: ComponentType<{}>;
		Content: ComponentType<{}>;
	}


	export const BlockControls: ComponentType<BlockControls>;
	export const BlockIcon: ComponentType<BlockIcon>;
	export const BlockVerticalAlignmentToolbar: ComponentType<BlockVerticalAlignmentToolbar>;
	export const ColorPalette: ComponentType<ColorPalette>;
	export const ColorPaletteControl: ComponentType<ColorPaletteControl>;
	export const CopyHandler: ComponentType<CopyHandler>;
    export const InspectorControls: ComponentType<InspectorControls>;
    export const InspectorControlsAdvanced: ComponentType<InspectorControls>;
	export const JustifyToolbar: ComponentType<JustifyToolbar>;
	export const MediaPlaceholder: ComponentType<MediaPlaceholder>;
	export const MediaUpload: ComponentClass<MediaUpload>;
	export const PanelColorSettings: ComponentType<PanelColorSettings>;
	export const RichText: ComponentType<RichText>;
	export const InnerBlocks: InnerBlocks;
	export const useBlockDisplayInformation: useBlockDisplayInformation;
	export const useBlockProps: useBlockProps;
	export const useInnerBlocksProps: useInnerBlocksProps;
    export const store: StoreDescriptor;


	export default interface BlockEditor {
		BlockControls: ComponentType<BlockControls>;
		BlockIcon: ComponentType<BlockIcon>;
		BlockVerticalAlignmentToolbar: ComponentType<BlockVerticalAlignmentToolbar>;
		ColorPalette: ComponentType<ColorPalette>;
		ColorPaletteControl: ComponentType<ColorPaletteControl>;
		CopyHandler: ComponentType<CopyHandler>;
		getColorClassName: typeof getColorClassName;
		getColorObjectByAttributeValues: typeof getColorObjectByAttributeValues;
		getColorObjectByColorValue: typeof getColorObjectByColorValue;
		getGradientSlugByValue: typeof getGradientSlugByValue;
		getGradientValueBySlug: typeof getGradientValueBySlug;
		InspectorControls: ComponentType<InspectorControls>;
		InspectorControlsAdvanced: ComponentType<InspectorControls>;
		JustifyToolbar: ComponentType<JustifyToolbar>;
		MediaPlaceholder: ComponentType<MediaPlaceholder>;
		MediaUpload: ComponentType<MediaUpload>;
		PanelColorSettings: ComponentType<PanelColorSettings>;
		RichText: ComponentType<RichText>;
		InnerBlocks: InnerBlocks;
		useBlockDisplayInformation: useBlockDisplayInformation;
		useBlockProps: useBlockProps;
		useInnerBlocksProps: useInnerBlocksProps;
		useSetting: typeof useSetting;
        store: typeof store;
	}
}
