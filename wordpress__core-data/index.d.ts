/**
 * Core Entity Data
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/
 * @link https://github.com/WordPress/gutenberg/tree/trunk/packages/core-data/src
 *
 * @notice Lots of Type definitions available in the core package.
 */
declare module '@wordpress/core-data' {
	import {Context, Editing} from '@wordpress/api';

	import {
		DefaultContextOf,
		EntityQuery,
		EntityRecordOf,
		KeyType,
		Kind,
		KindOf,
		Name,
		NameOf
	} from '@wordpress/core-data/entity-types';


	interface EntityRecordResolution<RecordType> {
		record: RecordType | null;
		isResolving: boolean;
		hasResolved: boolean;
		status: 'IDLE' | 'RESOLVING' | 'ERROR' | 'SUCCESS';
	}

	/**
	 * 1. When query._fields is not given, the returned type is EntityRecordOf< K, N, C >
	 * 2. When query._fields is given, the returned type is Partial<EntityRecordOf< K, N, C >>
	 *
	 * Plural form adjustments
	 * 1. Does not use the `key` parameter.
	 * 2. Returns an array instead of single.
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/core-data/src/selectors.ts#L535
	 */
	interface GetEntityRecord<Plural> {
		<R extends EntityRecordOf<K, N>,
			C extends Context = DefaultContextOf<R>,
			K extends Kind = KindOf<R>,
			N extends Name = NameOf<R>>
		(
			kind: K,
			name: N,
			key: Plural extends true ? EntityQuery<C, R, true> : KeyType<R, N>,
			query?: Plural extends true ? never : EntityQuery<C, R, true>
		): ( Plural extends true ? Partial<EntityRecordOf<K, N, C>>[] : Partial<EntityRecordOf<K, N, C>> ) | null | undefined;

		<R extends EntityRecordOf<K, N>,
			C extends Context = DefaultContextOf<R>,
			K extends Kind = KindOf<R>,
			N extends Name = NameOf<R>>
		(
			kind: K,
			name: N,
			key: Plural extends true ? EntityQuery<C, R, false> : KeyType<R, N>,
			query?: Plural extends true ? never : EntityQuery<C, R, false>
		): ( Plural extends true ? EntityRecordOf<K, N, C>[] : EntityRecordOf<K, N, C> ) | null | undefined;
	}

	export type getEntityRecord = GetEntityRecord<false>;
	export type getEntityRecords = GetEntityRecord<true>;

	/**
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/core-data/src/entity-provider.js#85
	 */
	type UseEntityProp = <R extends EntityRecordOf<K, N, 'edit'>,
		P extends keyof EntityRecordOf<K, N, 'edit'>,
		K extends Kind = KindOf<R>,
		N extends Name = NameOf<R>>
	(
		kind: K,
		name: N,
		key: P,
		id: KeyType<R, N>
	) => [
		Editing<EntityRecordOf<K, N, 'edit'>>[P], // Getter.
		( value: Required<Editing<EntityRecordOf<K, N, 'edit'>>>[P] ) => void, // Setter.
		EntityRecordOf<K, N, 'edit'>[P] // Raw.
	];

	/**
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/core-data/src/hooks/use-entity-record.ts
	 */
	type UseEntityRecord = <R extends EntityRecordOf<K, N>,
		K extends Kind = KindOf<R>,
		N extends Name = NameOf<R>>
	(
		kind: K,
		name: N,
		id: KeyType<R, N>,
	) => EntityRecordResolution<EntityRecordOf<K, N>>;

	/**
	 * 1. When query._fields is not given, the returned type is EntityRecordOf<K, N, C>
	 * 2. When query._fields is given, the returned type is Partial<EntityRecordOf<K, N, C>>
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/core-data/src/hooks/use-entity-records.ts
	 */
	interface UseEntityRecords {
		<R extends EntityRecordOf<K, N>,
			C extends Context = DefaultContextOf<R>,
			K extends Kind = KindOf<R>,
			N extends Name = NameOf<R>>
		(
			kind: K,
			name: N,
			query: EntityQuery<C, R, true>
		): EntityRecordResolution<Partial<EntityRecordOf<K, N, C>>[]>;

		<R extends EntityRecordOf<K, N>,
			C extends Context = DefaultContextOf<R>,
			K extends Kind = KindOf<R>,
			N extends Name = NameOf<R>>
		(
			kind: K,
			name: N,
			query: EntityQuery<C, R, false>
		): EntityRecordResolution<EntityRecordOf<K, N, C>[]>;
	}

	export const useEntityProp: UseEntityProp;
	/**
	 * @internal Not yet available until WP core 6.1.0.
	 */
	export const useEntityRecord: UseEntityRecord;
	/**
	 * @internal Not yet available until WP core 6.1.0.
	 */
	export const useEntityRecords: UseEntityRecords;
	export default interface CoreData {
		useEntityProp: UseEntityProp;
		seEntityRecord: UseEntityRecord;
		useEntityRecords: UseEntityRecords;
	}
}
