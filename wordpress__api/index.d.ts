/**
 * Type declarations for WP Rest Api.
 *
 * @author Mat Lipe
 *
 * @link https://developer.wordpress.org/rest-api/reference/
 *
 */
declare module '@wordpress/api' {
	export * from '@wordpress/api/application-passwords';
	export * from '@wordpress/api/categories';
	export * from '@wordpress/api/comments';
	export * from '@wordpress/api/media';
	export * from '@wordpress/api/posts';
	export * from '@wordpress/api/pages';
	export * from '@wordpress/api/settings';
	export * from '@wordpress/api/taxonomies';
	export * from '@wordpress/api/types';
	export * from '@wordpress/api/users';

	export type context = 'view' | 'embed' | 'edit';
	export type order = 'asc' | 'desc';
	export type method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';

	export interface Collection {
		href: string;
	}

	export interface Embeddable {
		embeddable: boolean;
		href: string;
	}

	export interface Links {
		self: Collection[];
		collection: Collection[];
		about: Collection[],
		curies: [ {
			name: string;
			href: string;
			templated: boolean;
		} ];
		author?: Embeddable[];
		'wp:post_type'?: Collection[];
		replies?: Embeddable[];
		'version-history'?: [ {
			count: number;
			href: string;
		} ];
		'predecessor-version'?: [ {
			id: number;
			href: string;
		} ];
		'wp:featuredmedia'?: Embeddable[];
		'wp:attachment'?: Collection[];
		'wp:term'?: [ {
			taxonomy: string;
			embeddable: boolean;
			href: string;
		} ]

	}

	export interface Global<T> {
		_embed?: true | 'author' | 'replies' | 'wp:featuredmedia' | 'wp:attachment' | 'wp:term';
		_fields?: Array<keyof T>;
		context?: context;
	}
}
