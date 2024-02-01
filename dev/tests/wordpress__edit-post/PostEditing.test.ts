import type {PostEditing} from '@wordpress/edit-post';
import {omit} from 'lodash';

const complete: PostEditing = {
	author: 0,
	comment_status: 'open',
	content: '',
	date: '',
	date_gmt: '',
	excerpt: '',
	featured_media: 0,
	generated_slug: '',
	guid: {
		rendered: '',
		raw: '',
	},
	id: 0,
	link: '',
	meta: {},
	modified: '',
	modified_gmt: '',
	password: '',
	permalink_template: '',
	ping_status: 'open',
	slug: '',
	status: 'publish',
	sticky: false,
	template: '',
	title: '',
	type: 'page'
};

let PostIntersect: PostEditing;
// @ts-expect-no-error
PostIntersect = complete;

// Page specific fields.
// @ts-expect-no-error
PostIntersect = {
	menu_order: 0,
	parent: 0,
	...complete
};

// @ts-expect-error - 'content' missing on type.
PostIntersect = omit( complete, 'content' );
