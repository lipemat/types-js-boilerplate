/**
 * Statuses API
 *
 * @link https://developer.wordpress.org/rest-api/reference/statuses/
 */
declare module '@wordpress/api/statuses' {
	import {Context, ContextualField} from '@wordpress/api';
	import {OmitNever} from '@lipemat/js-boilerplate/utility';

	/**
	 * Statuses Schema.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/post-statuses/#schema
	 */
	export type Status<C extends Context = 'view'> = OmitNever<{
		date_floating: ContextualField<boolean, 'view' | 'edit', C>;
		name: string;
		private: ContextualField<boolean, 'edit', C>;
		protected: ContextualField<boolean, 'edit', C>;
		public: ContextualField<boolean, 'view' | 'edit', C>;
		queryable: ContextualField<boolean, 'view' | 'edit', C>;
		show_in_list: ContextualField<boolean, 'edit', C>;
		slug: string;
		_links: {
			archives: [ {
				href: string;
			} ]
		}
	}>;

	/**
	 * Statuses Query.
	 *
	 * @link https://developer.wordpress.org/rest-api/reference/post-statuses/#retrieve-a-status-2
	 */
	export type StatusQuery<C extends Context = 'view'> = {
		context?: C;
	}
}
