import {WpMedia} from '@lipemat/js-boilerplate/global/wp-media';

declare global {
	interface Window {
		wp: {
			media: WpMedia;
		}
	}
}
