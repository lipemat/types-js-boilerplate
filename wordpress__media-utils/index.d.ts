/**
 * Definitions for the `@wordpress/media-utils` package.
 *
 * Utilities for facilitating media uploads.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-media-utils/
 *
 */
declare module '@wordpress/media-utils' {
	import {ComponentType} from 'react';
	import {ALL_TYPES} from '@lipemat/js-boilerplate/mime';
	import {MediaUpload as Base} from '@wordpress/block-editor';
	import {Media, MediaCreate} from '@wordpress/api/media';

	export type UploadedMedia = Omit<Media, 'alt_text' | 'source_url' | 'caption'> & {
		alt: string;
		url: string;
		title: string;
		caption: string;
	}

	/**
	 * Upload a file to the media library.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-media-utils/#uploadmedia
	 */
	type uploadMedia = ( args: {
		allowedTypes?: Array<ALL_TYPES>;
		additionalData?: MediaCreate;
		filesList: File[] | FileList;
		maxUploadFileSize?: number;
		onError?: ( error: Error ) => void;
		onFileChange: ( files: Array<UploadedMedia | {
			url: string;
		}> ) => void;
		wpAllowedMimeTypes?: ALL_TYPES;
	} ) => void;

	/**
	 * Creates a button or element to open the media manager.
	 *
	 * Must be used in conjunction with `@wordpress/block-editor.MediaUpload`.
	 *
	 * @example `addFilter(
	 * 			    'editor.MediaUpload',
	 *			    'lipe/project/drag-upload/replace-media-upload',
	 *			    () => MediaUpload // Utils version.
	 *		    )
	 *		    <MediaUpload /> // Block editor version`
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-media-utils/#mediaupload
	 * @link https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-upload/README.md
	 */
	export const MediaUpload: ComponentType<Base>;
	export const uploadMedia: uploadMedia;

	export default interface MediaUtils {
		MediaUpload: ComponentType<Base>;
		uploadMedia: uploadMedia;
	}
}
