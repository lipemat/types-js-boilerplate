/**
 * Media REST endpoint.
 *
 * @link https://developer.wordpress.org/rest-api/reference/media
 *
 */
declare module '@wordpress/api/media' {
	import {Context, ContextualField, Editing, Global, Links, PingStatus, RenderedText} from '@wordpress/api';
	import {PostMeta, PostReadOnly, PostStatus} from '@wordpress/api/posts';
	import {PagesQuery} from '@wordpress/api/pages';
	import {ALL_TYPES} from '@lipemat/js-boilerplate/mime';
	import {OmitNever} from '@lipemat/js-boilerplate/utility';

	type Details = {
		file: string;
		height: number;
		mime_type: string;
		source_url: string;
		width: number;
	}

	/**
	 * Media Schema.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/media/#schema
	 */
	export type Media<C extends Context = 'view'> = OmitNever<{
		alt_text: string;
		author: number;
		caption: RenderedText<C>;
		comment_status: ContextualField<'open' | 'closed', 'view' | 'edit', C>;
		date: string | null;
		date_gmt: ContextualField<string | null, 'view' | 'edit', C>;
		description: ContextualField<RenderedText<C>, 'view' | 'edit', C>;
		generated_slug: ContextualField<string, 'edit', C>;
		guid: ContextualField<RenderedText<C>, 'view' | 'edit', C>;
		id: number;
		link: string;
		media_details: {
			width: number;
			height: number,
			file: string;
			sizes: {
				full: Details;
				medium: Details;
				thumbnail: Details;
				[ size: string ]: Details;
			},
			image_meta: {
				aperture?: string;
				camera?: string;
				caption?: string;
				copyright?: string;
				created_timestamp?: string;
				credit?: string;
				focal_length?: string;
				iso?: string;
				keywords?: Array<string>
				orientation?: string;
				shutter_speed?: string;
				title?: string;
			}
		}
		media_type: 'application' | 'audio' | 'image' | 'video';
		meta: ContextualField<PostMeta, 'view' | 'edit', C>;
		mime_type: string;
		missing_image_sizes: ContextualField<string[], 'edit', C>;
		modified: ContextualField<string, 'view' | 'edit', C>;
		modified_gmt: ContextualField<string, 'view' | 'edit', C>;
		permalink_template: ContextualField<string, 'edit', C>;
		ping_status: ContextualField<PingStatus, 'view' | 'edit', C>;
		post: ContextualField<number, 'view' | 'edit', C>;
		slug: string;
		source_url: string;
		status: ContextualField<PostStatus | 'inherit', 'view' | 'edit', C>;
		template: ContextualField<string, 'view' | 'edit', C>;
		title: RenderedText<C>;
		type: 'attachment' | string;
		_links: Links;
	}>


	/**
	 * Create a media item.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/media/#create-a-media-item
	 * @see `@wordpress/media-utils.uploadMedia`
	 */
	export interface MediaCreate extends Partial<Editing<Omit<Media<'edit'>, PostReadOnly>>> {
		file?: Blob;
	}

	/**
	 * Update a media item.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/media/#update-a-media-item
	 */
	export interface MediaUpdate extends MediaCreate {
		id: number;
	}


	/**
	 * List Media Items
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/media/#list-media
	 */
	export interface MediaQuery extends Omit<PagesQuery, '_fields' | 'status'>, Global<Media> {
		media_type?: 'application' | 'audio' | 'image' | 'video';
		mime_type?: ALL_TYPES;
		status?: PostStatus | 'inherit';
		_embed?: true | 'author' | 'replies';
	}
}
