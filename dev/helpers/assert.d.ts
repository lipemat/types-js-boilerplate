/**
 * Taken from the `tsd` package.
 *
 * We don't need all the functionality of `tsd`, just some of the type assertion helpers.
 */

/**
 * Asserts that the type of `expression` is identical to type `T`.
 *
 * @param expression - Expression that should be identical to type `T`.
 */
export declare const expectType: <T>( expression: T ) => void;
/**
 * Asserts that the type of `expression` is assignable to type `T`.
 *
 * @param expression - Expression that should be assignable to type `T`.
 */
export declare const expectAssignable: <T>( expression: T ) => void;
/**
 * Asserts that the type and return type of `expression` is `never`.
 *
 * Useful for checking that all branches are covered.
 *
 * @param expression - Expression that should be `never`.
 */
export declare const expectNever: ( expression: never ) => never;
