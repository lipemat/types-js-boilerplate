/**
 * Definitions for the `@wordpress/data` package.
 *
 * Some are included in global types for individual packages,
 * however the definitions are not always right or complete, so we
 * have to keep our overrides indefinitely.
 *
 * @link https://github.com/WordPress/gutenberg/tree/trunk/packages/data
 */
declare module '@wordpress/data' {
	import {BlockSettings, BlockVariation, CreateBlock, createBlock, IconObject, WPBlockVariationScope} from '@wordpress/blocks';
	import {PostEditing} from '@wordpress/edit-post';
	import {Taxonomy} from '@wordpress/api/taxonomies';
	import {Settings} from '@wordpress/api/settings';
	import {Type} from '@wordpress/api/types';
	import {Media} from '@wordpress/api/media';
	import {Action, NoticeOptions, Status} from '@wordpress/notices';
	import {ComponentType, DependencyList} from 'react';
	import type {getEntityRecord, getEntityRecords} from '@wordpress/core-data';

	/**
	 * @deprecated In favor of CreateBlock;
	 */
	export interface BlockClientId<Attr = { [ key: string ]: any }, I = []> extends CreateBlock {
	}

	export type StateValue =
		| { status: 'resolving' | 'finished' }
		| { status: 'error'; error: Error | unknown }

	/**
	 * The shape of a blocks' configuration when used in the
	 * context of the block inserter.
	 */
	export interface WPEditorInserterItem<Attr = { [ key: string ]: any }> {
		id: string;
		name: string;
		initialAttributes: Attr;
		title: string;
		icon: IconObject;
		category: string;
		keywords: string[];
		isDisabled: boolean;
		frecency: number;
	}

	/**
	 * Available editor panels (non exhaustive).
	 *
	 * @notice Meta boxes have a `meta-box-` prefix before
	 *         their id. (e.g. meta-box-lipe_project_box)
	 *
	 * @link https://wordpress.stackexchange.com/a/339437/129914
	 */
	export type editorPanels =
		'discussion-panel' |
		'featured-image' |
		'page-attributes' |
		'post-excerpt' |
		'post-link' |
		'taxonomy-panel-category' |
		'taxonomy-panel-post_tag' |
		string;

	/**
	 * Preferences for the active editor.
	 */
	export type editPostPreferences = {
		editorMode: 'visual' | 'text';
		features: {
			fixedToolbar: boolean;
			focusMode: boolean;
			fullscreenMode: boolean;
			showInserterHelpPanel: boolean;
			welcomeGuide: boolean;
		}
		hiddenBlockTypes: [];
		isGeneralSidebarDismissed: boolean;
		localAutosaveInterval: number;
		panels: {
			[ panel: string ]: {
				opened: boolean;
			}
		}
		pinnedPluginItems: {}
		preferredStyleVariations: {}
	}


	type ActionValue = { [ key: string ]: any } & { type: string };
	type ActionFunctions = { [ name: string ]: ( ...params: any ) => ActionValue };
	type SelectFunctions<State> = { [ name: string ]: ( ...params: any ) => any }
	// Selectors receive a prepended `state` parameter.
	type SelectorFactory<State, S extends ( ...params: any ) => any> = Parameters<S> extends []
		? ( state: State ) => ReturnType<S>
		: ( state: State, ...params: Parameters<S> ) => ReturnType<S>;

	interface StoreDescriptor<State, Selectors, Actions> {
		name: string;
		instantiate: () => StoreInstance<State, Selectors, Actions>;
	}

	interface StoreInstance<State, Selectors, Actions> {
		actions: Actions;
		dispatch: ( action: ActionValue ) => State;
		getActions: () => Actions;
		getResolveSelectors: () => Partial<Selectors>;
		getSelectors: () => Selectors;
		reducer: ( state: State, action: ActionValue ) => State;
		resolvers: Partial<Selectors> | undefined;
		selectors: Selectors;
		store: {
			dispatch: ( action: ActionValue ) => State;
			getState: () => State;
			subscribe: ( listener: () => void ) => () => void;
		};
		subscribe: ( listener: () => void ) => () => void;
	}

	/**
	 * Register a custom store
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#registering-a-store
	 */
	export function createReduxStore<State, Actions extends ActionFunctions, Selectors extends SelectFunctions<State>>( store: string, config: {
		initialState?: State;
		reducer: ( state: State, action: ActionValue ) => State;
		actions?: Actions;
		resolvers?: Partial<Selectors>;
		selectors?: {
			[Property in keyof Selectors]: SelectorFactory<State, Selectors[Property]>
		};
		controls?: Action;
	} ): StoreDescriptor<State, Selectors, Actions>

	export function register<State, Actions extends ActionFunctions, Selectors extends SelectFunctions<State>>( store: StoreDescriptor<State, Selectors, Actions> ): void;

