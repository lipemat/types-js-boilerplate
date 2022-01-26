/* eslint-disable camelcase */

/**
 * Media REST endpoint.
 *
 * @link https://developer.wordpress.org/rest-api/reference/media
 *
 */
declare module '@wordpress/api/media' {
	import {Global, Links} from '@wordpress/api';
	import {PostMeta, PostStatus} from '@wordpress/api/posts';
	import {PageCreate, PagesQuery} from '@wordpress/api/pages';
	import {ALL_TYPES} from '@lipemat/js-boilerplate/mime';

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
	export interface Media {
		alt_text: string;
		author: number;
		caption: {
			raw: string;
			rendered: string;
		};
		comment_status: 'open' | 'closed';
		date: string;
		date_gmt: string;
		description: {
			raw: string;
			rendered: string;
		};
		generated_slug: string;
		guid: {
			rendered: string;
			raw: string;
		};
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
				[size: string]: Details;
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
		meta: PostMeta;
		mime_type: string;
		missing_image_sizes: [];
		modified: string;
		modified_gmt: string;
		permalink_template: string;
		ping_status: 'open' | 'closed';
		post: number;
		slug: string;
		source_url: string;
		status: PostStatus | 'inherit';
		template: string;
		title: {
			raw: string;
			rendered: string;
		};
		type: 'attachment';
		_links: Links;
	}


	/**
	 * Create a media item.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/media/#create-a-media-item
	 * @see `@wordpress/media-utils.uploadMedia`
	 */
	export interface MediaCreate extends PageCreate {
		alt_text?: string;
		caption?: string;
		description?: string;
		file?: Blob;
		post?: number;
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
	}
}
