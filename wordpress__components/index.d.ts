/**
 * Definitions for the `@wordpress/components` package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/components/
 */
declare module '@wordpress/components' {
	import {
		ButtonHTMLAttributes,
		ChangeEvent,
		ComponentType,
		CSSProperties,
		HTMLAttributes,
		InputHTMLAttributes,
		KeyboardEvent,
		MouseEvent,
		MutableRefObject,
		PropsWithChildren,
		ReactElement,
		ReactNode,
		SelectHTMLAttributes,
		SVGProps,
		TextareaHTMLAttributes,
	} from 'react';
	import {Status} from '@wordpress/notices';
	import {BlockIcon} from '@wordpress/blocks';
	import DropEvent = JQuery.DropEvent;

	/**
	 * @link https://developer.wordpress.org/block-editor/components/button/
	 */
	type ButtonParams = {
		children?: ReactNode;
		className?: string;
		disabled?: boolean;
		focus?: boolean;
		icon?: WPBlockTypeIconRender;
		iconSize?: number;
		iconPosition?: 'left' | 'right';
		isBusy?: boolean;
		isDestructive?: boolean;
		isLink?: boolean;
		isPressed?: boolean;
		isPrimary?: boolean;
		isSecondary?: boolean;
		isSmall?: boolean;
		isTertiary?: boolean;
		label?: ReactNode;
		shortcut?: shortcutText;
		showTooltip?: boolean;
		text?: string;
		tooltipPosition?: tooltipPosition;
		variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
	}

	export type colorOptions = Array<{
		color: string;
		name: string;
		slug?: string;
	}>;

	export type Control = ButtonButton & {
		isDisabled?: boolean;
		role?: 'menuitemcheckbox' | 'menuitemradio';
		title?: string;
	}

	/**
	 * Dashicon slug or react element which renders a SVG.
	 * like the @wordpress/icons package.
	 */
	export type WPBlockTypeIconRender = BlockIcon | ReactElement | null;

