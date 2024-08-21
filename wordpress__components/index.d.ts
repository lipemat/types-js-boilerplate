/**
 * Definitions for the `@wordpress/components` package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/components/
 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__components/index.d.ts
 */
declare module '@wordpress/components' {
	import {ComponentType} from '@lipemat/js-boilerplate/helpers';
	import {AriaRole, ButtonHTMLAttributes, ChangeEvent, Context, CSSProperties, type DetailedHTMLProps, HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes, KeyboardEvent, KeyboardEventHandler, MouseEvent, MouseEventHandler, MutableRefObject, PropsWithChildren, ReactElement, ReactNode, type Ref, SelectHTMLAttributes, SVGProps, SyntheticEvent, TextareaHTMLAttributes, TouchEvent} from 'react';
	import {Status} from '@wordpress/notices';
	import DropEvent = JQuery.DropEvent;
	import ClickEvent = JQuery.ClickEvent;

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
		ref?: Ref<HTMLButtonElement>;
		shortcut?: shortcutText;
		showTooltip?: boolean;
		// Available in WP 6.3+.
		size?: 'small' | 'compact' | 'default';
		style?: CSSProperties;
		text?: string;
		tooltipPosition?: TooltipPosition;
		variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/color-indicator/
	 */
	interface ColorIndicator {
		className?: string;
		colorValue: CSSProperties[ 'background' ];
	}


	export type ColorOption = {
		color: string;
		name: string;
		slug?: string;
	}

	export type DragDirection = 'n' | 's' | 'e' | 'w';

	export type GradientOption = {
		gradient: string;
		name: string;
		slug: string;
	};

	export type LabelPosition = 'top' | 'bottom' | 'side' | 'edge';

	export type TimeInputValue = {
		hours: number;
		minutes: number;
	};

	export type VirtualElement = Pick<Element, 'getBoundingClientRect'> & {
		ownerDocument?: Document;
	};

	/**
	 * Gradient picker component
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/gradient-picker/
	 */
	export interface GradientPicker {
		className?: string;
		// If provided, will render swatches.
		clearable?: boolean;
		disableCustomGradients?: boolean;
		gradients?: GradientOption[];
		onChange: ( value: string ) => void;
		value?: string | null;
	}

	export type Control = ButtonButton & {
		isDisabled?: boolean;
		role?: 'menuitemcheckbox' | 'menuitemradio';
		title?: string;
	}

	/**
	 * Create a Slot and Fill pair.
	 *
	 * @link https://github.dev/WordPress/gutenberg/blob/trunk/packages/components/src/slot-fill/slot.js
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/slot-fill/
	 */
	export function createSlotFill( name: string ): {
		Fill: typeof Fill;
		Slot: typeof Slot;
	}

	/**
	 * Dashicon slug or react element, which renders a SVG.
	 * like the @wordpress/icons package.
	 */
	export type WPBlockTypeIconRender =
		iconType
		| SVGProps<SVGSVGElement>
		| ComponentType<{ size?: number }>
		| ReactElement
		| null;

	export type FocusOnMount = 'firstElement' | 'container' | boolean;

	/**
	 * List of all available Dashicons.
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


	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/icon/
	 */
	export function Icon<T extends WPBlockTypeIconRender>( props: {
			icon: T;
			size?: number;
		} & (
			T extends iconType ? DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> :
				T extends ComponentType<{ size: number }> ? {} :
					T extends SVGProps<SVGSVGElement> ? SVGProps<SVGSVGElement> : {} )
	): ReactElement<any, any>;


	type shortcutText = string | {
		display: string;
		ariaLabel: string;
	};

	type TooltipPosition =
		'top'
		| 'bottom'
		| 'left'
		| 'center'
		| 'right'
		| 'top left'
		| 'top right'
		| 'top center'
		| 'bottom left'
		| 'bottom right'
		| 'bottom center';

