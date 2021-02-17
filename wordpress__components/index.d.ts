declare module '@wordpress/components' {
	import {
		ButtonHTMLAttributes,
		ComponentType,
		CSSProperties,
		InputHTMLAttributes,
		MouseEvent,
		ReactNode,
		SelectHTMLAttributes,
		SVGAttributes,
	} from 'react';
	import {ClassNamesFn} from 'classnames/types';
	import {SVG} from '@wordpress/primitives';

	/**
	 * @link https://developer.wordpress.org/block-editor/components/button/
	 */
	type ButtonParams = {
		className?: ClassNamesFn;
		icon?: Dashicon | SVG;
		iconSize?: number;
		isBusy?: boolean;
		isDestructive?: boolean;
		isLink?: boolean;
		isPressed?: boolean;
		isPrimary?: boolean;
		isSecondary?: boolean;
		isSmall?: boolean;
		isTertiary?: boolean;
		label?: string;
		shortcut?: shortcutText;
		showTooltip?: boolean;
		tooltipPosition?: tooltipPosition;
		children?: ReactNode;
	}

	export type colorOptions = Array<{
		color: string;
		name: string;
		slug?: string;
	}>;

	export type iconType =
		'admin-appearance'
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
		| 'album'
		| 'align-center'
		| 'align-full-width'
		| 'align-left'
		| 'align-none'
		| 'align-pull-left'
		| 'align-pull-right'
		| 'align-right'
		| 'align-wide'
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
		| 'art'
		| 'awards'
		| 'backup'
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
		| 'button'
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
		| 'desktop'
		| 'dismiss'
		| 'download'
		| 'edit'
		| 'editor-aligncenter'
		| 'editor-alignleft'
		| 'editor-alignright'
		| 'editor-bold'
		| 'editor-break'
		| 'editor-code'
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
		| 'format-aside'
		| 'format-audio'
		| 'format-chat'
		| 'format-gallery'
		| 'format-image'
		| 'format-quote'
		| 'format-status'
		| 'format-video'
		| 'forms'
		| 'googleplus'
		| 'grid-view'
		| 'groups'
		| 'hammer'
		| 'heading'
		| 'heart'
		| 'hidden'
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
		| 'location-alt'
		| 'location'
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
		| 'menu'
		| 'microphone'
		| 'migrate'
		| 'minus'
		| 'money'
		| 'move'
		| 'nametag'
		| 'networking'
		| 'no-alt'
		| 'no'
		| 'palmtree'
		| 'paperclip'
		| 'performance'
		| 'phone'
		| 'playlist-audio'
		| 'playlist-video'
		| 'plus-alt'
		| 'plus-light'
		| 'plus'
		| 'portfolio'
		| 'post-status'
		| 'pressthis'
		| 'products'
		| 'randomize'
		| 'redo'
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
		| 'thumbs-down'
		| 'thumbs-up'
		| 'tickets-alt'
		| 'tickets'
		| 'tide'
		| 'translation'
		| 'trash'
		| 'twitter'
		| 'undo'
		| 'universal-access-alt'
		| 'universal-access'
		| 'unlock'
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
		| 'wordpress-alt'
		| 'wordpress'
		| 'yes-alt'
		| 'yes';

	type shortcutText = string | {
		display: string;
		ariaLabel: string;
	};

	type tooltipPosition = 'top left' | 'top right' | 'top-center' | 'bottom left' | 'bottom right' | 'bottom center';


	// If href is set, we get a link.
	interface ButtonLink extends ButtonParams, Omit<Partial<HTMLLinkElement>, 'className' | 'children'> {
		href: string;
		onClick?: ( ev: MouseEvent<HTMLLinkElement> ) => void;
	}

	// If href is not set, we get a button.
	interface ButtonButton extends ButtonParams, Omit<Partial<HTMLButtonElement>, 'className' | 'children'> {
		onClick?: ( ev: MouseEvent<HTMLButtonElement> ) => void;
	}

	interface CheckboxControl extends Omit<InputHTMLAttributes<{}>, 'onChange'> {
		heading?: string;
		label?: string;
		help?: string;
		checked: boolean;
		className?: string,
		onChange: ( currentValue: boolean ) => void;
	}

	interface ColorPalette {
		//	disableAlpha?: boolean; // Not available in WP Core yet as of 2019-8-11 96f7d3497e518
		className?: string;
		clearable?: boolean
		disableCustomColors: boolean;
		label: string;
		onChange: ( currentValue: string ) => void;
		value: string;
	}

	interface ColorPicker {
		disableAlpha: boolean;
		className: string;
		onChangeComplete: ( currentValue: string ) => void;
	}

	interface Dashicon extends SVGAttributes<SVGElement> {
		icon: iconType;
		size: boolean;
		className: string;
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

	interface PanelBody {
		title: string;
		initialOpen?: boolean;
		icon?: string
		children?: ReactNode[] | ReactNode;
		buttonProps?: ButtonHTMLAttributes<{}>;
	}

	interface SelectControl extends Omit<SelectHTMLAttributes<{}>, 'onChange'> {
		help?: string;
		label?: string;
		multiple?: boolean;
		onChange: ( currentValue: string ) => void;
		options?: Array<{
			label: string;
			value: string;
			disabled?: boolean
		}>;
		className?: string,
		hideLabelFromVision?: boolean
	}

	export interface ServerSideRender<A = object, U = object> {
		block: string;
		attributes?: A;
		className?: string;
		httpMethod?: 'GET' | 'POST'
		urlQueryArgs?: U
	}

	interface Shortcut extends HTMLSpanElement {
		shortcut?: shortcutText;
	}

	interface Tooltip {
		text?: string;
		position?: tooltipPosition;
		shortcut?: shortcutText;
	}

	interface TextControl extends Omit<InputHTMLAttributes<{}>, 'onChange' | 'onKeyPress'> {
		label?: string;
		help?: string;
		hideLabelFromVision?: boolean
		value: string | number;
		className?: string,
		onChange: ( currentValue: string ) => void;
		onKeyPress?: ( ev: KeyboardEvent ) => void;
		type?: string;
	}

	/**
	 * Truncate is a typography primitive that trims text content.
	 * For almost all cases, it is recommended that Text, Heading, or Subheading is used to render text content.
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

	export interface withSpokenMessages {
		speak?: ( message: string, ariaLive?: 'polite' | 'assertive' ) => void;
		debouncedSpeak?: ( message: string, ariaLive?: 'polite' | 'assertive' ) => void;
	}

	export const Button: ComponentType<ButtonLink | ButtonButton>;
	export const CheckboxControl: ComponentType<CheckboxControl>;
	export const ColorPalette: ComponentType<ColorPalette>;
	export const ColorPicker: ComponentType<ColorPicker>;
	export const Dashicon: ComponentType<Dashicon>;
	export const Grid: ComponentType<Grid>;
	export const Guide: ComponentType<Guide>;
	export const GuidePage: ComponentType<GuidePage>;
	export const PanelBody: ComponentType<PanelBody>;
	export const SelectControl: ComponentType<SelectControl>;
	export const ServerSideRender: ComponentType<ServerSideRender>;
	export const Shortcut: ComponentType<Shortcut>;
	export const Spinner: ComponentType<{}>;
	export const TextControl: ComponentType<TextControl>;
	export const Tooltip: Tooltip;
	export const Truncate: Truncate;

	export default interface Components {
		Button: ComponentType<ButtonLink | ButtonButton>;
		CheckboxControl: ComponentType<CheckboxControl>;
		ColorPalette: ComponentType<ColorPalette>;
		ColorPicker: ComponentType<ColorPicker>;
		Dashicon: ComponentType<Dashicon>;
		Grid: ComponentType<Grid>;
		Guide: ComponentType<Guide>;
		GuidePage: ComponentType<GuidePage>;
		PanelBody: ComponentType<PanelBody>;
		SelectControl: ComponentType<SelectControl>;
		ServerSideRender: ComponentType<ServerSideRender>;
		Shortcut: ComponentType<Shortcut>;
		Spinner: ComponentType<{}>;
		TextControl: ComponentType<TextControl>;
		Tooltip: ComponentType<Tooltip>;
		Truncate: Truncate;
	}
}

