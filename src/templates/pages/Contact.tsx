'use client';

//@ts-expect-error
import { EditableArea } from '@magnolia/react-editor';
import { FC } from 'react';

type Props = {
	main: Record<string, any>;
	title: string;
};

const Contact: FC<Props> = ({ main, title }) => {
	const boxStyle = {
		background: '#eaf7f5',
		padding: '20px',
	};

	return (
		<div className="Contact">
			<h2 className="hint">[Contact Page]</h2>
			<div className="box" style={boxStyle}>
				<h1>{title || 'Nulla vitae elit libero, a pharetra augue.'}</h1>
			</div>
			{main && <EditableArea content={main} />}
		</div>
	);
};

export default Contact;
