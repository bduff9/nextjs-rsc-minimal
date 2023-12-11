'use client';

import { FC } from 'react';
//@ts-expect-error
import { EditablePage } from '@magnolia/react-editor';

type Props = {
	config: Record<string, any>;
	page: Record<string, any>;
	templateAnnotations: Record<string, any>;
};

const Page: FC<Props> = ({ config, page, templateAnnotations }) => {
	return (
		<EditablePage
			content={page}
			config={config}
			templateAnnotations={templateAnnotations}
		/>
	);
};

export default Page;
