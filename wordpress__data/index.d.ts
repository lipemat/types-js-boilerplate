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

	type editPostPreferences = {
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
		hasUploadPermissions: () => boolean;
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
		getCurrentPost: <T = PostEditing>() => T;
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

		getCurrentPostId: () => number;

		/**
		 * Returns a property value from post being edited.
		 * Will return unsaved edits.
		 *
		 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getEditedPostAttribute
		 */
		getEditedPostAttribute: <T = PostEditing, K extends keyof T = keyof T>( attribute: K ) => T[K];

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
		getBlocks: () => any;
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
		isPostLocked: () => any;
		isPostSavingLocked: () => any;
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
		removeEditorPanel: ( key?: string ) => any;
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
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#actions
	 */
	export function dispatch( store: 'core/editor' ): {
		editPost: <T = PostEditing>( data: Partial<T> ) => Promise<void>;

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
		lockPostSaving: () => any;
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
		selectBlock: () => any;
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
		unlockPostSaving: () => any;
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
