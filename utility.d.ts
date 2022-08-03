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
	 * Removes all the properties of type never, even the deeply nested ones.
	 *
	 * Used to provider different types based on context by assigning
	 * some properties to never.
	 *
	 * @example OmitNever<{foo: number; bar: never}> - {foo: number}
	 */
	export type OmitNever<T, Converted = {
		[K in keyof T]:
		// If the type of this property (excluding | undefined) is never set it to never.
		Exclude<T[ K ], undefined> extends never ? never :
			// If the type of this property is an object, send it through again.
			T[ K ] extends Record<string, unknown> ? OmitNever<T[ K ]> : T[ K ];
	}> = Pick<Converted, {
		// List all properties, which were not set to never above.
		[K in keyof Converted]: Converted[ K ] extends never ? never : K;
	}[ keyof Converted ]>;

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