	/**
	 * List of all availble Dashicons.
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/dashicon/types.ts
	 */
	export type iconType =
		| 'admin-appearance'
		| 'admin-collapse'
		| 'admin-comments'
		| 'admin-customizer'
		| 'admin-generic'
		| 'admin-home'
		| 'admin-links'
		| 'admin-media'
		| 'admin-multisite'
		| 'admin-network'
		| 'admin-page'
		| 'admin-plugins'
		| 'admin-post'
		| 'admin-settings'
		| 'admin-site-alt'
		| 'admin-site-alt2'
		| 'admin-site-alt3'
		| 'admin-site'
		| 'admin-tools'
		| 'admin-users'
		| 'airplane'
		| 'album'
		| 'align-center'
		| 'align-full-width'
		| 'align-left'
		| 'align-none'
		| 'align-pull-left'
		| 'align-pull-right'
		| 'align-right'
		| 'align-wide'
		| 'amazon'
		| 'analytics'
		| 'archive'
		| 'arrow-down-alt'
		| 'arrow-down-alt2'
		| 'arrow-down'
		| 'arrow-left-alt'
		| 'arrow-left-alt2'
		| 'arrow-left'
		| 'arrow-right-alt'
		| 'arrow-right-alt2'
		| 'arrow-right'
		| 'arrow-up-alt'
		| 'arrow-up-alt2'
		| 'arrow-up'
		| 'arrow-up-duplicate'
		| 'art'
		| 'awards'
		| 'backup'
		| 'bank'
		| 'beer'
		| 'bell'
		| 'block-default'
		| 'book-alt'
		| 'book'
		| 'buddicons-activity'
		| 'buddicons-bbpress-logo'
		| 'buddicons-buddypress-logo'
		| 'buddicons-community'
		| 'buddicons-forums'
		| 'buddicons-friends'
		| 'buddicons-groups'
		| 'buddicons-pm'
		| 'buddicons-replies'
		| 'buddicons-topics'
		| 'buddicons-tracking'
		| 'building'
		| 'businessman'
		| 'businessperson'
		| 'businesswoman'
		| 'button'
		| 'calculator'
		| 'camera-alt'
		| 'car'
		| 'calendar-alt'
		| 'calendar'
		| 'camera'
		| 'carrot'
		| 'cart'
		| 'category'
		| 'chart-area'
		| 'chart-bar'
		| 'chart-line'
		| 'chart-pie'
		| 'clipboard'
		| 'clock'
		| 'cloud-saved'
		| 'cloud-upload'
		| 'cloud'
		| 'columns'
		| 'code-standards'
		| 'coffee'
		| 'color-picker'
		| 'controls-back'
		| 'controls-forward'
		| 'controls-pause'
		| 'controls-play'
		| 'controls-repeat'
		| 'controls-skipback'
		| 'controls-skipforward'
		| 'controls-volumeoff'
		| 'controls-volumeon'
		| 'cover-image'
		| 'dashboard'
		| 'database'
		| 'database-add'
		| 'database-export'
		| 'database-import'
		| 'database-remove'
		| 'database-view'
		| 'desktop'
		| 'dismiss'
		| 'download'
		| 'drumstick'
		| 'edit'
		| 'edit-large'
		| 'edit-page'
		| 'editor-aligncenter'
		| 'editor-alignleft'
		| 'editor-alignright'
		| 'editor-bold'
		| 'editor-break'
		| 'editor-code'
		| 'editor-code-duplicate'
		| 'editor-contract'
		| 'editor-customchar'
		| 'editor-expand'
		| 'editor-help'
		| 'editor-indent'
		| 'editor-insertmore'
		| 'editor-italic'
		| 'editor-justify'
		| 'editor-kitchensink'
		| 'editor-ltr'
		| 'editor-ol-rtl'
		| 'editor-ol'
		| 'editor-outdent'
		| 'editor-paragraph'
		| 'editor-paste-text'
		| 'editor-paste-word'
		| 'editor-quote'
		| 'editor-removeformatting'
		| 'editor-rtl'
		| 'editor-spellcheck'
		| 'editor-strikethrough'
		| 'editor-table'
		| 'editor-textcolor'
		| 'editor-ul'
		| 'editor-underline'
		| 'editor-unlink'
		| 'editor-video'
		| 'ellipsis'
		| 'email-alt'
		| 'email-alt2'
		| 'email'
		| 'embed-audio'
		| 'embed-generic'
		| 'embed-photo'
		| 'embed-post'
		| 'embed-video'
		| 'excerpt-view'
		| 'exit'
		| 'external'
		| 'facebook-alt'
		| 'facebook'
		| 'feedback'
		| 'filter'
		| 'flag'
		| 'food'
		| 'format-aside'
		| 'format-audio'
		| 'format-chat'
		| 'format-gallery'
		| 'format-image'
		| 'format-quote'
		| 'format-status'
		| 'format-video'
		| 'forms'
		| 'fullscreen-alt'
		| 'fullscreen-exit-alt'
		| 'games'
		| 'google'
		| 'googleplus'
		| 'grid-view'
		| 'groups'
		| 'hammer'
		| 'heading'
		| 'heart'
		| 'hidden'
		| 'hourglass'
		| 'html'
		| 'id-alt'
		| 'id'
		| 'image-crop'
		| 'image-filter'
		| 'image-flip-horizontal'
		| 'image-flip-vertical'
		| 'image-rotate-left'
		| 'image-rotate-right'
		| 'image-rotate'
		| 'images-alt'
		| 'images-alt2'
		| 'index-card'
		| 'info-outline'
		| 'info'
		| 'insert-after'
		| 'insert-before'
		| 'insert'
		| 'instagram'
		| 'keyboard-hide'
		| 'laptop'
		| 'layout'
		| 'leftright'
		| 'lightbulb'
		| 'list-view'
		| 'linkedin'
		| 'location-alt'
		| 'location'
		| 'lock-duplicate'
		| 'lock'
		| 'marker'
		| 'media-archive'
		| 'media-audio'
		| 'media-code'
		| 'media-default'
		| 'media-document'
		| 'media-interactive'
		| 'media-spreadsheet'
		| 'media-text'
		| 'media-video'
		| 'megaphone'
		| 'menu-alt'
		| 'menu-alt2'
		| 'menu-alt3'
		| 'menu'
		| 'money-alt'
		| 'microphone'
		| 'migrate'
		| 'minus'
		| 'money'
		| 'move'
		| 'nametag'
		| 'networking'
		| 'no-alt'
		| 'no'
		| 'open-folder'
		| 'palmtree'
		| 'paperclip'
		| 'performance'
		| 'pets'
		| 'pdf'
		| 'phone'
		| 'pinterest'
		| 'playlist-audio'
		| 'playlist-video'
		| 'plus-alt'
		| 'plus-light'
		| 'plus'
		| 'portfolio'
		| 'post-status'
		| 'pressthis'
		| 'products'
		| 'plugins-checked'
		| 'plus-alt2'
		| 'podio'
		| 'printer'
		| 'privacy'
		| 'randomize'
		| 'reddit'
		| 'redo'
		| 'remove'
		| 'rest-api'
		| 'rss'
		| 'saved'
		| 'schedule'
		| 'screenoptions'
		| 'search'
		| 'share-alt'
		| 'share-alt2'
		| 'share'
		| 'shield-alt'
		| 'shield'
		| 'shortcode'
		| 'slides'
		| 'smartphone'
		| 'smiley'
		| 'sort'
		| 'sos'
		| 'star-empty'
		| 'star-filled'
		| 'star-half'
		| 'sticky'
		| 'store'
		| 'spotify'
		| 'superhero'
		| 'superhero-alt'
		| 'table-col-after'
		| 'table-col-before'
		| 'table-col-delete'
		| 'table-row-after'
		| 'table-row-before'
		| 'table-row-delete'
		| 'tablet'
		| 'tag'
		| 'tagcloud'
		| 'testimonial'
		| 'text'
		| 'text-page'
		| 'thumbs-down'
		| 'thumbs-up'
		| 'tickets-alt'
		| 'tickets'
		| 'tide'
		| 'translation'
		| 'trash'
		| 'twitch'
		| 'twitter'
		| 'twitter-alt'
		| 'undo'
		| 'universal-access-alt'
		| 'universal-access'
		| 'unlock'
		| 'update-alt'
		| 'update'
		| 'upload'
		| 'vault'
		| 'video-alt'
		| 'video-alt2'
		| 'video-alt3'
		| 'visibility'
		| 'warning'
		| 'welcome-add-page'
		| 'welcome-comments'
		| 'welcome-learn-more'
		| 'welcome-view-site'
		| 'welcome-widgets-menus'
		| 'welcome-write-blog'
		| 'whatsapp'
		| 'wordpress-alt'
		| 'wordpress'
		| 'xing'
		| 'yes-alt'
		| 'yes'
		| 'youtube';

