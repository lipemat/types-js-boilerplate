declare module '@wordpress/core-data/entities' {
	import {
		Category as RESTCategory,
		Comment as RESTComment,
		Context,
		ContextualField,
		Media as RESTMedia,
		Menu,
		MenuItem as RESTMenuItem,
		MenuLocation as RESTMenuLocation,
		Page as RESTPage,
		Post as RESTPost,
		PostFormat,
		PostStatus,
		RenderedText,
		Settings as RESTSettings,
		Taxonomy as RESTTaxonomy,
		Type as RESTType,
		User as RESTUser,
	} from '@wordpress/api';
	import {OmitNever} from '@lipemat/js-boilerplate/utility';
	import {DefaultContextOf} from '@wordpress/core-data/entity-types';

	type ThemeStatus = 'active' | 'inactive';

	interface ThemeSupports {
		/**
		 * Whether theme opts in to wide alignment CSS class.
		 */
		'align-wide': boolean;
		/**
		 * Whether posts and comments RSS feed links are added to head.
		 */
		'automatic-feed-links': boolean;
		/**
		 * Custom background if defined by the theme.
		 */
		'custom-background': boolean | CustomBackground;
		/**
		 * Custom header if defined by the theme.
		 */
		'custom-header': boolean | CustomHeader;
		/**
		 * Custom logo if defined by the theme.
		 */
		'custom-logo': boolean | CustomLogo;
		/**
		 * Whether the theme enables Selective Refresh for Widgets being managed with the Customizer.
		 */
		'customize-selective-refresh-widgets': boolean;
		/**
		 * Whether theme opts in to the dark editor style UI.
		 */
		'dark-editor-style': boolean;
		/**
		 * Whether the theme disables custom colors.
		 */
		'disable-custom-colors': boolean;
		/**
		 * Whether the theme disables custom font sizes.
		 */
		'disable-custom-font-sizes': boolean;
		/**
		 * Whether the theme disables custom gradients.
		 */
		'disable-custom-gradients': boolean;
		/**
		 * Custom color palette if defined by the theme.
		 */
		'editor-color-palette': boolean | Color[];
		/**
		 * Custom font sizes if defined by the theme.
		 */
		'editor-font-sizes': boolean | FontSize[];
		/**
		 * Custom gradient presets if defined by the theme.
		 */
		'editor-gradient-presets': boolean | GradientPreset[];
		/**
		 * Whether theme opts in to the editor styles CSS wrapper.
		 */
		'editor-styles': boolean;
		/**
		 * Allows use of HTML5 markup for search forms, comment forms, comment lists, gallery, and caption.
		 */
		html5: boolean | Html5Option[];
		/**
		 * Post formats supported.
		 */
		formats: PostFormat[];
		/**
		 * The post types that support thumbnails or true if all post types are supported.
		 */
		'post-thumbnails': boolean | string[];
		/**
		 * Whether the theme supports responsive embedded content.
		 */
		'responsive-embeds': boolean;
		/**
		 * Whether the theme can manage the document title tag.
		 */
		'title-tag': boolean;
		/**
		 * Whether theme opts in to default WordPress block styles for viewing.
		 */
		'wp-block-styles': boolean;
	}

	interface CustomBackground {
		'default-image': string;
		'default-preset': 'default' | 'fill' | 'fit' | 'repeat' | 'custom';
		'default-position-x': 'left' | 'center' | 'right';
		'default-position-y': 'left' | 'center' | 'right';
		'default-size': 'auto' | 'contain' | 'cover';
		'default-repeat': 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat';
		'default-attachment': 'scroll' | 'fixed';
		'default-color': string;
	}

	interface CustomHeader {
		'default-image': string;
		'random-default': boolean;
		width: number;
		height: number;
		'flex-height': boolean;
		'flex-width': boolean;
		'default-text-color': string;
		'header-text': boolean;
		uploads: boolean;
		video: boolean;
	}

	interface CustomLogo {
		width: number;
		height: number;
		'flex-width': boolean;
		'flex-height': boolean;
		'header-text': string[];
		'unlink-homepage-logo': boolean;
	}

	interface Color {
		name: string;
		slug: string;
		color: string;
	}

	interface FontSize {
		name: string;
		size: number;
		slug: string;
	}

	interface GradientPreset {
		name: string;
		gradient: string;
		slug: string;
	}

	type Html5Option =
		| 'search-form'
		| 'comment-form'
		| 'comment-list'
		| 'gallery'
		| 'caption'
		| 'script'
		| 'style';


	interface WidgetInstance {
		/**
		 * Base64 encoded representation of the instance settings.
		 */
		encoded: string;
		/**
		 * Cryptographic hash of the instance settings.
		 */
		hash: string;
		/**
		 * Unencoded instance settings, if supported.
		 */
		raw: Record<string, string>;
	}

	/**
	 * Some raw fields are converted to strings when `getRawEntityRecord` is used.
	 *
	 * @notice Gutenberg core-data has incorrect types. PHPStorm shows errors for `getRawEntityRecord` in the Gutenberg project.
	 *
	 * @see `isRawAttribute` used by `getRawEntityRecord`.
	 * @see packages/core-data/src/entities.js
	 */
	type RawRecord<T, P extends string> = Omit<T, P> & { [K in P]: string };

	export type Attachment<C extends Context = DefaultContextOf<'root', 'media'>> = RESTMedia<C>;
	export type RawAttachment = RawRecord<RESTMedia<'edit'>, 'caption' | 'title' | 'description'>;

	export type Comment<C extends Context = DefaultContextOf<'root', 'comment'>> = RESTComment<C>;

	export type Category<C extends Context = DefaultContextOf<'taxonomy', 'category'>> = RESTCategory<C>;

	export type MenuLocation<C extends Context = DefaultContextOf<'root', 'menuLocation'>> = RESTMenuLocation<C>;

	export type NavMenu<C extends Context = DefaultContextOf<'root', 'menu'>> = Menu<C>;

	export type NavMenuItem<C extends Context = DefaultContextOf<'root', 'menuItem'>> = RESTMenuItem<C>;
	export type RawNavMenuItem = RawRecord<RESTMenuItem<'edit'>, 'title'>;

	export type Page<C extends Context = DefaultContextOf<'postType', 'page'>> = RESTPage<C>;
	export type RawPage = RawRecord<RESTPage<'edit'>, 'title' | 'excerpt' | 'content'>

	export type Post<C extends Context = DefaultContextOf<'postType', 'post'>> = RESTPost<C>;
	export type RawPost = RawRecord<RESTPost<'edit'>, 'title' | 'excerpt' | 'content'>

	export type PluginStatus = 'active' | 'inactive';
	export type Plugin<C extends Context = DefaultContextOf<'root', 'plugin'>> = OmitNever<{
		/**
		 * The plugin file.
		 */
		plugin: string;
		/**
		 * The plugin activation status.
		 */
		status: PluginStatus;
		/**
		 * The plugin name.
		 */
		name: string;
		/**
		 * The plugin's website address.
		 */
		plugin_uri: ContextualField<string, 'view' | 'edit', C>;
		/**
		 * The plugin author.
		 */
		author: ContextualField<Record<string, string>,
			'view' | 'edit',
			C>;
		/**
		 * Plugin author's website address.
		 */
		author_uri: ContextualField<string, 'view' | 'edit', C>;
		/**
		 * The plugin description.
		 */
		description: ContextualField<RenderedText<'edit'>,
			'view' | 'edit',
			C>;
		/**
		 * The plugin version number.
		 */
		version: ContextualField<string, 'view' | 'edit', C>;
		/**
		 * Whether the plugin can only be activated network-wide.
		 */
		network_only: boolean;
		/**
		 * Minimum required version of WordPress.
		 */
		requires_wp: string;
		/**
		 * Minimum required version of PHP.
		 */
		requires_php: string;
		/**
		 * The plugin's text domain.
		 */
		textdomain: ContextualField<string, 'view' | 'edit', C>;
	}>;

	type SidebarStatus = 'active' | 'inactive';

	export type Sidebar<C extends Context = DefaultContextOf<'root', 'sidebar'>> = OmitNever<{
		/**
		 * ID of sidebar.
		 */
		id: string;
		/**
		 * Unique name identifying the sidebar.
		 */
		name: string;
		/**
		 * Description of sidebar.
		 */
		description: string;
		/**
		 * Extra CSS class to assign to the sidebar in the Widgets interface.
		 */
		class: string;
		/**
		 * HTML content to prepend to each widget's HTML output when assigned to this sidebar. Default is an opening list item element.
		 */
		before_widget: string;
		/**
		 * HTML content to append to each widget's HTML output when assigned to this sidebar. Default is a closing list item element.
		 */
		after_widget: string;
		/**
		 * HTML content to prepend to the sidebar title when displayed. Default is an opening h2 element.
		 */
		before_title: string;
		/**
		 * HTML content to append to the sidebar title when displayed. Default is a closing h2 element.
		 */
		after_title: string;
		/**
		 * Status of sidebar.
		 */
		status: SidebarStatus;
		/**
		 * Nested widgets.
		 */
		widgets: ( Widget<C> | string )[];
	}>;

	export type Settings<C extends Context = DefaultContextOf<'root', 'site'>> = RESTSettings<C>;

	export type Tag<C extends Context = DefaultContextOf<'taxonomy', 'post_tag'>> = RESTCategory<C>;

	export type Taxonomy<C extends Context = DefaultContextOf<'postType', 'taxonomy'>> = RESTTaxonomy<C>;

	export type Theme<C extends Context = DefaultContextOf<'root', 'theme'>> =
		OmitNever<{
			/**
			 * The theme's stylesheet. This uniquely identifies the theme.
			 */
			stylesheet: string;
			/**
			 * The theme's template. If this is a child theme, this refers to the parent theme, otherwise this is the same as the theme's stylesheet.
			 */
			template: string;
			/**
			 * The theme author.
			 */
			author: RenderedText<'edit'>;
			/**
			 * The website of the theme author.
			 */
			author_uri: RenderedText<'edit'>;
			/**
			 * A description of the theme.
			 */
			description: RenderedText<'edit'>;
			/**
			 * The name of the theme.
			 */
			name: RenderedText<'edit'>;
			/**
			 * The minimum PHP version required for the theme to work.
			 */
			requires_php: string;
			/**
			 * The minimum WordPress version required for the theme to work.
			 */
			requires_wp: string;
			/**
			 * The theme's screenshot URL.
			 */
			screenshot: string;
			/**
			 * Tags indicating styles and features of the theme.
			 */
			tags: RenderedText<'edit'>;
			/**
			 * The theme's text domain.
			 */
			textdomain: string;
			/**
			 * Features supported by this theme.
			 */
			theme_supports: ThemeSupports;
			/**
			 * The URI of the theme's webpage.
			 */
			theme_uri: RenderedText<'edit'>;
			/**
			 * The theme's current version.
			 */
			version: string;
			/**
			 * A named status for the theme.
			 */
			status: ThemeStatus;
		}>;

	export type Type<C extends Context = DefaultContextOf<'root', 'postType'>> = RESTType<C>;

	export type User<C extends Context = DefaultContextOf<'root', 'user'>> = RESTUser<C>;

	export type Widget<C extends Context = DefaultContextOf<'root', 'widget'>> =
		OmitNever<{
			/**
			 * Unique identifier for the widget.
			 */
			id: string;
			/**
			 * The type of the widget. Corresponds to ID in widget-types endpoint.
			 */
			id_base: string;
			/**
			 * The sidebar the widget belongs to.
			 */
			sidebar: string;
			/**
			 * HTML representation of the widget.
			 */
			rendered: string;
			/**
			 * HTML representation of the widget admin form.
			 */
			rendered_form: ContextualField<string, 'edit', C>;
			/**
			 * Instance settings of the widget, if supported.
			 */
			instance: ContextualField<WidgetInstance, 'edit', C>;
			/**
			 * URL-encoded form data from the widget admin form. Used
			 * to update a widget that does not support instance.
			 *
			 * This is never sent from the server to the client but exists
			 * because we might send an update.
			 */
			form_data?: string;
		}>;

	export type WidgetType<C extends Context = DefaultContextOf<'root', 'widgetType'>> = OmitNever<{
		/**
		 * Unique slug identifying the widget type.
		 */
		id: string;
		/**
		 * Human-readable name identifying the widget type.
		 */
		name: string;
		/**
		 * Description of the widget.
		 */
		description: string;
		/**
		 * Whether the widget supports multiple instances
		 */
		is_multi: boolean;
		/**
		 * Class name
		 */
		classname: string;
	}>;

	export type WpTemplate<C extends Context = DefaultContextOf<'postType', 'wp_template'>> = OmitNever<{
		/**
		 * ID of template.
		 */
		id: string;
		/**
		 * Unique slug identifying the template.
		 */
		slug: string;
		/**
		 * Theme identifier for the template.
		 */
		theme: string;
		/**
		 * Type of template.
		 */
		type: string;
		/**
		 * Source of template
		 */
		source: string;
		/**
		 * Source of a customized template
		 */
		origin: string;
		/**
		 * Content of template.
		 *
		 * This field never has a `rendered` property when reading but still uses
		 * the RenderedText type so it can be set as a string when sending updates to
		 * the server.
		 *
		 * TODO: Figure out how to mesh this with `RenderedText<C>`
		 */
		content: ContextualField<RenderedText<C> & {
			/**
			 * Version of the content block format used by the template.
			 */
			block_version: ContextualField<number, 'edit', C>;
		},
			'view' | 'edit',
			C>;
		/**
		 * Title of template.
		 */
		title: RenderedText<'edit'>;
		/**
		 * Description of template.
		 */
		description: string;
		/**
		 * Status of template.
		 */
		status: PostStatus;
		/**
		 * Post ID.
		 */
		wp_id: number;
		/**
		 * Theme file exists.
		 */
		has_theme_file: Record<string, string>;
		/**
		 * The ID for the author of the template.
		 */
		author: number;
		/**
		 * Whether a template is a custom template.
		 */
		is_custom: Record<string, string>;
	}>;

	export type WpTemplatePart<C extends Context = DefaultContextOf<'postType', 'wp_template_part'>> = OmitNever<{
		/**
		 * ID of template.
		 */
		id: string;
		/**
		 * Unique slug identifying the template.
		 */
		slug: string;
		/**
		 * Theme identifier for the template.
		 */
		theme: string;
		/**
		 * Type of template.
		 */
		type: string;
		/**
		 * Source of template
		 */
		source: string;
		/**
		 * Source of a customized template
		 */
		origin: string;
		/**
		 * Content of template.
		 *
		 * This field never has a `rendered` property when reading but still uses
		 * the RenderedText type so it can be set as a string when sending updates to
		 * the server.
		 *
		 * TODO: Figure out how to mesh this with `RenderedText<C>`
		 */
		content: ContextualField<RenderedText<C> & {
			/**
			 * Version of the content block format used by the template.
			 */
			block_version: ContextualField<number, 'edit', C>;
		},
			'view' | 'edit',
			C>;
		/**
		 * Title of template.
		 */
		title: RenderedText<'edit'>;
		/**
		 * Description of template.
		 */
		description: string;
		/**
		 * Status of template.
		 */
		status: PostStatus;
		/**
		 * Post ID.
		 */
		wp_id: number;
		/**
		 * Theme file exists.
		 */
		has_theme_file: Record<string, string>;
		/**
		 * The ID for the author of the template.
		 */
		author: number;
		/**
		 * Where the template part is intended for use (header, footer, etc.)
		 */
		area: string;
	}>;

}
