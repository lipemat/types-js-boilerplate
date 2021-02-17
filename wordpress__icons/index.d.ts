/**
 * Definitions for the `@wordpress/icons` package.
 *
 * Currently not available as a global variable and must
 * be used from the package directly.
 *
 * It's possible to use an icon constant directly but it will
 * always be 24 by 24. To support changing size or other SVG
 * attributes use it like so.
 * `<Icon icon={ check } size={48} />`
 *
 * @link https://www.npmjs.com/package/@wordpress/icons
 *
 * @todo Adjust configurations to use webpack external and remove
 *       direct package access and package.json dependency
 *       when available in WP Core.
 */
declare module '@wordpress/icons' {
	import {ComponentType, SVGAttributes} from 'react';

	type IconType = JSX.Element;

	interface Icon extends SVGAttributes<SVGElement> {
		icon: IconType;
		size?: number;
	}

	export const Icon: ComponentType<Icon>;

	export const alignCenter: IconType
	export const alignJustify: IconType
	export const alignLeft: IconType
	export const alignRight: IconType
	export const archive: IconType
	export const arrowDown: IconType
	export const arrowLeft: IconType
	export const arrowRight: IconType
	export const arrowUp: IconType
	export const atSymbol: IconType
	export const aspectRatio: IconType
	export const audio: IconType
	export const backup: IconType
	export const blockDefault: IconType
	export const blockTable: IconType
	export const box: IconType
	export const brush: IconType
	export const button: IconType
	export const calendar: IconType
	export const camera: IconType
	export const cancelCircleFilled: IconType
	export const capturePhoto: IconType
	export const captureVideo: IconType
	export const category: IconType
	export const chartBar: IconType
	export const chartLine: IconType
	export const check: IconType
	export const chevronBackIOS: IconType
	export const chevronDown: IconType
	export const chevronLeft: IconType
	export const chevronRight: IconType
	export const chevronUp: IconType
	export const classic: IconType
	export const closeCircleFilled: IconType
	export const close: IconType
	export const closeSmall: IconType
	export const cloudUpload: IconType
	export const cloud: IconType
	export const code: IconType
	export const cog: IconType
	export const column: IconType
	export const columns: IconType
	export const comment: IconType
	export const controlsRepeat: IconType
	export const cover: IconType
	export const create: IconType
	export const crop: IconType
	export const currencyDollar: IconType
	export const currencyEuro: IconType
	export const currencyPound: IconType
	export const desktop: IconType
	export const dragHandle: IconType
	export const download: IconType
	export const edit: IconType
	export const expand: IconType
	export const external: IconType
	export const file: IconType
	export const flipHorizontal: IconType
	export const flipVertical: IconType
	export const formatBold: IconType
	export const formatIndent: IconType
	export const formatIndentRTL: IconType
	export const formatItalic: IconType
	export const formatListBullets: IconType
	export const formatListBulletsRTL: IconType
	export const formatListNumbered: IconType
	export const formatListNumberedRTL: IconType
	export const formatLtr: IconType
	export const formatOutdent: IconType
	export const formatOutdentRTL: IconType
	export const formatRtl: IconType
	export const formatStrikethrough: IconType
	export const fullscreen: IconType
	export const gallery: IconType
	export const globe: IconType
	export const grid: IconType
	export const group: IconType
	export const handle: IconType
	export const heading: IconType
	export const help: IconType
	export const inbox: IconType
	export const institution: IconType
	export const home: IconType
	export const html: IconType
	export const image: IconType
	export const info: IconType
	export const insertAfter: IconType
	export const insertBefore: IconType
	export const keyboardClose: IconType
	export const keyboardReturn: IconType
	export const layout: IconType
	export const lifesaver: IconType
	export const link: IconType
	export const linkOff: IconType
	export const list: IconType
	export const loop: IconType
	export const mapMarker: IconType
	export const media: IconType
	export const mediaAndText: IconType
	export const megaphone: IconType
	export const menu: IconType
	export const minus: IconType
	export const mobile: IconType
	export const more: IconType
	export const moreHorizontal: IconType
	export const moreHorizontalMobile: IconType
	export const moreVertical: IconType
	export const navigation: IconType
	export const pageBreak: IconType
	export const page: IconType
	export const paragraph: IconType
	export const payment: IconType
	export const percent: IconType
	export const positionCenter: IconType
	export const positionLeft: IconType
	export const positionRight: IconType
	export const pencil: IconType
	export const people: IconType
	export const pin: IconType
	export const plugins: IconType
	export const plusCircleFilled: IconType
	export const plusCircle: IconType
	export const plus: IconType
	export const postComments: IconType
	export const postCommentsCount: IconType
	export const postCommentsForm: IconType
	export const postDate: IconType
	export const postExcerpt: IconType
	export const postFeaturedImage: IconType
	export const postList: IconType
	export const postTitle: IconType
	export const preformatted: IconType
	export const pullLeft: IconType
	export const pullRight: IconType
	export const pullquote: IconType
	export const quote: IconType
	export const receipt: IconType
	export const redo: IconType
	export const replace: IconType
	export const resizeCornerNE: IconType
	export const reusableBlock: IconType
	export const rotateLeft: IconType
	export const rotateRight: IconType
	export const rss: IconType
	export const search: IconType
	export const separator: IconType
	export const share: IconType
	export const shortcode: IconType
	export const stack: IconType
	export const starEmpty: IconType
	export const starFilled: IconType
	export const starHalf: IconType
	export const store: IconType
	export const stretchFullWidth: IconType
	export const shipping: IconType
	export const stretchWide: IconType
	export const subscript: IconType
	export const superscript: IconType
	export const tableColumnAfter: IconType
	export const tableColumnBefore: IconType
	export const tableColumnDelete: IconType
	export const tableRowAfter: IconType
	export const tableRowBefore: IconType
	export const tableRowDelete: IconType
	export const table: IconType
	export const tag: IconType
	export const textColor: IconType
	export const tablet: IconType
	export const title: IconType
	export const tool: IconType
	export const trash: IconType
	export const typography: IconType
	export const undo: IconType
	export const update: IconType
	export const upload: IconType
	export const verse: IconType
	export const video: IconType
	export const warning: IconType
	export const widget: IconType
	export const wordpress: IconType

