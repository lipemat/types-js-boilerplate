/**
 * Core Entity Data
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/
 * @link https://github.com/WordPress/gutenberg/tree/trunk/packages/core-data/src
 *
 * @notice Lots of Type definitions available in the core package.
 */
declare module '@wordpress/core-data' {
	import {Context} from '@wordpress/api';

	import {
		DefaultContextOf,
		EntityQuery,
		EntityRecordOf,
		KeyOf,
		Kind,
		KindOf,
		Name,
		NameOf
	} from '@wordpress/core-data/entity-types';

	/**
	 * 1. When query._fields is not given, the returned type is EntityRecordOf< K, N, C >
	 * 2. When query._fields is given, the returned type is Partial<EntityRecordOf< K, N, C >>
	 *
	 * Plural form adjustments
	 * 1. Does not use the `key` parameter.
	 * 2. Returns an array instead of single.
	 */
	interface GetEntityRecord<Plural> {
		<R extends EntityRecordOf<K, N>,
			C extends Context = DefaultContextOf<R>,
			K extends Kind = KindOf<R>,
			N extends Name = NameOf<R>>
		(
			kind: K,
			name: N,
			key: Plural extends true ? EntityQuery<C, R, true> : KeyOf<K, N>,
			query?: Plural extends true ? never : EntityQuery<C, R, true>
		): Plural extends true ? Partial<EntityRecordOf<K, N, C>>[] : Partial<EntityRecordOf<K, N, C>> | null | undefined;

		<R extends EntityRecordOf<K, N>,
			C extends Context = DefaultContextOf<R>,
			K extends Kind = KindOf<R>,
			N extends Name = NameOf<R>>
		(
			kind: K,
			name: N,
			key: Plural extends true ? EntityQuery<C, R, false> : KeyOf<K, N>,
			query?: Plural extends true ? never : EntityQuery<C, R, false>
		): Plural extends true ? EntityRecordOf<K, N, C>[] : EntityRecordOf<K, N, C> | null | undefined;
	}

	export type getEntityRecord = GetEntityRecord<false>;
	export type getEntityRecords = GetEntityRecord<true>;

	type useEntityProp = <R extends EntityRecordOf<K, N>,
		Key extends keyof EntityRecordOf<K, N, C>,
		C extends Context = DefaultContextOf<R>,
		K extends Kind = KindOf<R>,
		N extends Name = NameOf<R>>
	(
		kind: K,
		name: N,
		key: Key
	) => [ EntityRecordOf<K, N, C>[Key], ( value: EntityRecordOf<K, N, C>[Key] ) => void ];

	type useEntityRecords = GetEntityRecord<true>;


	export const useEntityProp: useEntityProp;
	export const useEntityRecords: useEntityRecords;
	export default interface CoreData {
		useEntityProp: useEntityProp;
		useEntityRecords: useEntityRecords;
	}
}
