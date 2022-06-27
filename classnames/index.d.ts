/**
 * Definitions, which no longer exists in @types/classnames as the
 * types are now included in the `classnames` core package.
 *
 * We still use them outside the calls to `classnames`, so they remain here.
 */
declare module 'classnames' {
	// This is the only way I found to break circular references between ClassArray and ClassValue
	// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
	interface ClassArray extends Array<ClassValue> {
	}

	interface ClassDictionary {
		[ id: string ]: any;
	}

	export type ClassValue =
		string
		| number
		| ClassDictionary
		| ClassArray
		| undefined
		| null
		| boolean;

	export default function classNames( ...args: ClassValue[] ): string;
}
