import type {ReactNode} from 'react';
import {MediaPlaceholder} from '@wordpress/block-editor';


function onError( error: Error | string ): void {
	// Handle error
}

function onSelect( media: unknown ): void {

}

function testComponent(): ReactNode {
	return ( <>
			<MediaPlaceholder
				allowedTypes={[ 'image', 'application/pdf' ]}
				labels={{
					title: 'Image',
					instructions: 'Upload an image or drag and drop it here.',
				}}
				onSelect={onSelect}
				onError={onError}
				multiple={false}
				className="test"
				// @ts-expect-error
				render={() => null}
			/>
		</>
	);
}
