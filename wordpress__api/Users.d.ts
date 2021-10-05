/* eslint-disable camelcase */
declare module '@wordpress/api/users' {
	import {Global, Links, order} from '@wordpress/api';

	/**
	 * Users Endpoint.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/users/
	 */
	export interface User {
		id: number;
		name: string;
		url: string;
		description: string;
		link: string;
		slug: string;
		avatar_urls: { [ key: string ]: string };
		meta: { [ key: string ]: any };
		_links: Links;
	}

	/**
	 * User Create.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/users/#create-a-user
	 */
	export interface UserCreate {
		username: string;
		name?: string;
		first_name?: string;
		last_name?: string;
		email: string;
		url?: string;
		description?: string;
		locale?: string;
		nickname?: string;
		slug?: string;
		roles?: string[];
		password: string;
		meta?: { [ key: string ]: any };
	}

	/**
	 * User fields returned when creating, editing, or retrieving a user
	 * under the 'edit' context.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/users/#schema
	 */
	export interface UserEditContext extends Required<UserCreate>, User {

	}


	/**
	 * User Update
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/users/#update-a-user-2
	 */
	export interface UserUpdate extends Partial<Omit<UserCreate, 'username'>> {
		id?: number;
	}



	/**
	 * List Users.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/users/#arguments
	 */
	export interface UsersQuery extends Global<User>{
		page?: number | 1;
		per_page?: number | 10;
		search?: string;
		exclude?: number[];
		include?: number[];
		offset?: number;
		order?: order;
		orderby?: 'id' | 'include' | 'name' | 'registered_date' | 'slug' | 'include_slugs' | 'email' | 'url';
		slug?: string;
		roles?: string[];
		who?: 'authors';
	}
}
