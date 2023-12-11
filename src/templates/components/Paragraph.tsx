'use client';

import { FC } from 'react';

type Props = {
	richText: string;
};

const Paragraph: FC<Props> = ({ richText }) => {
	return (
		<div className="Paragraph" dangerouslySetInnerHTML={{ __html: richText }} />
	);
};

export default Paragraph;