	export default interface Icons {
		Icon: ComponentType<Icon>;

		alignCenter: IconType
		alignJustify: IconType
		alignLeft: IconType
		alignRight: IconType
		archive: IconType
		arrowDown: IconType
		arrowLeft: IconType
		arrowRight: IconType
		arrowUp: IconType
		atSymbol: IconType
		aspectRatio: IconType
		audio: IconType
		backup: IconType
		blockDefault: IconType
		blockTable: IconType
		box: IconType
		brush: IconType
		button: IconType
		calendar: IconType
		camera: IconType
		cancelCircleFilled: IconType
		capturePhoto: IconType
		captureVideo: IconType
		category: IconType
		chartBar: IconType
		chartLine: IconType
		check: IconType
		chevronBackIOS: IconType
		chevronDown: IconType
		chevronLeft: IconType
		chevronRight: IconType
		chevronUp: IconType
		classic: IconType
		closeCircleFilled: IconType
		close: IconType
		closeSmall: IconType
		cloudUpload: IconType
		cloud: IconType
		code: IconType
		cog: IconType
		column: IconType
		columns: IconType
		comment: IconType
		controlsRepeat: IconType
		cover: IconType
		create: IconType
		crop: IconType
		currencyDollar: IconType
		currencyEuro: IconType
		currencyPound: IconType
		desktop: IconType
		dragHandle: IconType
		download: IconType
		edit: IconType
		expand: IconType
		external: IconType
		file: IconType
		flipHorizontal: IconType
		flipVertical: IconType
		formatBold: IconType
		formatIndent: IconType
		formatIndentRTL: IconType
		formatItalic: IconType
		formatListBullets: IconType
		formatListBulletsRTL: IconType
		formatListNumbered: IconType
		formatListNumberedRTL: IconType
		formatLtr: IconType
		formatOutdent: IconType
		formatOutdentRTL: IconType
		formatRtl: IconType
		formatStrikethrough: IconType
		fullscreen: IconType
		gallery: IconType
		globe: IconType
		grid: IconType
		group: IconType
		handle: IconType
		heading: IconType
		help: IconType
		inbox: IconType
		institution: IconType
		home: IconType
		html: IconType
		image: IconType
		info: IconType
		insertAfter: IconType
		insertBefore: IconType
		keyboardClose: IconType
		keyboardReturn: IconType
		layout: IconType
		lifesaver: IconType
		link: IconType
		linkOff: IconType
		list: IconType
		loop: IconType
		mapMarker: IconType
		media: IconType
		mediaAndText: IconType
		megaphone: IconType
		menu: IconType
		minus: IconType
		mobile: IconType
		more: IconType
		moreHorizontal: IconType
		moreHorizontalMobile: IconType
		moreVertical: IconType
		navigation: IconType
		pageBreak: IconType
		page: IconType
		paragraph: IconType
		payment: IconType
		percent: IconType
		positionCenter: IconType
		positionLeft: IconType
		positionRight: IconType
		pencil: IconType
		people: IconType
		pin: IconType
		plugins: IconType
		plusCircleFilled: IconType
		plusCircle: IconType
		plus: IconType
		postComments: IconType
		postCommentsCount: IconType
		postCommentsForm: IconType
		postDate: IconType
		postExcerpt: IconType
		postFeaturedImage: IconType
		postList: IconType
		postTitle: IconType
		preformatted: IconType
		pullLeft: IconType
		pullRight: IconType
		pullquote: IconType
		quote: IconType
		receipt: IconType
		redo: IconType
		replace: IconType
		resizeCornerNE: IconType
		reusableBlock: IconType
		rotateLeft: IconType
		rotateRight: IconType
		rss: IconType
		search: IconType
		separator: IconType
		share: IconType
		shortcode: IconType
		stack: IconType
		starEmpty: IconType
		starFilled: IconType
		starHalf: IconType
		store: IconType
		stretchFullWidth: IconType
		shipping: IconType
		stretchWide: IconType
		subscript: IconType
		superscript: IconType
		tableColumnAfter: IconType
		tableColumnBefore: IconType
		tableColumnDelete: IconType
		tableRowAfter: IconType
		tableRowBefore: IconType
		tableRowDelete: IconType
		table: IconType
		tag: IconType
		textColor: IconType
		tablet: IconType
		title: IconType
		tool: IconType
		trash: IconType
		typography: IconType
		undo: IconType
		update: IconType
		upload: IconType
		verse: IconType
		video: IconType
		warning: IconType
		widget: IconType
		wordpress: IconType
	}
}
