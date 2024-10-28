/**
 * Tags API.
 *
 * @link https://developer.wordpress.org/rest-api/reference/tags/
 */
declare module '@wordpress/api/tags' {
	import type {OmitNever} from '@lipemat/js-boilerplate/utility';
	import type {Context} from '@wordpress/api';
	import type {CategoriesQuery, Category} from '@wordpress/api/categories';

	/**
	 * Tags Schema.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/tags/#schema
	 */
	export type Tag<C extends Context = 'view'> = OmitNever<Omit<Category<C>, 'parent'>> & {}

	/**
	 * Create a tag.
	 *
	 * https://developer.wordpress.org/rest-api/reference/tags/#create-a-tag
	 */
	export interface TagCreate extends Partial<Tag<'edit'>> {

	}

	/**
	 * Update a tag.
	 *
	 * https://developer.wordpress.org/rest-api/reference/tags/#update-a-tag
	 */
	export interface TagUpdate extends TagCreate {
		id: number;
	}


	/**
	 * List tags.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/tags/#list-tags
	 */
	export interface TagsQuery extends Omit<CategoriesQuery, 'parent'> {
	}
}
