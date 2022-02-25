
/**
 * Block editor elements and utilities.
 *
 * Supports stand alone block editors, or work with WP core ones.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
 */
declare module '@wordpress/block-editor' {
	import {
		ComponentClass,
		ComponentType,
		FunctionComponent,
		HTMLAttributes,
		MutableRefObject,
		ReactNode,
	} from 'react';
	import {
		colorOptions,
		ColorPalette as PaletteComponent,
		Control,
		PanelBody,
		PopoverProps,
		WPBlockTypeIconRender,
	} from '@wordpress/components';
	import {ChildBlocks, Icon} from '@wordpress/blocks';
	import {ALL_TYPES} from '@lipemat/js-boilerplate/mime';
	import {SelectedMedia} from '@lipemat/js-boilerplate/global/wp-media';
	import {BlockClientId} from '@wordpress/data';

	type getColorClassName = ( prefix: string, slug: string ) => string;
	/**
	 * @link https://github.com/WordPress/gutenberg/tree/master/packages/block-editor#useBlockDisplayInformation
	 */
	type useBlockDisplayInformation = ( blockId: string ) => {
		title: string;
		icon: string;
		description: string;
	}

	type BlockWrapAttributes = HTMLAttributes<HTMLDivElement | HTMLParagraphElement> & {
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
	 * Retrieve a setting from the theme.json file.
	 *
	 * May retrieve WP core or custom settings.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#usesetting
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/
	 */
	type useSetting = {
		( path: string ): any;
	}

	type withColorContext = {
		colors?: colorOptions;
		disableCustomColors?: boolean
	}

	/**
	 * Add buttons to toolbar of a custom block.
	 *
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/
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

	interface ColorPalette extends Partial<PaletteComponent>, withColorContext {
	}

	interface ColorPaletteControl {
		colors: colorOptions;
		disableCustomColors: boolean;
		label: string;
		onChange: ( currentValue: string ) => void;
		value: string;
	}

	interface CopyHandler {
		children: ReactNode;
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
	 * @link https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/media-upload
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
			title: string;
			instructions: string;
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
		placeholder?: ReactNode;
		style?: CSSStyleDeclaration,
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
	interface InnerBlocks extends ComponentClass<{
		allowedBlocks?: string[];
		template?: ChildBlocks;
		orientation?: 'horizontal';
		placeholder?: boolean;
		value?: BlockClientId[];
		onChange?: ( blocks: BlockClientId[] ) => void;
	}> {
		Content: ComponentType<{}>;
	}


	export const BlockControls: ComponentType<BlockControls>;
	export const BlockIcon: ComponentType<BlockIcon>;
	export const ColorPalette: ComponentType<ColorPalette>;
	export const ColorPaletteControl: ComponentType<ColorPaletteControl>;
	export const CopyHandler: ComponentType<CopyHandler>;
	export const getColorClassName: getColorClassName;
	export const InspectorControls: InspectorControls;
	export const JustifyToolbar: ComponentType<JustifyToolbar>;
	export const MediaPlaceholder: ComponentType<MediaPlaceholder>;
	export const MediaUpload: ComponentClass<MediaUpload>;
	export const PanelColorSettings: ComponentType<PanelColorSettings>;
	export const RichText: ComponentType<RichText>;
	export const InnerBlocks: InnerBlocks;
	export const useBlockDisplayInformation: useBlockDisplayInformation;
	export const useBlockProps: useBlockProps;
	export const useSetting: useSetting;


	export default interface BlockEditor {
		BlockControls: ComponentType<BlockControls>;
		BlockIcon: ComponentType<BlockIcon>;
		ColorPalette: ComponentType<ColorPalette>;
		ColorPaletteControl: ComponentType<ColorPaletteControl>;
		CopyHandler: ComponentType<CopyHandler>;
		getColorClassName: getColorClassName;
		InspectorControls: InspectorControls;
		JustifyToolbar: ComponentType<JustifyToolbar>;
		MediaPlaceholder: ComponentType<MediaPlaceholder>;
		MediaUpload: ComponentType<MediaUpload>;
		PanelColorSettings: ComponentType<PanelColorSettings>;
		RichText: ComponentType<RichText>;
		InnerBlocks: InnerBlocks;
		useBlockDisplayInformation: useBlockDisplayInformation;
		useBlockProps: useBlockProps;
		useSetting: useSetting;
	}
}
