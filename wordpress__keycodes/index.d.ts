/**
 * Definitions for the `@wordpress/keycodes` package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-keycodes/
 * @link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wordpress__keycodes/index.d.ts
 */
declare module '@wordpress/keycodes' {
	export const BACKSPACE = 8;
	export const TAB = 9;
	export const ENTER = 13;
	export const ESCAPE = 27;
	export const SPACE = 32;
	export const LEFT = 37;
	export const UP = 38;
	export const RIGHT = 39;
	export const DOWN = 40;
	export const DELETE = 46;
	export const F10 = 121;
	export const ALT = 'alt';
	export const CTRL = 'ctrl';
	export const COMMAND = 'meta';
	export const SHIFT = 'shift';

	export const modifiers: {
		primary( isApple: () => boolean ): string[];
		primaryShift( isApple: () => boolean ): string[];
		primaryAlt( isApple: () => boolean ): string[];
		secondary( isApple: () => boolean ): string[];
		access( isApple: () => boolean ): string[];
		ctrl(): string[];
		alt(): string[];
		ctrlShift(): string[];
		shift(): string[];
		shiftAlt(): string[];
	};

	/**
	 * An object that contains functions to get raw shortcuts.
	 * E.g. rawShortcut.primary( 'm' ) will return 'meta+m' on Mac.
	 * These are intended for user with the KeyboardShortcuts component or TinyMCE.
	 */
	export const rawShortcut: {
		primary( character: string ): string;
		primaryShift( character: string ): string;
		primaryAlt( character: string ): string;
		secondary( character: string ): string;
		access( character: string ): string;
		ctrl( character: string ): string;
		alt( character: string ): string;
		ctrlShift( character: string ): string;
		shift( character: string ): string;
		shiftAlt( character: string ): string;
	};

	/**
	 * Return an array of the parts of a keyboard shortcut chord for display
	 * E.g displayShortcutList.primary( 'm' ) will return [ '⌘', 'M' ] on Mac.
	 */
	export const displayShortcutList: {
		primary( character: string ): string[];
		primaryShift( character: string ): string[];
		primaryAlt( character: string ): string[];
		secondary( character: string ): string[];
		access( character: string ): string[];
		ctrl( character: string ): string[];
		alt( character: string ): string[];
		ctrlShift( character: string ): string[];
		shift( character: string ): string[];
		shiftAlt( character: string ): string[];
	};

	/**
	 * An object that contains functions to display shortcuts.
	 * E.g. displayShortcut.primary( 'm' ) will return '⌘M' on Mac.
	 */
	export const displayShortcut: {
		primary( character: string ): string;
		primaryShift( character: string ): string;
		primaryAlt( character: string ): string;
		secondary( character: string ): string;
		access( character: string ): string;
		ctrl( character: string ): string;
		alt( character: string ): string;
		ctrlShift( character: string ): string;
		shift( character: string ): string;
		shiftAlt( character: string ): string;
	};

	/**
	 * An object that contains functions to return an aria label for a keyboard shortcut.
	 * E.g. shortcutAriaLabel.primary( '.' ) will return 'Command + Period' on Mac.
	 */
	export const shortcutAriaLabel: {
		primary( character: string ): string;
		primaryShift( character: string ): string;
		primaryAlt( character: string ): string;
		secondary( character: string ): string;
		access( character: string ): string;
		ctrl( character: string ): string;
		alt( character: string ): string;
		ctrlShift( character: string ): string;
		shift( character: string ): string;
		shiftAlt( character: string ): string;
	};

	/**
	 * An object that contains functions to check if a keyboard event matches a
	 * predefined shortcut combination.
	 * E.g. isKeyboardEvent.primary( event, 'm' ) will return true if the event
	 * signals pressing ⌘M.
	 */
	export const isKeyboardEvent: {
		primary( event: Event, character: string ): boolean;
		primaryShift( event: Event, character: string ): boolean;
		primaryAlt( event: Event, character: string ): boolean;
		secondary( event: Event, character: string ): boolean;
		access( event: Event, character: string ): boolean;
		ctrl( event: Event, character: string ): boolean;
		alt( event: Event, character: string ): boolean;
		ctrlShift( event: Event, character: string ): boolean;
		shift( event: Event, character: string ): boolean;
		shiftAlt( event: Event, character: string ): boolean;
	};

	export default interface Keycodes {
		BACKSPACE: typeof BACKSPACE;
		TAB: typeof TAB;
		ENTER: typeof ENTER;
		ESCAPE: typeof ESCAPE;
		SPACE: typeof SPACE;
		LEFT: typeof LEFT;
		UP: typeof UP;
		RIGHT: typeof RIGHT;
		DOWN: typeof DOWN;
		DELETE: typeof DELETE;
		F10: typeof F10;
		ALT: typeof ALT;
		CTRL: typeof CTRL;
		COMMAND: typeof COMMAND;
		SHIFT: typeof SHIFT;
		modifiers: typeof modifiers;
		rawShortcut: typeof rawShortcut;
		displayShortcutList: typeof displayShortcutList;
		displayShortcut: typeof displayShortcut;
		shortcutAriaLabel: typeof shortcutAriaLabel;
		isKeyboardEvent: typeof isKeyboardEvent;
	}
}
