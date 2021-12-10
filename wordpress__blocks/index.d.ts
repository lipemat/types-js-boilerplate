declare module '@wordpress/blocks' {
	import {ReactElement} from 'react';
	import {iconType} from '@wordpress/components';
	import {blockCliendId} from '@wordpress/data';

	type dataTypes = 'null' | 'boolean' | 'object' | 'array' | 'number' | 'string' | 'integer';


	type AttributeShape = {
		type: dataTypes;
		source?: 'text' | 'html' | 'query' | 'attribute';
		default?: any;
		// jQuery selector of element to extract value from.
		selector?: string;
		// Tag to wrap each line when using "html" source and RichText with multiline prop.
		multiline?: string;
		// html attribute of selector element if using "attribute" source
		attribute?: string;
		// Extract array of values from markup using "selector" and attributes of html tags.
		query?: {
			[ key: string ]: {
				type: 'null' | 'boolean' | 'object' | 'array' | 'number' | 'string' | 'integer';
				source: 'text' | 'html' | 'query' | 'attribute' | 'meta';
				attribute: string;
			}
		}
		// When using array types, this defines subtypes.
		items?: {
			type: dataTypes
		}
		// When using object types, this defines subtypes.
		properties?: {
			[ key: string ]: {
				type: dataTypes
			}
		}
	};

	/**
	 * Shape and retrieval type for block data.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/
	 */
	export type BlockAttributes<Attr> = {
		[key in keyof Attr]: AttributeShape | Omit<AttributeShape, 'source'> & {
		// Special meta type with `meta` requirement.
		source: 'meta';
		// Meta key to store/retrieve data when using `source:'meta'`.
		meta: keyof Attr;
	}
	}

	export type BlockEditProps<Attr> = {
		className: string;
		setAttributes: ( newValue: {
			[attribute in keyof Attr]?: Attr[attribute]
		} ) => void;
		attributes: Attr
		isSelected: boolean
	}

	/**
	 * Block Variation shape.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
	 */
	export type BlockVariation<Attr = Object> = {
		name: string;
		title: string;
		description?: string;
		category?: string;
		icon?: Icon;
		isDefault?: boolean;
		attributes?: BlockAttributes<Attr>;
		innerBlocks?: subBlocks;
		example?: BlockExample<Attr>;
		scope?: Array<'block' | 'inserter' | 'transform'>;
		keywords?: string[];
		isActive?: ( ( attr: BlockAttributes<Attr>, variation: BlockAttributes<Attr> ) => boolean ) | Array<keyof Attr>;
	}

	/**
	 * Placeholder data for block previews/examples.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#example-optional
	 */
	export type BlockExample<Attr = Object> = {
		attributes: Attr;
		innerBlocks?: Array<{
			name: string;
			attributes: Object;
		}>;
	};

	/**
	 * Create block shape.
	 *
	 * @link https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
	 */
	export type CreateBlock<Attr = Object> = {
		attributes: Attr;
		clientId: string;
		innerBlocks: Array<CreateBlock>;
		isValid: boolean;
		name: string;
	}

	export type StyleVariation = {
		name: string;
		label: string;
		isDefault?: boolean;
	};

	/**
	 * Block transformations configuration.
	 *
	 * @since 1.7.0
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-transforms/
	 */
	export type Transforms<T, Attr> = {
		type: 'block';
		blocks: Array<string | '*'>;
		transform: ( attributes: T, innerBlocks: subBlocks ) => Array<CreateBlock<Attr>> | CreateBlock<Attr>;
		isMatch?: ( attributes: T, block: CreateBlock<Attr> ) => boolean;
		isMultiBlock?: boolean;
		priority?: number;
	}

	/**
	 * Transforms only available for `from`.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-transforms/
	 */
	export type TransformsFrom<Attr> = {
		type: 'enter';
		regExp: RegExp;
		transform: ( value: string ) => Array<CreateBlock<Attr>> | CreateBlock<Attr>;
		priority?: number;
	} | {
		type: 'files';
		transform: ( files: Array<string> ) => Array<CreateBlock<Attr>> | CreateBlock<Attr>;
		isMatch?: ( files: Array<string> ) => boolean;
		priority?: number;
	} | {
		type: 'prefix';
		transform: ( content: string ) => Array<CreateBlock<Attr>> | CreateBlock<Attr>;
		priority?: number;
	} | {
		type: 'raw';
		transform: ( node: Node ) => Array<CreateBlock<Attr>> | CreateBlock<Attr>;
		isMatch?: ( node: Node ) => boolean;
		schema?: Object | ( () => Object );
		selector?: string;
		priority?: number;
	} | {
		type: 'shortcode';
		tag: string | Array<string>;
		attributes: {
			[key in keyof Attr]: AttributeShape &
			{
				shortcode?: ( attr: Partial<Attr> ) => dataTypes;
			};
		};
		isMatch: ( attr: Partial<Attr> ) => boolean;
		priority?: number;
	}

	export type subBlocks = Array<[ string, Object, subBlocks? ]>;

	type Icon = iconType | {
		// Specifying a background color to appear with the icon e.g.: in the inserter.
		background?: string;
		// Specifying a color for the icon
		foreground?: string;
		// Specifying a dashicon for the block
		src: iconType;
	}

	export type BlockSettings<Attr, C = '', T = Attr> = {
		title: string;
		description?: string;
		category: 'text' | 'media' | 'design' | 'widgets' | 'embed' | 'reusable' | C
		// Svg | dashicon | configuration
		icon: Icon;
		keywords?: string[];
		styles?: Array<StyleVariation>;
		/**
		 * Only optional if registered on PHP side via `register_block_type_from_metadata`
		 *
		 * @link https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-metadata.md
		 */
		attributes?: BlockAttributes<Attr>;
		example?: BlockExample<Attr>;
		variations?: Array<BlockVariation<Attr>>;
		transforms?: {
			from?: Array<Transforms<T, Attr> | TransformsFrom<Attr>>;
			to?: Array<Transforms<T, Attr>>;
		};
		// Setting parent lets a block require that it is only available when nested within the specified blocks.
		parent?: string[];
		/**
		 * Features this block supports.
		 *
		 * @link https://developer.wordpress.org/block-editor/developers/block-api/block-supports/
		 */
		supports?: {
			align?: boolean | [ 'left' | 'right' | 'full' ]
			// Remove the support for wide alignment.
			alignWide?: boolean;
			// Anchors let you link directly to a specific block on a page. This property adds a field to define an id for the block, and a button to copy the direct link.
			anchor?: boolean;
			// False removes the support for the custom className.
			customClassName?: boolean;
			// False removes the support for the generated className.
			className?: boolean;
			/**
			 * Support color selections.
			 *
			 * @link https://developer.wordpress.org/block-editor/developers/block-api/block-supports/#color
			 */
			color?: {
				background: boolean; // Enable background color UI control.
				gradient: boolean; // Enable gradient color UI control.
				text: boolean; // Enable text color UI control.
			};
			/**
			 * Enable font size UI control.
			 *
			 * @link https://developer.wordpress.org/block-editor/developers/block-api/block-supports/#fontsize
			 */
			fontSize?: boolean;
			/**
			 * Enable line height UI control.
			 *
			 * @link https://developer.wordpress.org/block-editor/developers/block-api/block-supports/#lineheight
			 */
			lineHeight?: boolean;
			// Set to false to Remove support for an HTML mode.
			html?: boolean;
			// Set to false to Hide this block from the inserter.
			inserter?: boolean;
			// Set to false to Use the block just once per post
			multiple?: boolean;
			// Set to false to Don't allow the block to be converted into a reusable block.
			reusable?: boolean;
		}
		/**
		 * Display content in the editor and make and changes to data.
		 *
		 * https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
		 */
		edit: ( params: BlockEditProps<Attr> ) => ReactElement;
		/**
		 * Save the finished black markup to be rendered on the site.
		 * Return null to handle rendering on the PHP side.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
		 */
		save: ( params: { attributes: Attr } ) => ReactElement | null;
		// To opt into version 2 https://make.wordpress.org/core/2020/11/18/block-api-version-2/
		apiVersion?: 1 | 2
	};


	export type WPBlockSerializationOptions = {
		isInnerBlocks: boolean;
	}

	/**
	 * Create a block object from a block's configuration.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#createblock
	 */
	export function createBlock<Attr>( id: string, attributes: Attr, InnerBlocks?: Array<subBlocks> ): CreateBlock<Attr>;

	/**
	 * @link https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
	 */
	export function registerBlockType<Attr, C = ''>( id: string, settings: BlockSettings<Attr, C> ): void;

	/**
	 * Register a collection to allow organizing blocks into a section based on a plugin/theme/whatever.
	 *
	 * @link https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#block-collections
	 *
	 * @param namespace - Any blocks matching this namespace will automatically be included
	 *                    within this collection. e.g. "lipe"
	 * @param {Object} settings
	 */
	export function registerBlockCollection( namespace: string, settings: {
		title: string;
		icon?: Icon;
	} ): void;

	/**
	 * Registers a new block style variation for the given block.
	 *
	 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#block-style-variations
	 *
	 * @param {string} blockName      Name of block (example: “core/latest-posts”).
	 * @param {Object} styleVariation
	 */
	export function registerBlockStyle( blockName: string, styleVariation: StyleVariation ): void;

	/**
	 * Unregisters a block style variation for the given block.
	 *
	 * @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#block-style-variations
	 *
	 * @param {string} blockName - Name of block (example: “core/latest-posts”).
	 * @param {string} styleVariationName - Name of CSS class applied to the block.
	 */
	export function unregisterBlockStyle( blockName: string, styleVariationName: string ): void;

	/**
	 * Unregister a block from the editor.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#unregisterBlockType
	 */
	export function unregisterBlockType( blockName: string ): BlockSettings<object> | undefined;

	/**
	 * Registers a new block variation for an existing block type.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
	 *
	 * @param blockName - Name of the block (example: “core/columns”).
	 * @param variation - Object describing a block variation.
	 */
	export function registerBlockVariation<Attr>( blockName: string, variation: BlockVariation<Attr> ): void;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/#serialize
	 */
	export function serialize( blocks: Array<blockCliendId>, options?: WPBlockSerializationOptions ): string;

	/**
	 * Unregisters a block variation defined for an existing block type.
	 *
	 * @param blockName - Name of the block (example: “core/columns”).
	 * @param variationName - Name of the variation defined for the block.
	 */
	export function unregisterBlockVariation( blockName: string, variationName: string ): void;

	export default interface Blocks {
		createBlock: typeof createBlock;
		registerBlockCollection: typeof registerBlockCollection;
		registerBlockStyle: typeof registerBlockStyle;
		registerBlockType: typeof registerBlockType;
		unregisterBlockStyle: typeof unregisterBlockStyle;
		registerBlockVariation: typeof registerBlockVariation;
		serialize: typeof serialize;
		unregisterBlockType: typeof unregisterBlockType;
		unregisterBlockVariation: typeof unregisterBlockVariation;
	}
}
