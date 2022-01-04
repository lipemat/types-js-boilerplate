/**
 * @notice Not available until WP 5.9.
 * @todo Add links to documentation when the WP docs are published.
 */
declare module '@wordpress/api/menus' {
	import {Links, meta} from '@wordpress/api';
	import {CategoriesQuery, CategoryCreate} from '@wordpress/api/categories';

	export interface Menu {
		auto_add: boolean;
		description: string;
		id: number;
		locations: string[];
		meta: meta;
		name: string;
		slug: string;
		_links: Links;
	}

	export interface MenuCreate extends Omit<CategoryCreate, 'parent'> {
	}

	export interface MenuUpdate extends Partial<MenuCreate> {
		id: number;
	}

	export interface MenusQuery extends Omit<CategoriesQuery, '_fields'> {
		_fields?: Array<keyof Menu>;
	}
}