	/**
	 * Selectors shared by all stores.
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/data/src/redux-store/metadata/selectors.js
	 */
	export type SelectShared<T> = {
		getCachedResolvers: () => T;
		getIsResolving: ( selector: keyof T, args?: Array<any> ) => boolean;
		getResolutionError: ( property: keyof T ) => Error | null;
		getResolutionState: ( property: keyof T ) => StateValue;
		hasFinishedResolution: ( selector: keyof T, args?: Array<any> ) => boolean;
		hasResolutionFailed: ( property: keyof T ) => boolean;
		hasStartedResolution: ( selector: keyof T, args?: Array<any> ) => any;
		isResolving: ( selector: keyof T, args?: Array<any> ) => any;
	}


	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core/
	 */
	type Core = {
		canUser: ( action: 'create' | 'read' | 'update' | 'delete', endpoint: string, id?: string ) => boolean;
		getEntityRecord: getEntityRecord;
		getEntityRecords: getEntityRecords;
		getMedia: ( id: number ) => Media;
		getMediaItems: () => Media[ ];
		getPostType: ( slug: string ) => Type;
		getPostTypes: () => Type[];
		getSite: () => Settings;
		getTaxonomies: () => Taxonomy[] | undefined;
		getTaxonomy: ( slug: string ) => Taxonomy | undefined;
		hasFetchedAutosaves: () => boolean;
		hasRedo: () => boolean;
		hasUndo: () => boolean;
		isAutosavingEntityRecord: () => boolean;
		isPreviewEmbedFallback: () => boolean;
		isRequestingEmbedPreview: () => boolean;
		isSavingEntityRecord: () => boolean;

		// @todo properly type the rest of these as needed.
		getAuthors: () => any;
		getAutosave: ( id: string ) => any;
		getAutosaves: () => any;
		getCurrentUser: () => any;
		getEmbedPreview: ( id: number ) => any;
		getEntitiesConfig: ( kind: string ) => any[];
		getEntityConfig: ( kind: string, name: string ) => any;
		getEntityRecordEdits: ( kind: string, name: string, id: string ) => any;
		getLastEntitySaveError: () => any;
		getRawEntityRecord: () => any;
		getRedoEdit: () => any;
		getThemeSupports: ( support: string ) => any;
		getUndoEdit: () => any;
		getUserQueryResults: () => any;
		getWidgetArea: ( slug: string ) => any;
		getWidgetAreas: () => any;
	};

	export function select( store: 'core' ): Core & SelectShared<Core>;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/
	 */
	type CoreEditor = {
		/**
		 * Returns the post currently being edited in its last known saved state, not
including unsaved edits.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getCurrentPost
		 */
		getCurrentPost: <T = PostEditing>() => T;
		/**
		 * Returns the post type of the post currently being edited.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getCurrentPostType
		 */
		getCurrentPostType: () => string;
		/**
		 * Returns a property value from the saved post.
		 * Does not account for current unsaved edits.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getCurrentPostAttribute
		 *
		 * @see getEditedPostAttribute
		 */
		getCurrentPostAttribute: <T = PostEditing, K extends keyof T = keyof T>( attribute: K ) => T[K];
		/**
		 * Returns the ID of the post currently being edited, or null if the post has
not yet been saved.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getCurrentPostId
		 */
		getCurrentPostId: () => number;
		/**
		 * Returns a property value from post being edited.
		 * Will return unsaved edits.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getEditedPostAttribute
		 */
		getEditedPostAttribute: <T = PostEditing, K extends keyof T = keyof T>( attribute: K ) => T[K];
		/**
		 * @deprecated
		 */
		getBlocks: <T = Array<BlockClientId>>( state?: object, rootClientId?: string ) => T;
		/**
		 * @deprecated
		 */
		getSelectedBlockClientId: () => null | string;
		/**
		 * Is the current post locked.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#isPostLocked
		 */
		isPostLocked: () => boolean;
		/**
		 * Is saving locked for the current post?
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#isPostSavingLocked
		 */
		isPostSavingLocked: () => boolean;

		// @todo properly type the rest of these as needed.
		canInsertBlockType: () => any;
		canUserUseUnfilteredHTML: () => any;
		didPostSaveRequestFail: () => any;
		didPostSaveRequestSucceed: () => any;
		getActivePostLock: () => any;
		getAdjacentBlockClientId: () => any;
		getBlock: () => any;
		getBlockAttributes: () => any;
		getBlockCount: () => any;
		getBlockHierarchyRootClientId: () => any;
		/** @deprecated **/
		getBlockIndex: () => any;
		getBlockInsertionPoint: () => any;
		getBlockListSettings: () => any;
		getBlockMode: () => any;
		getBlockName: () => any;
		getBlockOrder: () => any;
		getBlockRootClientId: () => any;
		getBlockSelectionEnd: () => any;
		getBlockSelectionStart: () => any;
		getBlocksByClientId: () => any;
		getCachedResolvers: () => any;
		getClientIdsOfDescendants: () => any;
		getClientIdsWithDescendants: () => any;
		getCurrentPostLastRevisionId: () => any;
		getCurrentPostRevisionsCount: () => any;
		getEditedPostContent: () => any;
		getEditedPostPreviewLink: () => any;
		getEditedPostSlug: () => any;
		getEditedPostVisibility: () => any;
		getEditorBlocks: () => any;
		getEditorSettings: () => any;
		getFirstMultiSelectedBlockClientId: () => any;
		getGlobalBlockCount: () => any;
		getInserterItems: () => any;
		getLastMultiSelectedBlockClientId: () => any;
		getMultiSelectedBlockClientIds: () => any;
		getMultiSelectedBlocks: () => any;
		getMultiSelectedBlocksEndClientId: () => any;
		getMultiSelectedBlocksStartClientId: () => any;
		getNextBlockClientId: () => any;
		getPermalink: () => any;
		getPermalinkParts: () => any;
		getPostEdits: () => any;
		getPostLockUser: () => any;
		getPreviousBlockClientId: () => any;
		getSelectedBlock: () => any;
		getSelectedBlockCount: () => any;
		getSelectedBlocksInitialCaretPosition: () => any;
		getSuggestedPostFormat: () => any;
		getTemplate: () => any;
		getTemplateLock: () => any;
		hasChangedContent: () => any;
		hasEditorRedo: () => any;
		hasEditorUndo: () => any;
		hasInserterItems: () => any;
		hasMultiSelection: () => any;
		hasNonPostEntityChanges: () => any;
		hasSelectedBlock: () => any;
		hasSelectedInnerBlock: () => any;
		isAncestorMultiSelected: () => any;
		isAutosavingPost: () => any;
		isBlockInsertionPointVisible: () => any;
		isBlockMultiSelected: () => any;
		isBlockSelected: () => any;
		isBlockValid: () => any;
		isBlockWithinSelection: () => any;
		isCaretWithinFormattedText: () => any;
		isCleanNewPost: () => any;
		isCurrentPostPending: () => any;
		isCurrentPostPublished: () => any;
		isCurrentPostScheduled: () => any;
		isEditedPostAutosaveable: () => any;
		isEditedPostBeingScheduled: () => any;
		isEditedPostDateFloating: () => any;
		isEditedPostDirty: () => any;
		isEditedPostEmpty: () => any;
		isEditedPostNew: () => any;
		isEditedPostPublishable: () => any;
		isEditedPostSaveable: () => any;
		isFirstMultiSelectedBlock: () => any;
		isMultiSelecting: () => any;
		isPermalinkEditable: () => any;
		isPostAutosavingLocked: () => any;
		isPostLockTakeover: () => any;
		isPreviewingPost: () => any;
		isPublishSidebarEnabled: () => any;
		isPublishingPost: () => any;
		isSavingPost: () => any;
		isSelectionEnabled: () => any;
		isTyping: () => any;
		isValidTemplate: () => any;
	}

