/**
 * Definitions for the `@wordpress/notices` package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-notices/
 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__notices/index.d.ts
 */
declare module '@wordpress/notices' {
	import {ReactNode} from 'react';

	export type Status = 'info' | 'warning' | 'error' | 'success';

	export interface WPNoticeAction {
		label: string;
		url?: string;
		// @todo Type the args.
		onClick?: ( ...args: any ) => void;
	}

	export interface Action {
		type: 'CREATE_NOTICE',
		notice: Required<Omit<NoticeOptions, 'speak'>> & {
			spokenMessage: string | null;
		}
	}

	/**
	 * @link https://developer.wordpress.org/block-editor/reference-guides/data/data-core-notices/#createnotice
	 */
	export interface NoticeOptions {
		actions?: Array<WPNoticeAction>;
		context?: string;
		explicitDismiss?: boolean;
		icon?: ReactNode;
		id?: string;
		isDismissible?: boolean;
		// @todo Type the args.
		onDismiss?: ( ...args: any ) => void;
		speak?: boolean;
		status?: Status;
		type?: 'default' | 'snackbar';
	}


	export interface store {

	}

}
