/**
 * Universal utility types for TypeScript.
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
	export type AtLeast<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>;

	/**
	 * Same as `keyof` except only keys whose value of a specified
	 * type will be returned.
	 *
	 * @example ```ts
	 *          type Post = {id: number, title: string, url: string}
	 *          KeysOfType<Post, string> - 'id' will not be included because is not string = 'title'|'url'
	 *          ```
	 */
	export type KeysOfType<T, K> = { [I in keyof T]: T[I] extends K ? I : never }[keyof T]

	/**
	 * Removes all the properties of type never, even the deeply nested ones.
	 *
	 * Used to provider different types based on context by assigning
	 * some properties to never.
	 *
	 * @notice Will not work properly of sub items are an `interface` they
	 *         must be a `type`.
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
		// List all properties which were not set to never above.
		[K in keyof Converted]: Converted[ K ] extends never ? never : K;
	}[ keyof Converted ]>;

	/**
	 * Make specified properties on a type optional.
	 *
	 * @example `Optional<Post, 'post_title'|'author'>` - `post_title` and `author` will be optional.
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

	/**
	 * Exclude all top-level properties in an object that are of a type.
	 *
	 * @example ExcludeOfType<{y:'false':x:false}, boolean> = {y:'false'}
	 */
	export type ExcludeOfType<T, Type> = Pick<T, {
		[P in keyof T]: T[P] extends Type ? never : P
	}[keyof T]>

	/**
	 * Union from array elements.
	 *
	 * Useful for passing to `Pick`.
	 *
	 * @example UnionOfArray<['one', 2, 'three']> - `'one' | 2 | 'three'`.
	 */
	export type UnionOfArray<A extends Readonly<unknown[]>> = A[number];

	/**
	 * Combine two types, making all properties optional which
	 * do not intersect.
	 *
	 * @example OptionalNonIntersect<{foo: string, bar: number}, {foo: string, waz: boolean}> - `{foo: string, bar?: number, waz?: boolean}`.
	 *
	 */
	export type OptionalNonIntersect<T, U> =
		Pick<T, Extract<keyof T, keyof U>> &
		{
			[P in Exclude<keyof T | keyof U, Extract<keyof T, keyof U>>]?: P extends keyof T ? T[P] : P extends keyof U ? U[P] : never;
		};
}
