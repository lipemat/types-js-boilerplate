declare module '@wordpress/core-data' {
	/**
	 * This is how post meta may be accessed, amount other things.
	 *
	 * @link https://make.wordpress.org/core/2020/03/02/general-block-editor-api-updates/
	 *
	 * @todo this hook supports a lot more kinds but it's not implemented into WP Core until 5.4 so
	 *       we need to type the rest. Need to get a real use case to dig deeper to see how it all
	 *       works.
	 *
	 */
	export type useEntityProps = <T>( kind: 'postType', type: string, contentType: 'meta' | 'content' ) => [ T, ( T ) => void ];

	export const useEntityProps: useEntityProps;
	export default interface CoreData {
		useEntityProps: useEntityProps
	}
}
