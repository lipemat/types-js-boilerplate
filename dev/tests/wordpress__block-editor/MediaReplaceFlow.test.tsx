import type {ReactNode} from 'react';
import {MediaReplaceFlow} from '@wordpress/block-editor';
import type {SelectedMedia} from '@lipemat/js-boilerplate/global/wp-media';


function onError( error: Error | string ): void {
	// Handle error
}

const onSelectFile = ( media: SelectedMedia ): void => {
};

function onSelectMultiple( files: SelectedMedia[] ): void {
	// Handle multiple file selection
}

function testComponent(): ReactNode {
	return ( <>
			<MediaReplaceFlow
				accept="application/pdf"
				allowedTypes={[ 'image', 'application/pdf' ]}
				mediaId={4}
				mediaURL={''}
				onSelect={onSelectFile}
				onError={onError}
				multiple={false}
				name={'Change me'}
				renderToggle={attr => <button {...attr}>Toggle</button>}
			/>
		</>
	);
}


function Multiple(): ReactNode {
	return ( <>
			<MediaReplaceFlow
				accept="application/pdf"
				allowedTypes={[ 'image', 'application/pdf' ]}
				// @ts-expect-error
				mediaId={'string'}
				// @ts-expect-error
				mediaURL={45}
				name={'Change me'}
				onSelect={onSelectMultiple}
				onError={onError}
				multiple={true}
			/>
		</>
	);
}