	export function select( store: 'core/editor' ): CoreEditor & SelectShared<CoreEditor>;

	/**
	 * The Block Editor’s Data
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#selectors
	 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__block-editor/store/selectors.d.ts
	 */
	type CoreBlockEditor = {
		/**
		 * Return all blocks currently in the editor.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getBlocks
		 */
		getBlocks: <T = CreateBlock[]>( rootClientId?: string ) => T;
		/**
		 * Return all block attributes by block client id.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockattributes
		 */
		getBlockAttributes: <Att>( clientId: string ) => null | Att;
		/**
		 * Get number of blocks in post or inner blocks within a block
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockcount
		 */
		getBlockCount: ( clientId?: string ) => number;
		/**
		 * Get index of a root block in the editor or the index
		 * of an inner block within inner blocks.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getblockindex
		 */
		getBlockIndex: ( clientId?: string ) => number;
		/**
		 * Get all block client IDs in the editor or inner blocks in the order they appear.
		 * they appear
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockorder
		 */
		getBlockOrder: ( clientId?: string ) => string[];
		/**
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockrootclientid
		 */
		getBlockRootClientId: ( clientId: string ) => string | undefined;
		/**
		 * Get block objects from a list of client ids.
		 *
		 * Supports passing only ids without state as the documentation suggests.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblocksbyclientid
		 */
		getBlocksByClientId: <Attr = { [ key: string ]: any }, I = []>( clientIds: string[] ) => Array<CreateBlock<Attr, I>>;
		/**
		 * Get full list of blocks shown in the block inserter.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getinserteritems
		 */
		getInserterItems: ( clientId?: string ) => WPEditorInserterItem[];
		/**
		 * Returns the currently selected block client ID or null
		 * if no or only one block is selected.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getmultiselectedblockclientids
		 */
		getMultiSelectedBlockClientIds: () => null | Array<string>;
		/**
		 * Returns the currently selected blocks or null if no or
		 * only one block is selected.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getmultiselectedblocks
		 */
		getMultiSelectedBlocks: () => null | Array<BlockClientId>;
		/**
		 * Returns the currently selected block or null if no or
		 * multiple blocks are selected.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getselectedblock
		 */
		getSelectedBlock: () => null | BlockClientId;
		/**
		 * Returns the currently selected block client ID, or null
		 * if there are no or multiple selected blocks.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getSelectedBlockClientId
		 */
		getSelectedBlockClientId: () => null | string;
		/**
		 * Returns the current selection set of block client IDs
		 * (multiselection or single selection).
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getSelectedBlockClientIds
		 */
		getSelectedBlockClientIds: () => string[];

		// @todo properly type the rest of these as needed.
		areInnerBlocksControlled: () => any;
		canInsertBlockType: () => any;
		canInsertBlocks: () => any;
		didAutomaticChange: () => any;
		getAdjacentBlockClientId: () => any;
		getBlock: () => any;
		getBlockHierarchyRootClientId: () => any;
		getBlockInsertionPoint: () => any;
		getBlockListSettings: () => any;
		getBlockMode: () => any;
		getBlockName: () => any;
		getBlockParents: () => any;
		getBlockParentsByBlockName: () => any;
		getBlockSelectionEnd: () => any;
		getBlockSelectionStart: () => any;
		getBlockTransformItems: () => any;
		getCachedResolvers: () => any;
		getClientIdsOfDescendants: () => any;
		getClientIdsWithDescendants: () => any;
		getDraggedBlockClientIds: () => any;
		getFirstMultiSelectedBlockClientId: () => any;
		getGlobalBlockCount: () => any;
		getLastMultiSelectedBlockClientId: () => any;
		getLowestCommonAncestorWithSelectedBlock: () => any;
		getMultiSelectedBlocksEndClientId: () => any;
		getMultiSelectedBlocksStartClientId: () => any;
		getNextBlockClientId: () => any;
		getPreviousBlockClientId: () => any;
		getSelectedBlockCount: () => any;
		getSelectedBlocksInitialCaretPosition: () => any;
		getSelectionEnd: () => any;
		getSelectionStart: () => any;
		getSettings: () => any;
		getTemplate: () => any;
		getTemplateLock: () => any;
		hasBlockMovingClientId: () => any;
		hasInserterItems: () => any;
		hasMultiSelection: () => any;
		hasSelectedBlock: () => any;
		hasSelectedInnerBlock: () => any;
		isAncestorBeingDragged: () => any;
		isAncestorMultiSelected: () => any;
		isBlockBeingDragged: () => any;
		isBlockHighlighted: () => any;
		isBlockInsertionPointVisible: () => any;
		isBlockMultiSelected: () => any;
		isBlockSelected: () => any;
		isBlockValid: () => any;
		isBlockWithinSelection: () => any;
		isCaretWithinFormattedText: () => any;
		isDraggingBlocks: () => any;
		isFirstMultiSelectedBlock: () => any;
		isLastBlockChangePersistent: () => any;
		isMultiSelecting: () => any;
		isNavigationMode: () => any;
		isSelectionEnabled: () => any;
		isTyping: () => any;
		isValidTemplate: () => any;
	}

