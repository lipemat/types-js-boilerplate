/**
 * Universal utility types for TypeScript.
 *
 * Use to be part of starting-point.
 *
 * @since 1.17.0
 *
 */
declare module '@lipemat/js-boilerplate/utility' {
	/**
	 * Require a minimum of the specified properties on a type.
	 *
	 * @example AtLeast<Post, 'author' | 'post_title'> - post_title and author will be required, the rest optional.
	 */
	export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

	/**
	 * Make specified properties on a type optional.
	 *
	 * @example Optional<Post, 'post_title'|'author'> - post_title and author will be optional.
	 */
	export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

	/**
	 * Make specified properties on a type required.
	 * Leave the rest of the properties as is.
	 *
	 * @example Require<UserUpdate, 'id'> - `id` will be required, the rest left as is.
	 */
	export type Require<T, K extends keyof T> = T & Required<Pick<T, K>>;

	/**
	 * Subtract one types properties from another.
	 *
	 * @example Subtract<Post, {id: number, post_title: string}> - id and post_title
	 * will be removed from the Post definition.
	 *
	 */
	export type Subtract<T extends K, K> = Omit<T, keyof K>;
}
