/**
 * `wp.media` global variable.
 *
 * The `global.d.ts` includes these definitions as part
 * of the `window.wp.media` variable and they may be used
 * directly.
 *
 * These definitions may also be used partially or separately,
 * via the exports.
 *
 * @see ../global.d.ts
 *
 * @link https://codex.wordpress.org/Javascript_Reference/wp.media
 */
declare module '@lipemat/js-boilerplate/global/wp-media' {
	import type {ALL_TYPES} from '@lipemat/js-boilerplate/mime';
	import type {Collection, Model} from 'backbone';

	export type WpMedia = {
		<T = ''>( attributes: {
			frame?: 'select' | 'post' | 'manage' | 'image' | 'audio' | 'video' | 'edit-attachments';
			title?: string;
			/**
			 * Query arguments for retrieve attachments.
			 * Set `orderby` to 'menuOrder' to enable sorting.
			 */
			library?: {
				order?: 'ASC' | 'DESC',
				orderby?: 'name' | 'author' | 'date' | 'title' | 'modified' | 'uploadedTo' | 'id' | 'post__in' | 'menuOrder';
				type?: ( ALL_TYPES | T ) | Array<ALL_TYPES | T>;
				search?: string;
				uploadedTo?: number;
			};
			multiple?: boolean;
			button?: {
				text: string;
			}
		} ): Frame;
		model: {
			L10n: {},
			settings: {
				ajaxurl: string;
				post: {
					featuredImageId: string;
					id: number;
					nonce: string;

				}
			}
		};
		post: <T = any>( action: string, data: { [ key: string ]: any } ) => Promise<T>;
		view: {
			l10n: L10n;
			settings: Settings;
		};
	}

	export interface Frame {
		on: ( event: 'ready' | 'attach' | 'open' | 'escape' | 'close' | 'select' | 'activate' | 'dectivate' | 'all', callback: () => void ) => void;
		open: () => void;
		close: () => void;
		state: () => {
			get: ( key: 'selection' ) => Collection<Model<SelectedMedia>>;
		}
	}

	export interface SelectedMedia {
		alt: string;
		author: string;
		authorLink: string;
		authorName: string;
		caption: string;
		compat: {
			item: string;
			meta: string;
		};
		context: string;
		date: Date;
		dateFormatted: string;
		description: string;
		editLink: string;
		filename: string;
		filesizeHumanReadable: string;
		filesizeInBytes: number;
		height: number;
		icon: string;
		id: number;
		link: string;
		menuOrder: number;
		meta: boolean;
		mime: string;
		modified: Date;
		name: string;
		nonces: {
			update: string;
			delete: string;
			edit: string;
		};
		orientation: string;
		sizes: Record<'thumbnail' | 'medium' | 'full' | string, {
			url: string;
			height: number;
			width: number;
			orientation: string;
		}>;
		status: string;
		subtype: string;
		title: string;
		type: string;
		uploadedTo: number;
		uploadedToLink: string;
		uploadedToTitle: string;
		url: string;
		width: number;
	}

	export interface Settings {
		tabs: any[];
		tabUrl: string;
		mimeTypes: {
			image: string;
			audio: string;
			video: string;
			'application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-word.document.macroEnabled.12,application/vnd.ms-word.template.macroEnabled.12,application/vnd.oasis.opendocument.text,application/vnd.apple.pages,application/pdf,application/vnd.ms-xpsdocument,application/oxps,application/rtf,application/wordperfect,application/octet-stream': string;
			'application/vnd.apple.numbers,application/vnd.oasis.opendocument.spreadsheet,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel.sheet.macroEnabled.12,application/vnd.ms-excel.sheet.binary.macroEnabled.12': string;
			'application/x-gzip,application/rar,application/x-tar,application/zip,application/x-7z-compressed': string;
		}
		captions: boolean;
		nonce: {
			sendToEditor: string;
		};
		post: {
			id: number;
			nonce: string;
			featuredImageId: number;
		};
		defaultProps: {
			link: string;
			align: string;
			size: string;
		}
		attachmentCounts: {
			audio: number;
			video: number;
		}
		oEmbedProxyUrl: string;
		embedExts: string[];
		embedMimes: {
			mp3: string;
			ogg: string;
			flac: string;
			m4a: string;
			wav: string;
			mp4: string;
			m4v: string;
			webm: string;
			ogv: string;
		};
		contentWidth: null;
		months: Array<{
			year: string;
			month: string;
			text: string;
		}>;
		mediaTrash: number;
	}

