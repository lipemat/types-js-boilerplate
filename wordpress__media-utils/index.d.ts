/**
 * Utilities for facilitating media uploads.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-media-utils/
 *
 */
declare module '@wordpress/media-utils' {
	import {ComponentType} from 'react';
	import {ALL_TYPES} from '@lipemat/js-boilerplate/mime';
	import {MediaUpload as Base} from '@wordpress/block-editor';

	interface MediaUpload extends Base {
	}

	interface UploadMedia {
		allowedTypes?: ALL_TYPES,
		additionalData: { [ key: string ]: any }
		filesList: File[],
		maxUploadFileSize?: number,
		onError?: ( error: Error ) => void;
		onFileChange: ( files: Array<File | { url: string }> ) => void;
		wpAllowedMimeTypes?: ALL_TYPES,
	}

	export const MediaUpload: ComponentType<MediaUpload>;
	export const uploadMedia: ( args: UploadMedia ) => void;

	export default interface MediaUtils {
		MediaUpload: ComponentType<MediaUpload>;
		uploadMedia: ( args: UploadMedia ) => void;
	}
}