	type shortcutText = string | {
		display: string;
		ariaLabel: string;
	};

	type tooltipPosition = 'top left' | 'top right' | 'top-center' | 'bottom left' | 'bottom right' | 'bottom center';

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/base-control/
	 */
	interface BaseControl {
		id: string;
		label?: string;
		hideLabelFromVision?: boolean;
		help?: string | ReactNode;
		className?: string;
		children: ReactNode;
	}

	// If href is set, we get a link.
	interface ButtonLink extends ButtonParams, Omit<Partial<HTMLLinkElement>, 'className' | 'children' | 'focus'> {
		href: string;
		target?: string;
		onClick?: ( ev: MouseEvent<HTMLLinkElement> ) => void;
	}

	// If href is not set, we get a button.
	interface ButtonButton extends ButtonParams, Omit<Partial<HTMLButtonElement>, 'className' | 'children' | 'focus'> {
		onClick?: ( ev: MouseEvent<HTMLButtonElement> ) => void;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/checkbox-control/
	 */
	interface CheckboxControl extends Omit<InputHTMLAttributes<{}>, 'onChange'> {
		heading?: string;
		label?: ReactNode;
		help?: ReactNode;
		checked: boolean;
		className?: string,
		onChange: ( currentValue: boolean ) => void;
	}

