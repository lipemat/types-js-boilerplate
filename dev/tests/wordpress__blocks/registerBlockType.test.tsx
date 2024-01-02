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
} );

registerBlockType( 'my-plugin/my-block', {
	title: 'test block',
	category: 'common',
	edit: () => <></>,
	save: () => <></>,
	icon: {
		background: '#7e70af',
		foreground: '#fff',
		src: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path fill="none" d="M0 0h24v24H0V0z" />
			<path d="M19 13H5v-2h14v2z" />
		</svg>,
	}
} );
