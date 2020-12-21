declare module '@wordpress/data' {
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
	export function select<Methods extends { [ selector: string ]: ( key?: string | number ) => any; }>( store: string ): Methods;


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
	export function dispatch( store: 'core/edit-post' ): {
		closeGeneralSidebar: () => Promise<{ type: 'CLOSE_GENERAL_SIDEBAR'}>;
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

	export type useSelect = <T>( callback: ( selectFunction: typeof select ) => T, deps?: Array<any> ) => T;
	export type useDispatch = <T>( storeName: string ) => ( newValue: T ) => void;
	export type withDispatch = <T>( callback: ( dispatchFunction: typeof dispatch, ownProps: object, {select: select} ) => T, component: ComponentType<T> ) => ComponentType<T>;
	export type withSelect = <T>( callback: ( callback: ( selectFunction: typeof select ) => T, ownProps: object ) => T, component: ComponentType<T> ) => ComponentType<T>;

	export const AsyncModeProvider: ComponentType<{
		value: boolean
	}>;
	export const useDispatch: useDispatch;
	export const useSelect: useSelect;
	export const withDispatch: withDispatch;
	export const withSelect: withSelect;

	export default interface Data {
		AsyncModeProvider: ComponentType<{
			value: boolean
		}>;
		dispatch: typeof dispatch;
		select: typeof select;
		useDispatch: useDispatch;
		useSelect: useSelect;
	}
}
