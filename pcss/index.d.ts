/**
 * Allow CSS modules to work like normal with TypeScript enabled without
 * Getting "TS2307: Cannot find module './<name>.pcss'."
 *
 * @todo Remove this file in version 4.
 *      - JS boilerplate now generates CSS module type files.
 *      - Write instructions for adding this module to local projects in the wiki version 4 migration guide.
 *
 */
declare module '*.pcss' {
	const content: Record<string, string>;
	export default content;
}