	export interface L10n {
		mediaFrameDefaultTitle: string;
		url: string;
		addMedia: string;
		search: string;
		select: string;
		cancel: string;
		update: string;
		replace: string;
		remove: string;
		back: string;
		selected: string;
		dragInfo: string;
		uploadFilesTitle: string;
		uploadImagesTitle: string;
		mediaLibraryTitle: string;
		insertMediaTitle: string;
		createNewGallery: string;
		createNewPlaylist: string;
		createNewVideoPlaylist: string;
		returnToLibrary: string;
		allMediaItems: string;
		allDates: string;
		noItemsFound: string;
		insertIntoPost: string;
		unattached: string;
		mine: string;
		trash: string;
		uploadedToThisPost: string;
		warnDelete: string;
		warnBulkDelete: string;
		warnBulkTrash: string;
		bulkSelect: string;
		trashSelected: string;
		restoreSelected: string;
		deletePermanently: string;
		apply: string;
		filterByDate: string;
		filterByType: string;
		searchLabel: string;
		searchMediaLabel: string;
		searchMediaPlaceholder: string;
		mediaFound: string;
		mediaFoundHasMoreResults: string;
		noMedia: string;
		noMediaTryNewSearch: string;
		attachmentDetails: string;
		insertFromUrlTitle: string;
		setFeaturedImageTitle: string;
		setFeaturedImage: string;
		createGalleryTitle: string;
		editGalleryTitle: string;
		cancelGalleryTitle: string;
		insertGallery: string;
		updateGallery: string;
		addToGallery: string;
		addToGalleryTitle: string;
		reverseOrder: string;
		imageDetailsTitle: string;
		imageReplaceTitle: string;
		imageDetailsCancel: string;
		editImage: string;
		chooseImage: string;
		selectAndCrop: string;
		skipCropping: string;
		cropImage: string;
		cropYourImage: string;
		cropping: string;
		suggestedDimensions: string;
		cropError: string;
		audioDetailsTitle: string;
		audioReplaceTitle: string;
		audioAddSourceTitle: string;
		audioDetailsCancel: string;
		videoDetailsTitle: string;
		videoReplaceTitle: string;
		videoAddSourceTitle: string;
		videoDetailsCancel: string;
		videoSelectPosterImageTitle: string;
		videoAddTrackTitle: string;
		playlistDragInfo: string;
		createPlaylistTitle: string;
		editPlaylistTitle: string;
		cancelPlaylistTitle: string;
		insertPlaylist: string;
		updatePlaylist: string;
		addToPlaylist: string;
		addToPlaylistTitle: string;
		videoPlaylistDragInfo: string;
		createVideoPlaylistTitle: string;
		editVideoPlaylistTitle: string;
		cancelVideoPlaylistTitle: string;
		insertVideoPlaylist: string;
		updateVideoPlaylist: string;
		addToVideoPlaylist: string;
		addToVideoPlaylistTitle: string;
		filterAttachments: string;
		attachmentsList: string;
		galleryEmbeds: {
			title: string;
			menuTitle: string;
			backTitle: string;
			info: string;
			buttonFetch: string;
			buttonUpload: string;
			noValidUrls: string;
			logAjaxFailed: string;
			unknownUrl: string;
			embedFailed: string;
			embedNoSelection: string;
			embedUploaded: string;
			embedsUploaded: string;
			embedsUploadFailed: string;
			processingEmbeds: string;
			uploadingEmbeds: string;
		}
	}

}
