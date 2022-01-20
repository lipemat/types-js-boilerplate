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
	import {Selected} from '@lipemat/js-boilerplate/global/wp-media';


	interface UploadMedia {
		allowedTypes?: Array<ALL_TYPES>,
		additionalData?: { [ key: string ]: any }
		filesList: File[],
		maxUploadFileSize?: number,
		onError?: ( error: Error ) => void;
		onFileChange: ( files: Array<Selected | { url: string }> ) => void;
		wpAllowedMimeTypes?: ALL_TYPES,
	}

	export const MediaUpload: ComponentType<Base>;
	export const uploadMedia: ( args: UploadMedia ) => void;

	export default interface MediaUtils {
		MediaUpload: ComponentType<Base>;
		uploadMedia: ( args: UploadMedia ) => void;
	}
}