	interface ColorPalette {
		className?: string;
		clearable?: boolean;
		disableCustomColors: boolean;
		label: ReactNode;
		onChange: ( currentValue: string ) => void;
		value: string;
	}

	interface ColorPicker {
		className: string;
		copyFormat: 'hex' | 'hsl' | 'rgb';
		/** @deprecated **/
		defaultValue: string;
		disableAlpha: boolean;
		enableAlpha: boolean;
		onChange: ( hex8Color: string ) => void;
		/** @deprecated **/
		onChangeComplete: ( currentValue: string ) => void;
	}

	interface Dashicon extends HTMLAttributes<{}> {
		icon: iconType;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/drop-zone/
	 */
	interface DropZone {
		className?: string;
		label?: string;
		onFilesDrop?: ( files: File[] ) => void;
		onHTMLDrop?: ( html: string ) => void;
		onDrop?: ( ev: DropEvent ) => void;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/slot-fill/#props
	 */
	export interface Fill {
		name: string;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/form-file-upload/
	 */
	export interface FormFileUpload extends ButtonParams {
		accept?: string;
		icon?: WPBlockTypeIconRender;
		multiple?: boolean;
		onChange?: ( ev: ChangeEvent<HTMLInputElement> ) => void;
		render?: ( args: { openFileDialog: () => void } ) => ReactNode;
	}

	interface Grid {
		align?: CSSProperties['alignItems'];
		/**
		 * Adjusts the horizontal and vertical alignment of children.
		 */
		alignment?:
			'bottom'
			| 'bottomLeft'
			| 'bottomRight'
			| 'center'
			| 'edge'
			| 'left'
			| 'right'
			| 'stretch'
			| 'top'
			| 'topLeft'
			| 'topRight';
		/**
		 * Adjusts the number of columns of the `Grid`.
		 *
		 * @default 2
		 */
		columns?: Array<number | undefined> | number;
		/**
		 * Adjusts the `grid-column-gap`.
		 */
		columnGap?: CSSProperties['gridColumnGap'];
		/**
		 * Changes the CSS display from `grid` to `inline-grid`.
		 */
		isInline?: boolean;
		/**
		 * Gap between each child.
		 *
		 * @default 3
		 */
		gap?: number;
		/**
		 * Adjusts the inline alignment of children.
		 */
		justify?: CSSProperties['justifyContent'];
		/**
		 * Adjusts the `grid-row-gap`.
		 */
		rowGap?: CSSProperties['gridRowGap'];
		/**
		 * Adjusts the number of rows of the `Grid`.
		 */
		rows?: Array<number | undefined> | number;
		/**
		 * Adjusts the CSS grid `template-columns`.
		 */
		templateColumns?: CSSProperties['gridTemplateColumns'];
		/**
		 * Adjusts the CSS grid `template-rows`.
		 */
		templateRows?: CSSProperties['gridTemplateRows'];
	}

	interface Guide {
		onFinish: () => void;
		children: ComponentType<GuidePage>[];
	}

