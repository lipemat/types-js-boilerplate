import {useSelect} from '@wordpress/data';

// @link https://developer.wordpress.org/news/2024/03/28/how-to-work-effectively-with-the-useselect-hook/#always-declare-useselect-dependencies

// Backward compatibility while @deprecated useSelect() is still in use.
const incorrect = useSelect( ( select ) => select( 'site' ).getTitle() );

const correct = useSelect( ( select ) => select( 'site' ).getTitle(), [] );
