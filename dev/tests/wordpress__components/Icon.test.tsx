import {Icon} from '@wordpress/components';
import type {FunctionComponent} from 'react';


const Example: FunctionComponent<{ size: number }> = () => {
	return <p>&nbsp;</p>;
};

function testComponent() {
	return <>

		<Icon icon="wordpress" />

		<Icon
			icon={
				<svg>
					<path d="M5 4v3h5.5v12h3V7H19V4z" />
				</svg>
			}
			dx={14}
		/>

		<Icon
			icon="wordpress"
			size={20}
			title="WordPress"
			// @ts-expect-error
			dx={14}
		/>

		<Icon
			icon={Example}
			size={11}
			// @ts-expect-error
			dx={14}
		/>

		<Icon icon={<Example size={11} />} size={11} dx={14} />
	</>;
}