	interface GuidePage {
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/keyboard-shortcuts/
	 */
	interface KeyboardShortcuts {
		bindGlobal?: boolean;
		children?: ReactNode[] | ReactNode;
		eventName?: string;
		shortcuts: {
			[ command: string ]: ( event: KeyboardEvent & {
				returnValue: boolean;
			}, command: string ) => void
		};
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/notice/#props
	 */
	interface Notice {
		spokenMessage?: string;
		status?: Status;
		onRemove?: () => void;
		politeness?: 'assertive' | 'polite';
		isDismissible?: boolean;
		onDismiss?: () => void;
		actions?: Array<{
			label: ReactElement;
			url?: string;
			onClick?: () => void;
			className?: string;
			neDefaultClasses?: boolean;
			variant?: 'primary';
		}>;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/panel/#panelbody
	 */
	interface PanelBody {
		title?: string;
		initialOpen?: boolean;
		icon?: string;
		children?: ReactNode[] | ReactNode;
		buttonProps?: ButtonHTMLAttributes<{}>;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/panel/#panelrow
	 */
	interface PanelRow {
		className?: string;
		ref?: MutableRefObject<any>;
	}

	interface Path extends SVGProps<SVGPathElement> {

	}
	
	/**
	 * Gives a block a border an makes it occupy the minimum standard
	 * amount of space.
	 *
	 * @link https://github.com/WordPress/gutenberg/tree/master/packages/components/src/placeholder
	 */
	interface Placeholder extends HTMLAttributes<HTMLDivElement> {
		icon?: iconType | JSX.Element;
		label?: ReactNode;
		instructions?: ReactNode;
		isColumnLayout?: boolean;
		notices?: ReactNode;
		preview?: ReactNode;
	}

	/**
	 * Floating tooltip of any content type.
	 *
	 * @link https://github.com/WordPress/gutenberg/tree/master/packages/components/src/popover
	 */
	export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
		focusOnMount?: 'firstElement' | 'container' | boolean;
		position?:
			'bottom left'
			| 'bottom center'
			| 'bottom right'
			| 'middle left'
			| 'middle center'
			| 'middle right'
			| 'top left'
			| 'top center'
			| 'top right';
		onClose?: ( ev: MouseEvent<HTMLButtonElement> ) => void;
		onFocusOutside?: ( ev: MouseEvent<HTMLButtonElement> ) => void;
		expandOnMobile?: boolean;
		headerTitle?: string;
		noArrow?: boolean;
		anchorRef?: MutableRefObject<any>;
		getAnchorRect?: ( ref: MutableRefObject<any> ) => MutableRefObject<any>;
	}

	/**
	 * @link https://github.com/WordPress/gutenberg/tree/master/packages/components/src/radio-control
	 */
	interface RadioControl extends Omit<InputHTMLAttributes<{}>, 'onChange'> {
		selected: string | number;
		options: Array<{
			label: string;
			value: string | number;
		}>;
		label?: ReactNode;
		help?: ReactNode;
		onChange?: ( value: string ) => void;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/range-control/#props
	 */
	interface RangeControl {
		onChange: ( value: number ) => void;
		value: number;
		afterIcon?: iconType;
		allowReset?: boolean;
		beforeIcon?: iconType;
		disabled?: boolean;
		help?: ReactNode;
		icon?: iconType;
		initialPosition?: number;
		isShiftStepEnabled?: number;
		label?: string;
		marks?: boolean | Array<{
			value: number;
			label: string;
		}>;
		min?: number;
		max?: number;
		railColor?: string;
		renderTooltipContent?: ( value: number ) => ReactNode;
		resetFallbackValue?: number;
		separatorType?: 'none' | 'fullWidth' | 'topFullWidth';
		showTooltip?: boolean;
		step?: number | 'any';
		shiftStep?: number;
		trackColor?: string;
		type?: 'slider' | 'stepper';
		withInputField?: boolean;
	}

	interface SelectControl extends Omit<SelectHTMLAttributes<{}>, 'onChange'> {
		help?: ReactNode;
		label?: ReactNode;
		multiple?: boolean;
		value: string | number;
		onChange: ( currentValue: string ) => void;
		options: Array<{
			label: string;
			value: string | number;
			disabled?: boolean
		}>;
		className?: string,
		hideLabelFromVision?: boolean
	}

