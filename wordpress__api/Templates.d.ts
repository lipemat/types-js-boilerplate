/**
 * Templates API.
 *
 * For working with the `wp_template` post type.
 *
 * @link https://developer.wordpress.org/rest-api/reference/wp_templates/
 */
declare module '@wordpress/api/templates' {
	import {Context, ContextualField, Editing, RenderedText, Global} from '@wordpress/api';
	import type {PostStatus} from '@wordpress/api/posts';

	/**
	 * Template Schema.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/wp_templates/#schema
	 */
	export interface Template<C extends Context = 'view'> {
		author: number;
		content: {
			block_version: ContextualField<number, 'edit', C>;
			raw: string;
		};
		description: string;
		has_theme_file: boolean;
		id: string;
		is_custom: boolean;
		modified: ContextualField<string, 'view' | 'edit', C>;
		origin: string;
		slug: string;
		source: string;
		status: PostStatus;
		theme: string;
		title: RenderedText<'edit'>;
		type: string;
		wp_id: number;
	}

	/**
	 * Create Template.
	 *
	 * https://developer.wordpress.org/rest-api/reference/wp_templates/#create-a-template
	 */
	export interface TemplateCreate extends Partial<Editing<Pick<Template<'edit'>, 'theme' | 'type' | 'title' | 'description' | 'status'>>> {
		slug: string;
		content: string;
	}

	/**
	 * Update Template.
	 *
	 * https://developer.wordpress.org/rest-api/reference/wp_templates/#update-a-template
	 */
	export interface TemplateUpdate extends TemplateCreate {
		id: string;
	}

	/**
	 * Template Query.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/wp_templates/#retrieve-a-template
	 */
	export interface TemplateQuery extends Global<Template> {
		area?: string;
		post_type?: string;
		wp_id?: number;
	}
}