	export function select( store: 'core/block-editor' ): CoreBlockEditor & SelectShared<CoreBlockEditor>;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-edit-post/
	 */
	type CoreEditPost = {
		getEditorMode: () => 'visual' | 'text';
		getPreference: <K extends keyof editPostPreferences>( kee: K ) => editPostPreferences[K];
		getPreferences: () => editPostPreferences;
		isEditorSidebarOpened: () => boolean;
		isFeatureActive: ( feature: keyof editPostPreferences['features'] ) => boolean;
		isPluginSidebarOpened: () => boolean;
		isPublishSidebarOpened: () => boolean;

		// @todo properly type the rest of these as needed.
		getActiveGeneralSidebarName: ( key?: string ) => any;
		getActiveMetaBoxLocations: ( key?: string ) => any;
		getAllMetaBoxes: ( key?: string ) => any;
		getMetaBoxesPerLocation: ( key?: string ) => any;
		hasMetaBoxes: ( key?: string ) => any;
		isEditorPanelEnabled: ( key?: string ) => any;
		isEditorPanelOpened: ( key?: string ) => any;
		isEditorPanelRemoved: ( key?: string ) => any;
		isMetaBoxLocationActive: ( key?: string ) => any;
		isMetaBoxLocationVisible: ( key?: string ) => any;
		isModalActive: ( key?: string ) => any;
		isPluginItemPinned: ( key?: string ) => any;
		isSavingMetaBoxes: ( key?: string ) => any;
	}

	export function select( store: 'core/edit-post' ): CoreEditPost & SelectShared<CoreEditPost>;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-edit-site/#selectors
	 */
	type CoreEditSite = {
		getCanUserCreateMedia: () => any;
		getCurrentTemplateNavigationPanelSubMenu: () => any;
		getCurrentTemplateTemplateParts: () => any;
		getEditedPostId: () => any;
		getEditedPostType: () => any;
		getEditorMode: () => any;
		getHomeTemplateId: () => any;
		getIsResolving: () => any;
		getNavigationPanelActiveMenu: () => any;
		getPage: () => any;
		getReusableBlocks: () => any;
		getSettings: () => any;
		isFeatureActive: () => any;
		isInserterOpened: () => any;
		isListViewOpened: () => any;
		isNavigationOpened: () => any;
	}

