/* eslint-disable camelcase */
declare module '@wordpress/api/media' {
	import {Links} from '@wordpress/api';
	import {PostStatus, PostMeta} from '@wordpress/api/posts';

	type Details = {
		file: string;
		height: number;
		mime_type: string;
		source_url: string;
		width: number;
	}

	/**
	 * Media Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/media/#retrieve-a-media-item
	 */
	export interface Media {
		alt_text: string;
		author: number
		caption: {
			raw: string;
			rendered: string;
		}
		comment_status: 'open' | 'closed';
		date: string;
		date_gmt: string;
		description: {
			raw: string;
			rendered: string;
		}
		generated_slug: string;
		guid: {
			rendered: string;
			raw: string;
		}
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
		media_type: string;
		meta: PostMeta;
		mime_type: string;
		missing_image_sizes: []
		modified: string;
		modified_gmt: string;
		permalink_template: string;
		ping_status: 'open' | 'closed';
		post: number
		slug: string;
		source_url: string;
		status: PostStatus | 'inherit';
		template: string;
		title: {
			raw: string;
			rendered: string;
		}
		type: 'attachment'
		_links: Links;
	}
}
