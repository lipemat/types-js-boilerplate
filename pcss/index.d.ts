/**
 * Allow css modules to work like normal with typescript enabled without
 * Getting "TS2307: Cannot find module './<name>.pcss'."
 * 
 */
declare module '*.pcss' {
	const content: any;
	export default content;
}
