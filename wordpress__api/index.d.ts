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
	export * from '@wordpress/api/menus';
	export * from '@wordpress/api/menu-items';
	export * from '@wordpress/api/menu-locations';
	export * from '@wordpress/api/posts';
	export * from '@wordpress/api/pages';
	export * from '@wordpress/api/search';
	export * from '@wordpress/api/settings';
	export * from '@wordpress/api/taxonomies';
	export * from '@wordpress/api/types';
	export * from '@wordpress/api/users';

	export type context = 'view' | 'embed' | 'edit';
	export type order = 'asc' | 'desc';
	export type method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
	export type meta = {
		[ key: string ]: any;
	}

	export interface Collection {
		href: string;
	}

	export interface Embeddable {
		embeddable: boolean;
		href: string;
	}

	export interface Links {
		about: Collection[],
		author?: Embeddable[];
		collection: Collection[];
		curies?: [ {
			name: string;
			href: string;
			templated: boolean;
		} ];
		replies?: Embeddable[];
		'version-history'?: [ {
			count: number;
			href: string;
		} ];
		'predecessor-version'?: [ {
			id: number;
			href: string;
		} ];
		self: Collection[] | Embeddable[];
		'wp:attachment'?: Collection[];
		'wp:featuredmedia'?: Embeddable[];
		'wp:menu'?: Embeddable[];
		'wp:menu-location'?: Embeddable[];
		'wp:menu-item-object'?: [ {
			post_type: string;
			embeddable: boolean;
			href: string;
		} ];
		'wp:post_type'?: Collection[];
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