	/**
	 * Seach box and icon.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/search-control/
	 */
	interface SearchControl {
		className?: string;
		help?: string | ReactNode;
		hideLabelFromVision?: boolean;
		label: string;
		onChange?: ( value: string ) => void;
		onClose?: () => void;
		onKeyDown?: ( event: KeyboardEvent<HTMLInputElement> ) => void;
		placeholder?: string;
		value: string;
	}

	/**
	 * @deprecated in favor of @wordpress/server-side-render
	 */
	export interface ServerSideRender<A = object, U = object> {
		block: string;
		attributes?: A;
		className?: string;
		httpMethod?: 'GET' | 'POST';
		urlQueryArgs?: U;
	}

	interface Shortcut extends HTMLSpanElement {
		shortcut?: shortcutText;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/slot-fill/#props
	 */
	interface Slot {
		bubblesVirtually?: boolean;
		children?: ( fills: ReactNode[] ) => ReactNode;
		className?: string;
		name: string;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/spinner/
	 */
	interface Spinner {
		className?: string;
	}

	interface SVG extends SVGProps<SVGSVGElement> {

	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/toggle-control/
	 */
	interface ToggleControl extends Omit<InputHTMLAttributes<{}>, 'onChange'> {
		checked?: boolean;
		className?: string,
		disabled?: boolean;
		help?: ReactNode;
		label?: ReactNode;
		onChange: ( currentValue: boolean ) => void;
	}

	interface ToolbarButton extends ButtonButton {
		containerClassName?: string;
		title?: string;
		isActive?: boolean;
		isDisabled?: boolean;
	}

	interface ToolbarGroup {
		className: string;
		controls?: Array<Control>;
		isCollapsed: boolean;
		title: string;
	}

	interface Tooltip {
		text?: string;
		position?: tooltipPosition;
		shortcut?: shortcutText;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
	 */
	interface TextControl extends Omit<InputHTMLAttributes<{}>, 'onChange'> {
		className?: string,
		help?: ReactNode;
		hideLabelFromVision?: boolean
		label?: ReactNode;
		onChange: ( currentValue: string ) => void;
		type?: string;
		value: string | number;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/textarea-control/
	 */
	interface TextareaControl extends Omit<TextareaHTMLAttributes<{}>, 'onChange'> {
		className?: string,
		help?: ReactNode;
		hideLabelFromVision?: boolean
		label?: ReactNode;
		onChange: ( currentValue: string ) => void;
		rows?: number;
		value: string | number;
	}


	/**
	 * Truncate is a typography primitive that trims text content.
	 * For almost all cases, it is recommended that Text or Heading is used to render text content.
	 *
	 * However, Truncate is available for custom implementations.
	 */
	interface Truncate {
		// The ellipsis string when truncate is set.
		ellipsis?: string;
		// Determines where to truncate. For example, we can truncate text right in the middle. To do this, we need to set ellipsizeMode to middle and a text limit.
		ellipsizeMode?: 'auto' | 'head' | 'middle' | 'tail';
		// Determines the max characters when truncate is set.
		limit?: number;
		// Clamps the text content to the specifiec numberOfLines, adding the ellipsis at the end.
		numberOfLines?: number;
	}

	/**
	 * Allows replacement of a component using a filter.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/with-filters/
	 *
	 * @param hook
	 */
	export function withFilters( hook: string ): ( component: ComponentType ) => void;

	export interface withSpokenMessages {
		speak?: ( message: string, ariaLive?: 'polite' | 'assertive' ) => void;
		debouncedSpeak?: ( message: string, ariaLive?: 'polite' | 'assertive' ) => void;
	}

