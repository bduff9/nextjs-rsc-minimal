'use client';

import { FC } from 'react';

type Props = {
	image: Record<string, any>;
};

const ImageFC: FC<Props> = (props) => (
	<img
		className="Image"
		src={
			process.env.NEXT_PUBLIC_MGNL_HOST +
			'/dam/' +
			props.image['@id'] +
			props.image['@path']
		}
		alt="Etiam Purus"
	/>
);

export default ImageFC;
