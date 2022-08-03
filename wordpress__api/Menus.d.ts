/**
 * @notice Not available until WP 5.9.
 * @todo Add links to documentation when the WP docs are published.
 */
declare module '@wordpress/api/menus' {
	import {Links, Meta} from '@wordpress/api';
	import {CategoriesQuery, CategoryCreate} from '@wordpress/api/categories';

	export interface Menu {
		auto_add: boolean;
		description: string;
		id: number;
		locations: string[];
		meta: Meta;
		name: string;
		slug: string;
		_links: Links;
	}

	export interface MenuCreate extends Omit<CategoryCreate, 'parent'> {
		auto_add?: boolean;
		locations?: string[];
	}

	export interface MenuUpdate extends Partial<MenuCreate> {
		id: number;
	}

	export interface MenusQuery extends Omit<CategoriesQuery, '_fields'> {
		_fields?: Array<keyof Menu>;
	}
}