	export const BaseControl: ComponentType<BaseControl>;
	export const Button: ComponentType<ButtonLink | ButtonButton>;
	export const CheckboxControl: ComponentType<CheckboxControl>;
	export const ColorPalette: ComponentType<ColorPalette>;
	export const ColorPicker: ComponentType<ColorPicker>;
	export const Dashicon: ComponentType<Dashicon>;
	export const DropZone: ComponentType<DropZone>;
	export const Fill: ComponentType<Fill>;
	export const FormFileUpload: ComponentType<FormFileUpload>;
	export const Grid: ComponentType<Grid>;
	export const Guide: ComponentType<Guide>;
	export const GuidePage: ComponentType<GuidePage>;
	export const KeyboardShortcuts: ComponentType<KeyboardShortcuts>;
	export const Notice: ComponentType<Notice>;
	export const PanelBody: ComponentType<PanelBody>;
	export const PanelRow: ComponentType<PanelRow>;
	export const Path: ComponentType<Path>;
	export const Placeholder: ComponentType<Placeholder>;
	export const Popover: ComponentType<PopoverProps>;
	export const RadioControl: ComponentType<PropsWithChildren<RadioControl>>;
	export const RangeControl: ComponentType<RangeControl>;
	export const SelectControl: ComponentType<SelectControl>;
	export const SearchControl: ComponentType<SearchControl>;
	export const ServerSideRender: ComponentType<ServerSideRender>;
	export const Shortcut: ComponentType<Shortcut>;
	export const Slot: ComponentType<Slot>;
	export const Spinner: ComponentType<Spinner>;
	export const SVG: ComponentType<SVG>;
	export const TextControl: ComponentType<TextControl>;
	export const TextareaControl: ComponentType<TextareaControl>;
	export const ToggleControl: ComponentType<ToggleControl>;
	export const ToolbarButton: ComponentType<ToolbarButton>;
	export const ToolbarGroup: ComponentType<ToolbarGroup>;
	export const Tooltip: Tooltip;
	export const Truncate: Truncate;

	export default interface Components {
		BaseControl: ComponentType<BaseControl>;
		Button: ComponentType<ButtonLink | ButtonButton>;
		CheckboxControl: ComponentType<CheckboxControl>;
		ColorPalette: ComponentType<ColorPalette>;
		ColorPicker: ComponentType<ColorPicker>;
		Dashicon: ComponentType<Dashicon>;
		DropZone: ComponentType<DropZone>;
		Fill: ComponentType<Fill>;
		FormFileUpload: ComponentType<FormFileUpload>;
		Grid: ComponentType<Grid>;
		Guide: ComponentType<Guide>;
		GuidePage: ComponentType<GuidePage>;
		KeyboardShortcuts: ComponentType<KeyboardShortcuts>;
		Notice: ComponentType<Notice>;
		PanelBody: ComponentType<PanelBody>;
		PanelRow: ComponentType<PanelRow>;
		Path: ComponentType<Path>;
		Placeholder: ComponentType<Placeholder>;
		Popover: ComponentType<PopoverProps>;
		RadioControl: ComponentType<PropsWithChildren<RadioControl>>;
		RangeControl: ComponentType<RangeControl>;
		SelectControl: ComponentType<SelectControl>;
		SearchControl: ComponentType<SearchControl>;
		ServerSideRender: ComponentType<ServerSideRender>;
		Shortcut: ComponentType<Shortcut>;
		Slot: ComponentType<Slot>;
		Spinner: ComponentType<Spinner>;
		SVG: ComponentType<SVG>;
		TextControl: ComponentType<TextControl>;
		TextareaControl: ComponentType<TextareaControl>;
		ToggleControl: ComponentType<ToggleControl>;
		ToolbarButton: ComponentType<ToolbarButton>;
		ToolbarGroup: ComponentType<ToolbarGroup>;
		Tooltip: ComponentType<Tooltip>;
		Truncate: Truncate;
		withFilters: typeof withFilters;
	}
}
