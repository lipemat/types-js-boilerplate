import type {ReactNode} from 'react';
import {MediaPlaceholder} from '@wordpress/block-editor';
import {SelectedMedia} from '@lipemat/js-boilerplate/global/wp-media';


function onError( error: Error | string ): void {
	// Handle error
}

function onSelectSingle( files: SelectedMedia ): void {

}

function onSelectMultiple( files: SelectedMedia[] ): void {
	// Handle multiple file selection
}

function testComponent(): ReactNode {
	return ( <>
			<MediaPlaceholder
				allowedTypes={[ 'image', 'application/pdf' ]}
				labels={{
					title: 'Image',
					instructions: 'Upload an image or drag and drop it here.',
				}}
				onSelect={onSelectSingle}
				onError={onError}
				multiple={false}
				className="test"
				// @ts-expect-error
				render={() => null}
			/>
		</>
	);
}


function Multiple(): ReactNode {
	return ( <>
			<MediaPlaceholder
				allowedTypes={[ 'image', 'application/pdf' ]}
				labels={{
					title: 'Image',
					instructions: 'Upload an image or drag and drop it here.',
				}}
				onSelect={onSelectMultiple}
				onError={onError}
				multiple={true}
				className="test"
				// @ts-expect-error
				render={() => null}
			/>
		</>
	);
}
