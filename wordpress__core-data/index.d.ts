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

	import {DefaultContextOf, EntityQuery, EntityRecordOf, KeyType, Kind, KindOf, Name, NameOf} from '@wordpress/core-data/entity-types';

	export interface Options {
		/**
		 * Whether to run the query or short-circuit and return null.
		 *
		 * @default true
		 */
		enabled: boolean;
	}

	interface EntityRecordResolution<RecordType> {
		/** The requested entity record */
		record: RecordType | undefined;
		/** The edited entity record */
		editedRecord: Partial<RecordType>;
		/** Apply local (in-browser) edits to the edited entity record */
		edit: ( diff: Partial<RecordType> ) => void;
		/** The edits to the edited entity record */
		edits: Partial<RecordType>;
		/** Persist the edits to the server */
		save: () => Promise<void>;
		/**
		 * Is the record still being resolved?
		 */
		isResolving: boolean;
		/**
		 * Does the record have any local edits?
		 */
		hasEdits: boolean;
		/**
		 * Is the record resolved by now?
		 */
		hasResolved: boolean;
		/** Resolution status */
		status: Status;
		/**
		 * The total number of available items (if not paginated).
		 */
		totalItems: number | null;
		/**
		 * The total number of pages.
		 */
		totalPages: number | null;
	}

	interface EntityRecordsResolution<RecordType> extends Omit<EntityRecordResolution<RecordType>, 'record'> {
		/** The requested entity record */
		records: RecordType[] | null;
		/**
		 * Is the record still being resolved?
		 */
		isResolving: boolean;
		/**
		 * Is the record resolved by now?
		 */
		hasResolved: boolean;
		/** Resolution status */
		status: Status;
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
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#useentityrecord
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/core-data/src/hooks/use-entity-record.ts
	 */
	type UseEntityRecord = <R extends EntityRecordOf<K, N>,
		K extends Kind = KindOf<R>,
		N extends Name = NameOf<R>>
	(
		kind: K,
		name: N,
		id: KeyType<R, N>,
		options?: Options,
	) => EntityRecordResolution<EntityRecordOf<K, N>>;

	/**
	 * 1. When query._fields is not given, the returned type is EntityRecordOf<K, N, C>
	 * 2. When query._fields is given, the returned type is Partial<EntityRecordOf<K, N, C>>
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#useentityrecords
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
			query: EntityQuery<C, R, true>,
			options?: Options,
		): EntityRecordsResolution<Partial<EntityRecordOf<K, N, C>>>;

		<R extends EntityRecordOf<K, N>,
			C extends Context = DefaultContextOf<R>,
			K extends Kind = KindOf<R>,
			N extends Name = NameOf<R>>
		(
			kind: K,
			name: N,
			query: EntityQuery<C, R, false>,
			options?: Options,
		): EntityRecordsResolution<EntityRecordOf<K, N, C>>;
	}

	export enum Status {
		Idle = 'IDLE',
		Resolving = 'RESOLVING',
		Error = 'ERROR',
		Success = 'SUCCESS',
	}

	export const useEntityProp: UseEntityProp;
	export const useEntityRecord: UseEntityRecord;
	export const useEntityRecords: UseEntityRecords;

	export type ResourcePermissionsResolution<IdType> = {
		status: Status;
		/**
		 * Is the data still being resolved?
		 */
		isResolving: boolean;
		/** Can the current user create new resources of this type? */
		canCreate: boolean;
	} & ( IdType extends void ? {
		/** Can the current user update resources of this type? */
		canUpdate: boolean;
		/** Can the current user delete resources of this type? */
		canDelete: boolean;
	} : {} )

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#useresourcepermissions
	 */
	export function useResourcePermissions<IdType = void>(
		resource: string,
		id?: IdType
	): [ boolean, ResourcePermissionsResolution<IdType> ];


	export default interface CoreData {
		useEntityProp: UseEntityProp;
		useEntityRecord: UseEntityRecord;
		useEntityRecords: UseEntityRecords;
		useResourcePermissions: typeof useResourcePermissions;
	}
}
