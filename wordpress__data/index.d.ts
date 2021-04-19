/**
 * Definitions for the `@wordpress/data` package.
 *
 * @link https://www.npmjs.com/package/@wordpress/data
 */
declare module '@wordpress/data' {
	import {PostEditing} from '@wordpress/edit-post';
	import {Taxonomy} from '@wordpress/api/taxonomies';
	import {Settings} from '@wordpress/api/settings';
	import {Type} from '@wordpress/api/types';
	import {Media} from '@wordpress/api/media';
	import {ComponentType} from 'react';

	/**
	 * The shape of a block mapped to an id when stored
	 * in redux state.
	 */
	export interface blockCliendId<A = { [ key: string ]: any }, I = []> {
		attributes: A;
		clientId: string;
		innerBlocks: I | Array<blockCliendId>;
		isValid: boolean;
		name: string;
		originalContent?: string;
	}

	/**
	 * Available editor panels (non exhaustive).
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

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core/
	 */
	export function select( store: 'core' ): {
		getMedia: ( id: number ) => Media;
		getMediaItems: () => Media[ ];
		getPostType: ( slug: string ) => Type;
		getSite: () => Settings;
		getTaxonomies: () => Taxonomy[];
		getTaxonomy: ( slug: string ) => Taxonomy;
		hasFetchedAutosaves: () => boolean;
		hasFinishedResolution: () => boolean;
		hasRedo: () => boolean;
		hasStartedResolution: () => boolean;
		hasUndo: () => boolean;
		isAutosavingEntityRecord: () => boolean;
		isPreviewEmbedFallback: () => boolean;
		isRequestingEmbedPreview: () => boolean;
		isResolving: () => boolean;
		isSavingEntityRecord: () => boolean;

		// @todo properly type the rest of these as needed.
		canUser: ( capability: string ) => boolean;
		getIsResolving: () => boolean;
		getAuthors: () => any;
		getAutosave: ( id: string ) => any;
		getAutosaves: () => any;
		getCachedResolvers: () => any;
		getCurrentUser: () => any;
		getEmbedPreview: ( id: number ) => any;
		getLastEntitySaveError: () => any;
		getPostTypes: ( slug: string ) => any;
		getRawEntityRecord: () => any;
		getRedoEdit: () => any;
		getReferenceByDistinctEdits: () => any;
		getThemeSupports: ( support: string ) => any;
		getUndoEdit: () => any;
		getUserQueryResults: () => any;
		getWidgetArea: ( slug: string ) => any;
		getWidgetAreas: () => any;
	};
	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/
	 */
	export function select( store: 'core/editor' ): {
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
		 * Return all blocks currently in the editor.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getBlocks
		 */
		getBlocks: <T = Array<blockCliendId>>( state?: object, rootClientId?: string ) => T;
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
		getIsResolving: () => any;
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
		getSelectedBlockClientId: () => any;
		getSelectedBlockCount: () => any;
		getSelectedBlocksInitialCaretPosition: () => any;
		getSuggestedPostFormat: () => any;
		getTemplate: () => any;
		getTemplateLock: () => any;
		hasChangedContent: () => any;
		hasEditorRedo: () => any;
		hasEditorUndo: () => any;
		hasFinishedResolution: () => any;
		hasInserterItems: () => any;
		hasMultiSelection: () => any;
		hasNonPostEntityChanges: () => any;
		hasSelectedBlock: () => any;
		hasSelectedInnerBlock: () => any;
		hasStartedResolution: () => any;
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
		isResolving: () => any;
		isSavingPost: () => any;
		isSelectionEnabled: () => any;
		isTyping: () => any;
		isValidTemplate: () => any;
	}
	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-edit-post/
	 */
	export function select( store: 'core/edit-post' ): {
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
		getCachedResolvers: ( key?: string ) => any;
		getIsResolving: ( key?: string ) => any;
		getMetaBoxesPerLocation: ( key?: string ) => any;
		hasFinishedResolution: ( key?: string ) => any;
		hasMetaBoxes: ( key?: string ) => any;
		hasStartedResolution: ( key?: string ) => any;
		isEditorPanelEnabled: ( key?: string ) => any;
		isEditorPanelOpened: ( key?: string ) => any;
		isEditorPanelRemoved: ( key?: string ) => any;
		isMetaBoxLocationActive: ( key?: string ) => any;
		isMetaBoxLocationVisible: ( key?: string ) => any;
		isModalActive: ( key?: string ) => any;
		isPluginItemPinned: ( key?: string ) => any;
		isResolving: ( key?: string ) => any;
		isSavingMetaBoxes: ( key?: string ) => any;

	}
	export function select<Methods extends {
		[ selector: string ]: ( key?: string | number ) => any;
	}>( store: string ): Methods;


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
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#actions
	 */
	export function dispatch( store: 'core/edit-post' ): {
		closeGeneralSidebar: () => Promise<{ type: 'CLOSE_GENERAL_SIDEBAR' }>;
		removeEditorPanel: ( panelName: editorPanels ) => Promise<{ panelName: string, type: 'REMOVE_PANEL' }>;
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
		toggleEditorPanelEnabled: ( key?: string ) => any;
		toggleEditorPanelOpened: ( key?: string ) => any;
		togglePinnedPluginItem: ( key?: string ) => any;
		togglePublishSidebar: ( key?: string ) => any;
		updatePreferredStyleVariations: ( key?: string ) => any;
	}
	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#actions
	 */
	export function dispatch( store: 'core/editor' ): {
		/**
		 * Edit the post within state.
		 *
		 * Non persistant until the post is saved.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#editPost
		 */
		editPost: <T = PostEditing>( data: Partial<T> ) => Promise<void>;
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
		 * Select a block in the editor based on id.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#selectBlock
		 */
		selectBlock: <A = {}, I = []>( clientId: string, initialPosition?: number ) => blockCliendId<A, I>;
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
		clearSelectedBlock: () => any;
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
		savePost: () => any;
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
	export function dispatch<T>( store: string ): T;

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useSelect
	 */
	type useSelect = <T>( callback: ( selectFunction: typeof select ) => T, deps?: Array<any> ) => T;
	type withDispatch = <T>( callback: ( dispatchFunction: typeof dispatch, ownProps: T, {select: select} ) => T, component: ComponentType<T> ) => ComponentType<T>;
	type withSelect = <T>( callback: ( callback: ( selectFunction: typeof select ) => T, ownProps: T ) => T, component: ComponentType<T> ) => ComponentType<T>;

	export const AsyncModeProvider: ComponentType<{
		value: boolean
	}>;
	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useDispatch
	 */
	export const useDispatch: typeof dispatch;
	export const useSelect: useSelect;
	export const withDispatch: withDispatch;
	export const withSelect: withSelect;

	export default interface Data {
		AsyncModeProvider: ComponentType<{
			value: boolean
		}>;
		dispatch: typeof dispatch;
		select: typeof select;
		useDispatch: typeof dispatch;
		useSelect: useSelect;
		withDispatch: withDispatch;
		withSelect: withSelect;
	}
}
