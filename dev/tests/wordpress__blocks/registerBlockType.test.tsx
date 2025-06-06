import {registerBlockType} from '@wordpress/blocks';

registerBlockType( 'my-plugin/my-block', {
	title: 'test block',
	category: 'common',
	edit: () => <></>,
	save: () => <></>,
	icon: <svg
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg">
		<path
			fill="none"
			d="M0 0h24v24H0V0z" />
		<path d="M19 13H5v-2h14v2z" />
	</svg>,
} );

registerBlockType( 'my-plugin/my-block', {
	title: 'test block',
	category: 'common',
	edit: () => <></>,
	save: () => <></>,
	icon: 'book-alt',
	attributes: {},
} );

registerBlockType( 'my-plugin/my-block', {
	title: 'test block',
	category: 'common',
	edit: () => <></>,
	save: () => <></>,
	attributes: {},
	icon: {
		background: '#7e70af',
		foreground: '#fff',
		src: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path fill="none" d="M0 0h24v24H0V0z" />
			<path d="M19 13H5v-2h14v2z" />
		</svg>,
	}
} );


registerBlockType<{ foo: string, other: boolean }>( 'my-plugin/my-block', {
	title: 'test block',
	category: 'theme',
	edit: ( {setAttributes} ) => {
		setAttributes( ( values ) => ( {
			foo: 'bar',
			other: ! values.other
		} ) );

		setAttributes( ( values ) => ( {
			foo: 'bar',
		} ) );

		setAttributes( {
			foo: 'bar',
		} );

		// @ts-expect-error
		setAttributes( ( values ) => ( {
			fooxxx: 'bar',
		} ) );

		return <></>;
	},
	save: () => <></>,
	icon: 'book-alt',
} );