	export function select( store: 'core/edit-site' ): CoreEditSite & SelectShared<CoreEditSite>;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-blocks/
	 */
	export type CoreBlocks = {
		/**
		 * Get full block registration by name.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-blocks/#getblocktype
		 */
		getBlockType: <Attr = Object>( name: string ) => BlockSettings<Attr>;
		/**
		 * Get a blocks variations.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-blocks/#getblockvariations;
		 */
		getBlockVariations: <Attr = Object>( name: string, scope?: WPBlockVariationScope ) => Array<BlockVariation<Attr> | undefined>;
		/**
		 * Get a blocks default variation by name.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-blocks/#getdefaultblockvariation
		 */
		getDefaultBlockVariation: <Attr = Object>( name: string, scope?: WPBlockVariationScope ) => BlockVariation<Attr> | undefined;

		// @todo properly type the rest of these as needed.
		// @todo As these are typed, add the definitions to @wordpress/blocks see getBlockType as an example.
		getActiveBlockVariation: () => any;
		getBlockStyles: () => any;
		getBlockSupport: () => any;
		getBlockTypes: () => Array<BlockSettings<any>>;
		getCategories: () => any;
		getChildBlockNames: () => any;
		getCollections: () => any;
		getDefaultBlockName: () => any;
		getFreeformFallbackBlockName: () => any;
		getGroupingBlockName: () => any;
		getUnregisteredFallbackBlockName: () => any;
		hasBlockSupport: () => any;
		hasChildBlocks: () => any;
		hasChildBlocksWithInserterSupport: () => any;
		isMatchingSearchTerm: () => any;
	}

	export function select( store: 'core/blocks' ): CoreBlocks & SelectShared<CoreBlocks>;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-notices/#selectors
	 */
	type CoreNotices = {
		getNotices: () => any;
	};

	export function select( store: 'core/notices' ): CoreNotices & SelectShared<CoreNotices>;

	/**
	 * A special overload for handling `useSelect.
	 *
	 * `useSelect` accepts either a string, or a callback function.
	 * It is impossible to pass `typeof select`, and a callback in a type.
	 * Instead, we overload the `select` and use it for both.
	 *
	 * Technically this creates incorrect types when calling `select` directly
	 * as it does not support a callback.
	 *
	 * @notice The object returned from the callback is used for memo cache and
	 *         must not contain anonymous functions.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useselect
	 */
	export function select<T>( callback: ( selectFunction: typeof select ) => T, deps?: DependencyList ): T;

	export function select<State, Methods extends SelectFunctions<State>>( store: string ): Methods;

	export function dispatch( store: 'core' ): {
		// @todo properly type the rest of these as needed.
		addEntities: ( key?: string ) => any;
		editEntityRecord: ( key?: string ) => any;
		finishResolution: ( key?: string ) => any;
		invalidateResolution: ( key?: string ) => any;
		invalidateResolutionForStore: ( key?: string ) => any;
		invalidateResolutionForStoreSelector: ( key?: string ) => any;
		receiveAutosaves: ( key?: string ) => any;
		receiveCurrentUser: ( key?: string ) => any;
		receiveEmbedPreview: ( key?: string ) => any;
		receiveEntityRecords: ( key?: string ) => any;
		receiveThemeSupports: ( key?: string ) => any;
		receiveUploadPermissions: ( key?: string ) => any;
		receiveUserPermission: ( key?: string ) => any;
		receiveUserQuery: ( key?: string ) => any;
		redo: ( key?: string ) => any;
		saveEditedEntityRecord: ( key?: string ) => any;
		saveEntityRecord: ( key?: string ) => any;
		saveMedia: ( key?: string ) => any;
		savePostType: ( key?: string ) => any;
		saveSite: ( key?: string ) => any;
		saveTaxonomy: ( key?: string ) => any;
		saveUser: ( key?: string ) => any;
		saveWidgetArea: ( key?: string ) => any;
		startResolution: ( key?: string ) => any;
		undo: ( key?: string ) => any;
	}

