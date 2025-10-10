/**
 * Users API
 */
declare module '@wordpress/api/users' {
	import type {Context, ContextualField, Links, Order} from '@wordpress/api';
	import type {PostMeta} from '@wordpress/api/posts';
	import type {OmitNever} from '@lipemat/js-boilerplate/utility';

	export interface AvatarUrls {
		'24': string;
		'48': string;
		'96': string;
	}

	export type UserReadOnly =
		'id'
		| 'link'
		| 'registered_date'
		| 'capabilities'
		| 'extra_capabilities'
		| 'avatar_urls';

	/**
	 * Users Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/users/
	 */
	export type User<C extends Context = 'view'> = OmitNever<{
		id: number;
		username: ContextualField<string, 'edit', C>;
		name: string;
		first_name: ContextualField<string, 'edit', C>;
		last_name: ContextualField<string, 'edit', C>;
		email: ContextualField<string, 'edit', C>;
		url: string;
		description: string;
		link: string;
		locale: ContextualField<string, 'edit', C>;
		nickname: ContextualField<string, 'edit', C>;
		slug: string;
		registered_date: ContextualField<string, 'edit', C>;
		roles: ContextualField<string[], 'edit', C>;
		capabilities: ContextualField<{ [ cap: string ]: string }, 'edit', C>;
		extra_capabilities: ContextualField<{ [ cap: string ]: string }, 'edit', C>;
		avatar_urls: AvatarUrls;
		meta: ContextualField<PostMeta, 'view' | 'edit', C>;
		_links: Pick<Links, 'self' | 'collection'>;
	}>


	/**
	 * User Create.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/users/#create-a-user
	 */
	export interface UserCreate extends Partial<Omit<User<'edit'>, UserReadOnly>> {
		password?: string;
	}


	/**
	 * User Update
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/users/#update-a-user-2
	 */
	export interface UserUpdate extends UserCreate {
		id: number;
	}


	/**
	 * List Users.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/users/#arguments
	 */
	export interface UsersQuery {
		context?: Context;
		page?: number | 1;
		per_page?: number | 10;
		search?: string;
		exclude?: number[];
		include?: number[];
		offset?: number;
		order?: Order;
		orderby?: 'id' | 'include' | 'name' | 'registered_date' | 'slug' | 'include_slugs' | 'email' | 'url';
		slug?: string;
		roles?: string[];
		capabilities?: string[];
		who?: 'authors';
		_fields?: Array<keyof User>;
		_embed?: boolean;
	}
}