	type Placement =
		'top'
		| 'top-start'
		| 'top-end'
		| 'right'
		| 'right-start'
		| 'right-end'
		| 'bottom'
		| 'bottom-start'
		| 'bottom-end'
		| 'left'
		| 'left-start'
		| 'left-end'

	type PositionYAxis = 'top' | 'middle' | 'bottom';
	type PositionXAxis = 'left' | 'center' | 'right';
	type PositionCorner = 'top' | 'right' | 'bottom' | 'left';

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

	/**
	 * @link https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/block-popover/README.md
	 */
	interface BlockPopover {
		clientId: string;
		bottomClientId?: string;
		shift?: boolean;
	}

	// If href is set, we get a link.
	interface ButtonLink extends ButtonParams, Omit<Partial<HTMLLinkElement>, 'className' | 'children' | 'focus' | 'style'> {
		href: string;
		target?: string;
		onClick?: ( ev: MouseEvent<HTMLLinkElement> ) => void;
	}

	// If href is not set, we get a button.
	interface ButtonButton extends ButtonParams, Omit<Partial<HTMLButtonElement>, 'className' | 'children' | 'focus' | 'style'> {
		onClick?: ( ev: MouseEvent<HTMLButtonElement> ) => void;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/checkbox-control/
	 */
	interface CheckboxControl extends Omit<InputHTMLAttributes<{}>, 'onChange'> {
		label?: ReactNode;
		help?: ReactNode;
		checked: boolean;
		className?: string,
		onChange: ( currentValue: boolean ) => void;
		indeterminate?: boolean;
	}

	/**
	 * Display a swatch, which opens the ColorPicker
	 * and displays the selected value and color.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/color-palette/
	 *
	 * @see @wordpress/block-editor.PanelColorSettings
	 */
	interface ColorPalette {
		className?: string;
		clearable?: boolean;
		colors?: ColorOption[];
		disableCustomColors?: boolean;
		label?: ReactNode;
		onChange: ( currentValue: string ) => void;
		value?: string;
	}

	/**
	 * Part of a color picker, which allows picking the color.
	 * Does not contain input of buttons for triggering or
	 * displaying selected value.
	 *
	 * @see ColorPalette
	 * @see ColorEdit in packages/block-editor/src/hooks/color.js for retrieving
	 *      and saving color values.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/color-picker/
	 */
	interface ColorPicker {
		className?: string;
		color?: string;
		copyFormat?: 'hex' | 'hsl' | 'rgb';
		enableAlpha?: boolean;
		onChange?: ( hex8Color: string ) => void;
	}

	/**
	 * Combobox Control
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/combobox-control/
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/combobox-control/types.ts
	 */
	export function ComboboxControl<T extends string>( props: {
		allowReset?: boolean;
		className?: string;
		help?: string | ReactNode;
		hideLabelFromVision?: boolean;
		label?: string | ReactNode;
		messages?: {
			selected: string;
		};
		onChange: ( currentValue: T | null ) => void;
		onFilterValueChange?: ( value: string ) => void;
		options: Array<{
			label: string;
			value: T;
			disabled?: boolean
		}>;
		value?: T | null;
	}): ReactElement<any, any> | null;
	

	interface Dashicon extends HTMLAttributes<{}> {
		icon: iconType;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/date-time/
	 */
	interface DateTimePicker extends DatePicker {
		is12Hour?: boolean;
	}