	/**
	 * The Block Editor’s Data
	 *
	 * @notice The Global types have incorrect non-promise returns.
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#actions
	 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__block-editor/store/actions.d.ts
	 */
	export function dispatch( store: 'core/block-editor' ): {
		/**
		 * Select a block in the editor based on id.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#selectBlock
		 */
		selectBlock: <A = {}, I = []>( clientId: string, initialPosition?: number ) => CreateBlock<A, I>;
		/**
		 * Unselect all blocks.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#clearSelectedBlock
		 */
		clearSelectedBlock: () => Promise<{
			type: 'CLEAR_SELECTED_BLOCK';
		}>;
		/**
		 * Insert a single block into the editor or inner blocks of
		 * supplied clientId.
		 *
		 * @see createBlock
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#insertblock
		 */
		insertBlock: ( block: CreateBlock, index?: number, clientId?: string, updateSelection?: boolean, meta?: Object ) => Promise<undefined>;
		/**
		 * Insert blocks into the editor or inner blocks of supplied clientId.
		 *
		 * @see createBlock
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#insertblocks
		 */
		insertBlocks: ( blocks: CreateBlock[], index?: number, clientId?: string, updateSelection?: boolean, initialPosition?: 0 | -1 | null, meta?: Object ) => Promise<undefined>;
		/**
		 * Insert empty block after given block.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#insertafterblock
		 */
		insertAfterBlock: ( clientId: string ) => Promise<undefined>;
		/**
		 * Insert empty block before given block.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#insertafterblock
		 */
		insertBeforeBlock: ( clientId: string ) => Promise<undefined>;
		/**
		 * Remove a single block by client id.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#removeblock
		 */
		removeBlock: ( clientId: string, selectPrevious: boolean ) => Promise<undefined>;
		/**
		 * Remove blocks by client ids.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#removeblocks
		 */
		removeBlocks: ( clientId: string[], selectPrevious: boolean ) => Promise<undefined>;
		/**
		 * Replace a single block with one or more replacement blocks.
		 *
		 * @see createBlock
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#replaceblock
		 */
		replaceBlock: ( clientIds: string, blocks: CreateBlock | CreateBlock[] ) => Promise<undefined>;
		/**
		 * Replace blocks with other blocks.
		 *
		 * @see @see createBlock
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#replaceblocks
		 */
		replaceBlocks: (
			clientIds: string | string[],
			blocks: CreateBlock | CreateBlock[],
			index: number,
			initialPosition: 0 | -1 | null,
			meta?: { [ key: string ]: any },
		) => Promise<undefined>;
		/**
		 * Replace innerblocks by client id.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#replaceinnerblocks
		 */
		replaceInnerBlocks: ( clientId: string, blocks: CreateBlock | CreateBlock[], updateSelection?: boolean, initialPosition?: 0 | -1 | null ) => Promise<{
			blocks: typeof blocks;
			initialPosition: typeof initialPosition
			rootClientId: string;
			time: number;
			type: 'REPLACE_INNER_BLOCKS'
			updateSelection: boolean;
		}>
		/**
		 * Enable or disabled block selection.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#toggleselection
		 */
		toggleSelection: ( enabled: boolean ) => Promise<{
			type: 'TOGGLE_SELECTION',
			isSelectionEnabled: boolean
		}>;
		/**
		 * Update a block's properties.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#updateblock
		 */
		updateBlock: ( clientId: string, updates: Partial<BlockClientId> ) => Promise<{
			clientId: string;
			type: 'UPDATE_BLOCK';
			updates: typeof updates;
		}>;
		/**
		 * Change attributes of one more blocks.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#updateblockattributes
		 */
		updateBlockAttributes: <A = Object>( clientId: string | string[], attributes: A, uniqueByBlock?: boolean ) => Promise<{
			attributes: A,
			clientIds: string[];
			type: 'UPDATE_BLOCK_ATTRIBUTES',
			uniqueByBlock: boolean
		}>;

		// @todo properly type the rest of these as needed.
		duplicateBlocks: ( key?: string ) => any;
		enterFormattedText: ( key?: string ) => any;
		exitFormattedText: ( key?: string ) => any;
		finishResolution: ( key?: string ) => any;
		flashBlock: ( key?: string ) => any;
		hideInsertionPoint: ( key?: string ) => any;
		insertDefaultBlock: ( key?: string ) => any;
		invalidateResolution: ( key?: string ) => any;
		invalidateResolutionForStore: ( key?: string ) => any;
		invalidateResolutionForStoreSelector: ( key?: string ) => any;
		mergeBlocks: ( key?: string ) => any;
		moveBlockToPosition: ( key?: string ) => any;
		moveBlocksDown: ( key?: string ) => any;
		moveBlocksToPosition: ( key?: string ) => any;
		moveBlocksUp: ( key?: string ) => any;
		multiSelect: ( key?: string ) => any;
		receiveBlocks: ( key?: string ) => any;
		resetBlocks: ( key?: string ) => any;
		resetSelection: ( key?: string ) => any;
		selectNextBlock: ( key?: string ) => any;
		selectPreviousBlock: ( key?: string ) => any;
		selectionChange: ( key?: string ) => any;
		setBlockMovingClientId: ( key?: string ) => any;
		setHasControlledInnerBlocks: ( key?: string ) => any;
		setNavigationMode: ( key?: string ) => any;
		setTemplateValidity: ( key?: string ) => any;
		showInsertionPoint: ( key?: string ) => any;
		startDraggingBlocks: ( key?: string ) => any;
		startMultiSelect: ( key?: string ) => any;
		startResolution: ( key?: string ) => any;
		startTyping: ( key?: string ) => any;
		stopDraggingBlocks: ( key?: string ) => any;
		stopMultiSelect: ( key?: string ) => any;
		stopTyping: ( key?: string ) => any;
		synchronizeTemplate: ( key?: string ) => any;
		toggleBlockHighlight: ( key?: string ) => any;
		toggleBlockMode: ( key?: string ) => any;
		updateBlockListSettings: ( key?: string ) => any;
		updateSettings: ( settings: { [ key: string ]: any } ) => { [ key: string ]: any };
		validateBlocksToTemplate: ( key?: string ) => any;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-edit-site/#actions
	 */
	export function dispatch( store: 'core/edit-site' ): {
		addTemplate: () => any;
		closeGeneralSidebar: () => any;
		failResolution: () => any;
		failResolutions: () => any;
		finishResolution: () => any;
		finishResolutions: () => any;
		invalidateResolution: () => any;
		invalidateResolutionForStore: () => any;
		invalidateResolutionForStoreSelector: () => any;
		openGeneralSidebar: () => any;
		openNavigationPanelToMenu: () => any;
		removeTemplate: () => any;
		revertTemplate: () => any;
		setHomeTemplateId: () => any;
		setIsInserterOpened: () => any;
		setIsListViewOpened: () => any;
		setIsNavigationPanelOpened: () => any;
		setNavigationPanelActiveMenu: () => any;
		setPage: () => any;
		setTemplate: () => any;
		setTemplatePart: () => any;
		startResolution: () => any;
		startResolutions: () => any;
		switchEditorMode: () => any;
		toggleFeature: () => any;
		updateSettings: () => any;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#actions
	 */
	export function dispatch( store: 'core/edit-post' ): {
		closeGeneralSidebar: () => Promise<{
			type: 'CLOSE_GENERAL_SIDEBAR'
		}>;
		// Remove a panel from UI.
		removeEditorPanel: ( panelName: editorPanels ) => Promise<{
			panelName: editorPanels,
			type: 'REMOVE_PANEL'
		}>;
		// Hide/Show a panel in the UI, same as toggling panel in preferences.
		toggleEditorPanelEnabled: ( key: editorPanels ) => Promise<{
			panelName: editorPanels,
			type: 'TOGGLE_PANEL_ENABLED',
		}>;
		toggleFeature: <K extends keyof editPostPreferences['features']>( feature: K ) => Promise<{
			feature: K;
			type: 'TOGGLE_FEATURE';
		}>;

		// @todo properly type the rest of these as needed.
		closeModal: ( key?: string ) => any;
		closePublishSidebar: ( key?: string ) => any;
		finishResolution: ( key?: string ) => any;
		hideBlockTypes: ( key?: string ) => any;
		invalidateResolution: ( key?: string ) => any;
		invalidateResolutionForStore: ( key?: string ) => any;
		invalidateResolutionForStoreSelector: ( key?: string ) => any;
		metaBoxUpdatesSuccess: ( key?: string ) => any;
		openGeneralSidebar: ( key?: string ) => any;
		openModal: ( key?: string ) => any;
		openPublishSidebar: ( key?: string ) => any;
		requestMetaBoxUpdates: ( key?: string ) => any;
		setAvailableMetaBoxesPerLocation: ( key?: string ) => any;
		showBlockTypes: ( key?: string ) => any;
		startResolution: ( key?: string ) => any;
		switchEditorMode: ( key?: string ) => any;
		toggleEditorPanelOpened: ( key?: string ) => any;
		togglePinnedPluginItem: ( key?: string ) => any;
		togglePublishSidebar: ( key?: string ) => any;
		updatePreferredStyleVariations: ( key?: string ) => any;
	}

	/**
	 * The Post Editor’s Data
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#actions
	 */
	export function dispatch( store: 'core/editor' ): {
		/**
		 * @deprecated
		 */
		clearSelectedBlock: () => Promise<{
			type: 'CLEAR_SELECTED_BLOCK';
		}>;
		/**
		 * Edit the post within state.
		 *
		 * Non persistant until the post is saved.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#editPost
		 */
		editPost: <T = PostEditing>( data: Partial<T> ) => Promise<undefined>;
		/**
		 * Lock a post to prevent saving.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#lockPostSaving
		 *
		 * @param {string} lockName - Used later to unlock saving.
		 * @see unlockPostSaving
		 */
		lockPostSaving: ( lockName: string ) => Promise<{
			lockName: string;
			type: 'LOCK_POST_SAVING';
		}>;
		/**
		 * Save post in editor in it's current state.
		 *
		 * Will not change a post's status not show success messages unless you call
		 * `editPost({ status: 'publish' | 'future' | 'draft' | 'pending' | 'private'>}`
		 * before calling savePost.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#savePost
		 */
		savePost: () => Promise<undefined>;
		/**
		 * @deprecated
		 */
		selectBlock: <A = {}, I = []>( clientId: string, initialPosition?: number ) => BlockClientId<A, I>;
		/**
		 * Unlock a post's saving ability.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#unlockPostSaving
		 *
		 * @param {string} lockName - Must match name used with `lockPostSaving`.
		 *
		 * @see lockPostSaving
		 */
		unlockPostSaving: ( lockName: string ) => Promise<{
			lockName: string;
			type: 'UNLOCK_POST_SAVING';
		}>;

		// @todo properly type the rest of these as needed.
		autosave: () => any;
		createUndoLevel: () => any;
		disablePublishSidebar: () => any;
		enablePublishSidebar: () => any;
		enterFormattedText: () => any;
		exitFormattedText: () => any;
		finishResolution: () => any;
		hideInsertionPoint: () => any;
		insertBlock: () => any;
		insertBlocks: () => any;
		insertDefaultBlock: () => any;
		invalidateResolution: () => any;
		invalidateResolutionForStore: () => any;
		invalidateResolutionForStoreSelector: () => any;
		lockPostAutosaving: () => any;
		mergeBlocks: () => any;
		moveBlockToPosition: () => any;
		moveBlocksDown: () => any;
		moveBlocksUp: () => any;
		multiSelect: () => any;
		receiveBlocks: () => any;
		redo: () => any;
		refreshPost: () => any;
		removeBlock: () => any;
		removeBlocks: () => any;
		replaceBlock: () => any;
		replaceBlocks: () => any;
		resetBlocks: () => any;
		resetEditorBlocks: () => any;
		resetPost: () => any;
		setTemplateValidity: () => any;
		setupEditor: () => any;
		setupEditorState: () => any;
		showInsertionPoint: () => any;
		startMultiSelect: () => any;
		startResolution: () => any;
		startTyping: () => any;
		stopMultiSelect: () => any;
		stopTyping: () => any;
		synchronizeTemplate: () => any;
		toggleBlockMode: () => any;
		toggleSelection: () => any;
		trashPost: () => any;
		undo: () => any;
		unlockPostAutosaving: () => any;
		updateBlock: () => any;
		updateBlockAttributes: () => any;
		updateBlockListSettings: () => any;
		updateEditorSettings: () => any;
		updatePostLock: () => any;
	}


	export type CoreBlocksDispatch = {
		// @todo properly type the rest of these as needed.
		addBlockCollection: () => any;
		addBlockStyles: () => any;
		addBlockTypes: () => any;
		addBlockVariations: () => any;
		finishResolution: () => any;
		finishResolutions: () => any;
		invalidateResolution: () => any;
		invalidateResolutionForStore: () => any;
		invalidateResolutionForStoreSelector: () => any;
		removeBlockCollection: () => any;
		removeBlockStyles: () => any;
		removeBlockTypes: () => any;
		removeBlockVariations: () => any;
		setCategories: () => any;
		setDefaultBlockName: () => any;
		setFreeformFallbackBlockName: () => any;
		setGroupingBlockName: () => any;
		setUnregisteredFallbackBlockName: () => any;
		startResolution: () => any;
		startResolutions: () => any;
		updateCategory: () => any;
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-blocks/#actions
	 */
	export function dispatch( store: 'core/blocks' ): CoreBlocksDispatch;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-notices/#actions
	 */
	export function dispatch( store: 'core/notices' ): {
		createNotice: ( status: Status, content: string, options?: NoticeOptions ) => Action;
		createErrorNotice: ( content: string, options?: NoticeOptions ) => Action;
		createInfoNotice: ( content: string, options?: NoticeOptions ) => Action;
		createSuccessNotice: ( content: string, options?: NoticeOptions ) => Action;
		createWarningNotice: ( content: string, options?: NoticeOptions ) => Action;

		// @todo Define these as needed.
		finishResolution: ( ...args ) => any;
		finishResolutions: ( ...args ) => any;
		invalidateResolution: ( ...args ) => any;
		invalidateResolutionForStore: ( ...args ) => any;
		invalidateResolutionForStoreSelector: ( ...args ) => any;
		removeNotice: ( ...args ) => any;
		startResolution: ( ...args ) => any;
		startResolutions: ( ...args ) => any;
	}

	export function dispatch<Methods extends ActionFunctions>( store: string ): Methods;

	type withDispatch = <T>( callback: ( dispatchFunction: typeof dispatch, ownProps: T, {select: select} ) => T, component: ComponentType<T> ) => ComponentType<T>;
	type withSelect = <T>( callback: ( callback: ( selectFunction: typeof select ) => T, ownProps: T ) => T, component: ComponentType<T> ) => ComponentType<T>;

	export const AsyncModeProvider: ComponentType<{
		value: boolean
	}>;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#usedispatch
	 */
	export const useDispatch: typeof dispatch;
	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useselect
	 */
	export const useSelect: typeof select;
	export const withDispatch: withDispatch;
	export const withSelect: withSelect;

	/**
	 * Subscribe to any state change.
	 *
	 * Returns an `unsubscribe` function.
	 *
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#subscribe
	 */
	export function subscribe(): () => void;

	export default interface Data {
		AsyncModeProvider: ComponentType<{
			value: boolean
		}>;
		createReduxStore: typeof createReduxStore;
		dispatch: typeof dispatch;
		register: typeof register;
		select: typeof select;
		subscribe: typeof subscribe;
		useDispatch: typeof dispatch;
		useSelect: typeof select;
		withDispatch: withDispatch;
		withSelect: withSelect;
	}
}
