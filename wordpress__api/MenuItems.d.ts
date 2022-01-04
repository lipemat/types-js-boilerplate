import {TaxQuery} from '@wordpress/api/posts';

/**
 * @notice Not available until WP 5.9.
 * @todo Add links to documentation when the WP docs are published.
 */
declare module '@wordpress/api/menu-items' {
	import {Links, meta} from '@wordpress/api';
	import {PostsQuery, PostStatus} from '@wordpress/api/posts';

	export interface MenuItem {
		attr_title: string;
		classes: string[];
		description: string;
		id: number;
		invalid: boolean;
		menu_order: number;
		menus: number;
		meta: meta;
		object: string;
		object_id: number;
		parent: number;
		status: PostStatus;
		target: string;
		title: {
			raw?: string;
			rendered: string;
		};
		type: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
		type_label: string;
		url: string;
		xfn: string[];
		_links: Links;
	}

	export interface MenuItemCreate extends Partial<Omit<MenuItem, 'title'>> {
		'menu-id': number;
		title: string;
		type: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
	}

	export interface MenuItemUpdate extends Partial<MenuItemCreate> {
		id: number;
	}

	export interface MenuItemsQuery extends Omit<PostsQuery, 'orderby' | '_fields'> {
		menus?: number[] | TaxQuery;
		menu_order?: number;
		order?: 'asc' | 'desc';
		orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title' | 'menu_order';
		per_page?: number;
		_fields?: Array<keyof MenuItem>;
	}
}