	/**
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/date-time/date/index.tsx
	 */
	interface DatePicker {
		currentDate?: Date | string | number | null;
		onChange?: ( date: string | null ) => void;
		isInvalidDate?: ( date: Date ) => boolean;
		onMonthPreviewed?: ( date: Date ) => void;
		events?: Array<{
			date: Date;
		}>;
		startOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/disabled/
	 */
	type Disabled = ComponentType<{
		isDisabled: boolean;
	}> & {
		Context: Context<boolean>;
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
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/dropdown/#props
	 */
	interface Dropdown {
		className?: string;
		contentClassName?: string;
		defaultOpen?: boolean;
		expandOnMobile?: boolean;
		focusOnMount?: FocusOnMount;
		headerTitle?: string;
		onClose?: () => void;
		onToggle?: ( willOpen: boolean ) => void;
		open?: boolean;
		popoverProps?: PopoverProps;
		position?: TooltipPosition;
		renderContent: ( args: Dropdown['renderToggle'] ) => ReactNode;
		renderToggle: ( args: {
			isOpen: boolean;
			onToggle: () => void;
			onClose: () => void;
		} ) => ReactNode;
		style?: CSSProperties;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/dropdown-menu/#props
	 */
	interface DropdownMenu {
		children?: ( args: Dropdown['renderToggle'] ) => ReactNode;
		className?: string;
		controls?: Control[];
		defaultOpen?: boolean;
		disableOpenOnArrowDown?: boolean;
		icon?: iconType;
		label: string;
		menuProps?: Dropdown;
		noIcons?: boolean;
		onToggle?: ( willOpen: boolean ) => void;
		open?: boolean;
		popoverProps?: PopoverProps;
		role?: HTMLAttributes<HTMLElement>[ 'role' ];
		text?: string;
		toggleProps?: ButtonButton;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/slot-fill/#props
	 */
	export function Fill<P = {}, N extends string = string>( props: {
		children?: ReactNode | ( ( fillProps: P ) => ReactNode )
		name?: N;
	}, context?: any ): ReactElement<any, any> | null;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/form-file-upload/
	 */
	export interface FormFileUpload extends ButtonParams {
		accept?: InputHTMLAttributes<HTMLInputElement>[ 'accept' ];
		// Children are rendered inside a button if `render` is not provided.
		children?: ReactNode;
		icon?: WPBlockTypeIconRender;
		multiple?: InputHTMLAttributes<HTMLInputElement>[ 'multiple' ];
		onChange?: ( ev: ChangeEvent<HTMLInputElement> ) => void;
		onClick?: ( ev: ClickEvent<HTMLInputElement> ) => void;
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
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/menu-group/#props
	 */
	interface MenuGroup {
		className?: string;
		hideSeparator?: boolean;
		label?: string;
		children?: ReactNode;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/menu-item/#props
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/button/types.ts
	 */
	type MenuItem = ButtonButton | ButtonLink & {
		className?: string;
		children?: ReactNode;
		info?: string;
		icon?: ButtonParams[ 'icon' ];
		iconPosition?: ButtonParams[ 'iconPosition' ];
		/**
		 * Whether the menu item is currently selected, `isSelected` is only taken into
		 * account when the `role` prop is either `"menuitemcheckbox"` or `"menuitemradio"`.
		 */
		isSelected?: boolean;
		label?: string;
		/**
		 * If you need to have selectable menu items use "menuitemradio" for single select,
		 * and "menuitemcheckbox" for multiselect.
		 *
		 * @default 'menuitem'
		 */
		role?: 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option';
		/**
		 * If shortcut is a string, it is expecting the display text. If shortcut is an object,
		 * it will accept the properties of `display` (string) and `ariaLabel` (string).
		 */
		shortcut?: string | { display: string; ariaLabel: string };
		/**
		 * Allows for markup other than icons or shortcuts to be added to the menu item.
		 */
		suffix?: ReactNode;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/modal/#props
	 */
	interface Modal {
		aria?: {
			describedby?: string;
			labelledby?: string;
		};
		bodyOpenClassName?: string;
		className?: string;
		closeButtonLabel?: string;
		contentLabel?: string;
		focusOnMount?: boolean | 'firstElement' | 'firstContentElement';
		headerActions?: ReactNode;
		icon?: ReactNode;
		isDismissible?: boolean;
		isFullScreen?: boolean;
		onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
		onRequestClose: ( event?: KeyboardEvent<HTMLDivElement> | SyntheticEvent ) => void;
		overlayClassName?: string;
		role?: AriaRole;
		shouldCloseOnClickOutside?: boolean;
		shouldCloseOnEsc?: boolean;
		size?: 'small' | 'medium' | 'large' | 'fill';
		style?: CSSProperties;
		title?: string;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/navigable-container/#props
	 */
	interface NavigableMenu extends HTMLAttributes<HTMLDivElement> {
		orientation?: 'vertical' | 'horizontal' | 'both';
		ref?: Ref<HTMLDivElement>;
		/**
		 * The component children.
		 */
		children?: ReactNode;
		/**
		 * A boolean which tells the component whether or not to cycle from the end back to the beginning and vice versa.
		 *
		 * @default true
		 */
		cycle?: boolean;
		/**
		 * A callback invoked on the keydown event.
		 */
		onKeyDown?: ( event: KeyboardEvent ) => void;
		/**
		 * A callback invoked when the menu navigates to one of its children passing the index and child as an argument
		 */
		onNavigate?: ( index: number, focusable: HTMLElement ) => void;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/notice/#props
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/notice/types.ts
	 */
	interface Notice {
		className?: string;
		spokenMessage?: string;
		status?: Status;
		onRemove?: () => void;
		politeness?: 'assertive' | 'polite';
		isDismissible?: boolean;
		onDismiss?: () => void;
		actions?: Array<{
			label: ReactNode;
			className?: string;
			noDefaultClasses?: boolean;
			variant?: 'primary' | 'secondary' | 'link';
		} & ( {
			url: string;
			onClick?: never;
		} | {
			url?: never;
			onClick: MouseEventHandler<HTMLButtonElement>
		} )>;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/number-control/
	 */
	interface NumberControl extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
		dragDirection?: DragDirection;
		dragThreshold?: number;
		isDragEnabled?: boolean;
		isShiftStepEnabled?: boolean;
		label?: ReactNode;
		labelPosition?: LabelPosition;
		max?: number;
		min?: number;
		onChange?: ( nextValue: string | undefined, extra: { event: SyntheticEvent } ) => void;
		required?: boolean;
		shiftStep?: number;
		spinControls?: 'none' | 'native' | 'custom';
		spinFactor?: number;
		step?: number;
		type?: HTMLInputTypeAttribute;
		value?: number | string;
	}

	/**
	 * Panel commonly used within InspectorControls.
	 *
	 * @see @wordpress/block-editor.InspectorControls
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/panel/#panel
	 */
	interface Panel {
		className?: string;
		header?: string;
	}

	/**
	 * Panel commonly used within InspectorControls.
	 *
	 * @see @wordpress/block-editor.InspectorControls
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/panel/#panelbody
	 */
	interface PanelBody {
		buttonProps?: ButtonHTMLAttributes<{}>;
		children?: ReactNode[] | ReactNode;
		className?: string;
		icon?: string;
		initialOpen?: boolean;
		title?: ReactNode;
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
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/placeholder/#props
	 */
	interface Placeholder extends HTMLAttributes<HTMLDivElement> {
		icon?: WPBlockTypeIconRender;
		label?: ReactNode;
		instructions?: ReactNode;
		isColumnLayout?: boolean;
		notices?: ReactNode;
		preview?: ReactNode;
	}

	/**
	 * A floating tooltip of any content type.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/popover/#props
	 */
	export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
		// @see example in docs for using anchor.
		anchor?: Element | VirtualElement | null;
		animate?: boolean;
		expandOnMobile?: boolean;
		flip?: boolean;
		focusOnMount?: 'firstElement' | boolean;
		headerTitle?: string;
		/**
		 * Whether to render the popover inline or within the slot.
		 */
		inline?: boolean;
		noArrow?: boolean;
		offset?: number;
		onClose?: ( ev: SyntheticEvent<HTMLButtonElement> ) => void;
		onFocusOutside?: ( ev: SyntheticEvent ) => void;
		placement?: Placement;
		// @note: Use the `placement` prop instead when possible.
		position?:
			| `${PositionYAxis}`
			| `${PositionYAxis} ${PositionXAxis}`
			| `${PositionYAxis} ${PositionXAxis} ${PositionCorner}`;
		resize?: boolean;
		shift?: boolean;
		variant?: 'unstyled' | 'toolbar';
	}

	/**
	 * @link https://github.com/WordPress/gutenberg/tree/master/packages/components/src/radio-control
	 */
	export function RadioControl<T extends string>( props: PropsWithChildren<{
		selected: T;
		options: Array<{
			label: string;
			value: T;
		}>;
		label?: ReactNode;
		help?: ReactNode;
		onChange?: ( value: T ) => void;
	} & Omit<InputHTMLAttributes<{}>, 'onChange'>> ): ReactElement<any, any> | null;

	/**
	 * Range slider input control.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/range-control/#props
	 */
	interface RangeControl {
		afterIcon?: iconType;
		allowReset?: boolean;
		beforeIcon?: iconType;
		className?: string;
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
		max?: number;
		min?: number;
		onChange: ( value: number ) => void;
		railColor?: string;
		renderTooltipContent?: ( value: number ) => ReactNode;
		resetFallbackValue?: number;
		separatorType?: 'none' | 'fullWidth' | 'topFullWidth';
		shiftStep?: number;
		showTooltip?: boolean;
		step?: number | 'any';
		trackColor?: string;
		type?: 'slider' | 'stepper';
		value: number;
		withInputField?: boolean;
	}

	/**
	 * ResizableBox is a wrapper around the `re-resizable` package with pre-defined classes and styles.
	 *
	 * Most options are passed directly to re-resizable, so their types are used.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/resizable-box/
	 */
	interface ResizableBox {
		showHandle?: boolean;
		className?: string;
		/** Below are from re-resizable */
		as?: string | ComponentType<any>;
		style?: CSSProperties;
		grid?: [ number, number ];
		snap?: {
			x?: number[];
			y?: number[];
		};
		snapGap?: number;
		bounds?: 'parent' | 'window' | HTMLElement;
		boundsByDirection?: boolean;
		size?: {
			width: string | number;
			height: string | number;
		};
		minWidth?: string | number;
		minHeight?: string | number;
		maxWidth?: string | number;
		maxHeight?: string | number;
		lockAspectRatio?: boolean | number;
		lockAspectRatioExtraWidth?: number;
		lockAspectRatioExtraHeight?: number;
		enable?: {
			top?: boolean;
			right?: boolean;
			bottom?: boolean;
			left?: boolean;
			topRight?: boolean;
			bottomRight?: boolean;
			bottomLeft?: boolean;
			topLeft?: boolean;
		} | false;
		handleStyles?: {
			top?: CSSProperties;
			right?: CSSProperties;
			bottom?: CSSProperties;
			left?: CSSProperties;
			topRight?: CSSProperties;
			bottomRight?: CSSProperties;
			bottomLeft?: CSSProperties;
			topLeft?: CSSProperties;
		};
		handleClasses?: {
			top?: string;
			right?: string;
			bottom?: string;
			left?: string;
			topRight?: string;
			bottomRight?: string;
			bottomLeft?: string;
			topLeft?: string;
		};
		handleWrapperStyle?: CSSProperties;
		handleWrapperClass?: string;
		handleComponent?: {
			top?: ReactElement;
			right?: ReactElement;
			bottom?: ReactElement;
			left?: ReactElement;
			topRight?: ReactElement;
			bottomRight?: ReactElement;
			bottomLeft?: ReactElement;
			topLeft?: ReactElement;
		};
		children?: ReactNode;
		onResizeStart?: (
			e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>,
			dir: 'top' | 'right' | 'bottom' | 'left' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft',
			elementRef: HTMLElement
		) => void | boolean;
		onResize?: (
			event: MouseEvent | TouchEvent,
			direction: 'top' | 'right' | 'bottom' | 'left' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft',
			elementRef: HTMLElement,
			delta: {
				width: number;
				height: number;
			}
		) => void;
		onResizeStop?: (
			event: MouseEvent | TouchEvent,
			direction: 'top' | 'right' | 'bottom' | 'left' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft',
			elementRef: HTMLElement,
			delta: {
				width: number;
				height: number;
			}
		) => void;
		defaultSize?: {
			width: string | number;
			height: string | number;
		};
		scale?: number;
		resizeRatio?: number;
	}

	/**
	 * A wrapper component that maintains its aspect ratio when resized.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/responsive-wrapper/
	 */
	interface ResponsiveWrapper {
		children: ReactElement;
		isInline?: boolean;
		naturalHeight?: number;
		naturalWidth?: number;
	}


	/**
	 * Select Control
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/select-control/
	 */
	export function SelectControl<T extends string>( props: PropsWithChildren<{
		help?: ReactNode;
		label?: ReactNode;
		labelPosition?: 'top' | 'side' | 'bottom';
		multiple?: boolean;
		value: T;
		onChange: ( currentValue: T ) => void;
		options: Array<{
			label: string;
			value: T;
			disabled?: boolean
		}>;
		className?: string,
		hideLabelFromVision?: boolean
	} & Omit<SelectHTMLAttributes<{}>, 'onChange'>>, context?: any ): ReactElement<any, any> | null;


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

	interface Shortcut extends HTMLSpanElement {
		shortcut?: shortcutText;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/slot-fill/#props
	 */
	export function Slot<P = {}, N extends string = string>( props: PropsWithChildren<{
		bubblesVirtually: true;
		className?: string;
		// Fill props are passed to fills using function children.
		fillProps?: P
		name?: N;
		style?: CSSProperties;
	}>, context?: any ): ReactElement<any, any> | null;
	export function Slot<P = {}, N extends string = string>( props: {
		bubblesVirtually?: false;
		children?: ( fills: ReactNode[] ) => ReactNode;
		// Fill props are passed to fills using function children.
		fillProps?: P,
		name?: N;
	}, context?: any ): ReactElement<any, any> | null;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/slot-fill/#props
	 */
	interface SlotFillProvider {

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

	/**
	 * Button from within the `BlockControls` toolbars.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/toolbar-button/
	 */
	interface ToolbarButton extends ButtonButton {
		// Only used if not in toolbar context, otherwise use preferred `className`.
		containerClassName?: string;
		disabled?: boolean;
		isActive?: boolean;
		/** @deprecated */
		isDisabled?: boolean;
		title?: string;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/toolbar-group/
	 */
	interface ToolbarGroup {
		className?: string;
		controls?: Array<Control>;
		isCollapsed?: boolean;
		title?: string;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/toolbar-item/
	 */
	type ToolbarItem = {
		as: string | ComponentType<DropdownMenu['toggleProps']>;
		children: ReactNode;
	} | {
		children: ( props: DropdownMenu['toggleProps'] ) => ReactNode
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/tooltip/
	 */
	interface Tooltip {
		className?: string;
		delay?: number;
		text?: string;
		position?: TooltipPosition;
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
		onChange: ( value: string ) => void;
		ref?: Ref<HTMLInputElement>;
		type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'search' | 'url';
		value: string | number;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/text-highlight/#props
	 */
	interface TextHighlight {
		highlight: string;
		text: string;
	}

	type Tab<T extends string> = {
		name: T;
		title: string;
		className?: string;
	}

	/**
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/date-time/types.ts
	 */
	interface TimeInput {
		is12Hour?: boolean;
		value?: TimeInputValue;
		defaultValue?: TimeInputValue;
		minutesProps?: NumberControl;
		onChange?: ( time: TimeInputValue ) => void;
	}

	/**
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/date-time/time/index.tsx
	 */
	interface TimePicker {
		currentDate?: Date | string | number | null;
		is12Hour?: boolean;
		onChange?: ( time: string ) => void;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/navigable-container/#props
	 */
	interface TabbableContainer extends Omit<NavigableMenu, 'orientation'> {
		/**
		 * Gets an offset, given an event.
		 */
		eventToOffset?: ( event: KeyboardEvent ) => -1 | 0 | 1 | undefined;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/tab-panel/
	 */
	export function TabPanel<TabKeys extends string>( props: PropsWithChildren<{
		activeClass?: string;
		children: ( tab: Tab<TabKeys> ) => ReactElement;
		className?: string;
		initialTabName?: TabKeys;
		onSelect?: ( tab: TabKeys ) => void;
		orientation?: 'vertical' | 'horizontal';
		tabs: Array<Tab<TabKeys>>;
	}>, context?: any ): ReactElement | null;


	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/textarea-control/
	 */
	interface TextareaControl extends Omit<TextareaHTMLAttributes<{}>, 'onChange'> {
		className?: string;
		help?: ReactNode;
		hideLabelFromVision?: boolean;
		label?: ReactNode;
		onChange: ( currentValue: string ) => void;
		rows?: number;
		value: string | number;
	}


	/**
	 * Truncate is a typography primitive, which trims text content.
	 * For almost all cases, we recommend Text or Heading is used to render text content.
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
	 * Allows replacement or extending of a component using a filter.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/components/with-filters/
	 *
	 */
	export function withFilters<T>( hook: string ): ( component: ComponentType<T> ) => ComponentType<T>;

	export interface withSpokenMessages {
		speak?: ( message: string, ariaLive?: 'polite' | 'assertive' ) => void;
		debouncedSpeak?: ( message: string, ariaLive?: 'polite' | 'assertive' ) => void;
	}

	export const BaseControl: ComponentType<BaseControl>;
	export const BlockPopover: ComponentType<BlockPopover>;
	export const Button: ComponentType<ButtonLink | ButtonButton>;
	export const CheckboxControl: ComponentType<CheckboxControl>;
	export const ColorIndicator: ComponentType<ColorIndicator>;
	export const ColorPalette: ComponentType<ColorPalette>;
	export const ColorPicker: ComponentType<ColorPicker>;
	export const Dashicon: ComponentType<Dashicon>;
	export const DatePicker: ComponentType<DatePicker>;
	export const DateTimePicker: ComponentType<DateTimePicker>;
	export const Disabled: Disabled;
	export const Dropdown: ComponentType<Dropdown>;
	export const DropdownMenu: ComponentType<DropdownMenu>;
	export const DropZone: ComponentType<DropZone>;
	export const FormFileUpload: ComponentType<FormFileUpload>;
	export const GradientPicker: ComponentType<GradientPicker>;
	export const Grid: ComponentType<Grid>;
	export const Guide: ComponentType<Guide>;
	export const GuidePage: ComponentType<GuidePage>;
	export const KeyboardShortcuts: ComponentType<KeyboardShortcuts>;
	export const NavigableMenu: ComponentType<NavigableMenu>;
	export const MenuGroup: ComponentType<MenuGroup>;
	export const MenuItem: ComponentType<MenuItem>;
	export const Modal: ComponentType<Modal>;
	export const Notice: ComponentType<Notice>;
	export const NumberControl: ComponentType<NumberControl>;
	export const Panel: ComponentType<Panel>;
	export const PanelBody: ComponentType<PanelBody>;
	export const PanelRow: ComponentType<PanelRow>;
	export const Path: ComponentType<Path>;
	export const Placeholder: ComponentType<Placeholder>;
	export const Popover: ComponentType<PopoverProps>;
	export const RangeControl: ComponentType<RangeControl>;
	export const ResizableBox: ComponentType<ResizableBox>;
	export const ResponsiveWrapper: ComponentType<ResponsiveWrapper>;
	export const SearchControl: ComponentType<SearchControl>;
	export const Shortcut: ComponentType<Shortcut>;
	export const SlotFillProvider: ComponentType<SlotFillProvider>;
	export const Spinner: ComponentType<Spinner>;
	export const SVG: ComponentType<SVG>;
	export const TabbableContainer: ComponentType<TabbableContainer>;
	export const TextControl: ComponentType<TextControl>;
	export const TextareaControl: ComponentType<TextareaControl>;
	export const TextHighlight: ComponentType<TextHighlight>;
	export const TimeInput: ComponentType<TimeInput>;
	export const TimePicker: ComponentType<TimePicker>;
	export const ToggleControl: ComponentType<ToggleControl>;
	export const ToolbarButton: ComponentType<ToolbarButton>;
	export const ToolbarGroup: ComponentType<ToolbarGroup>;
	export const ToolbarItem: ComponentType<ToolbarItem>;
	export const Tooltip: ComponentType<Tooltip>;
	export const Truncate: ComponentType<Truncate>;

	export default interface Components {
		BaseControl: ComponentType<BaseControl>;
		BlockPopover: ComponentType<BlockPopover>;
		Button: ComponentType<ButtonLink | ButtonButton>;
		CheckboxControl: ComponentType<CheckboxControl>;
		ColorIndicator: ComponentType<ColorIndicator>;
		ColorPalette: ComponentType<ColorPalette>;
		ColorPicker: ComponentType<ColorPicker>;
		ComboboxControl: typeof ComboboxControl;
		createSlotFill: typeof createSlotFill;
		Dashicon: ComponentType<Dashicon>;
		DatePicker: ComponentType<DatePicker>;
		DateTimePicker: ComponentType<DateTimePicker>;
		Disabled: Disabled;
		DropZone: ComponentType<DropZone>;
		Dropdown: ComponentType<Dropdown>;
		DropdownMenu: ComponentType<DropdownMenu>;
		Fill: typeof Fill;
		FormFileUpload: ComponentType<FormFileUpload>;
		GradientPicker: ComponentType<GradientPicker>;
		Grid: ComponentType<Grid>;
		Guide: ComponentType<Guide>;
		GuidePage: ComponentType<GuidePage>;
		Icon: typeof Icon;
		KeyboardShortcuts: ComponentType<KeyboardShortcuts>;
		MenuGroup: ComponentType<MenuGroup>;
		MenuItem: ComponentType<MenuItem>;
		Modal: ComponentType<Modal>;
		NavigableMenu: ComponentType<NavigableMenu>;
		Notice: ComponentType<Notice>;
		NumberControl: ComponentType<NumberControl>;
		Panel: ComponentType<Panel>;
		PanelBody: ComponentType<PanelBody>;
		PanelRow: ComponentType<PanelRow>;
		Path: ComponentType<Path>;
		Placeholder: ComponentType<Placeholder>;
		Popover: ComponentType<PopoverProps>;
		RadioControl: typeof RadioControl;
		RangeControl: ComponentType<RangeControl>;
		ResizableBox: ComponentType<ResizableBox>;
		ResponsiveWrapper: ComponentType<ResponsiveWrapper>;
		SelectControl: typeof SelectControl;
		SearchControl: ComponentType<SearchControl>;
		Shortcut: ComponentType<Shortcut>;
		Slot: typeof Slot;
		SlotFillProvider: ComponentType<SlotFillProvider>;
		Spinner: ComponentType<Spinner>;
		SVG: ComponentType<SVG>;
		TabbableContainer: ComponentType<TabbableContainer>;
		TabPanel: typeof TabPanel;
		TextControl: ComponentType<TextControl>;
		TextareaControl: ComponentType<TextareaControl>;
		TextHighlight: ComponentType<TextHighlight>;
		TimeInput: ComponentType<TimeInput>;
		TimePicker: ComponentType<TimePicker>;
		ToggleControl: ComponentType<ToggleControl>;
		ToolbarButton: ComponentType<ToolbarButton>;
		ToolbarGroup: ComponentType<ToolbarGroup>;
		ToolbarItem: ComponentType<ToolbarItem>;
		Tooltip: ComponentType<Tooltip>;
		Truncate: ComponentType<Truncate>;
		withFilters: typeof withFilters;
	}
}
