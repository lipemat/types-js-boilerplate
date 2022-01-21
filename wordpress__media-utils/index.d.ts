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
	import {MediaCreate} from '@wordpress/api/media';


	type uploadMedia = ( args: {
		allowedTypes?: Array<ALL_TYPES>;
		additionalData?: MediaCreate;
		filesList: File[];
		maxUploadFileSize?: number;
		onError?: ( error: Error ) => void;
		onFileChange: ( files: Array<Selected | { url: string }> ) => void;
		wpAllowedMimeTypes?: ALL_TYPES;
	} ) => void;

	export const MediaUpload: ComponentType<Base>;
	export const uploadMedia: uploadMedia;

	export default interface MediaUtils {
		MediaUpload: ComponentType<Base>;
		uploadMedia: uploadMedia;
	}
}
