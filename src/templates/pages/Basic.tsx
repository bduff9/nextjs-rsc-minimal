'use client';

//@ts-expect-error
import { EditableArea } from '@magnolia/react-editor';
import { FC } from 'react';

type Props = {
	main: Record<string, any>;
	extras: Record<string, any>;
	title: string;
	metadata: Record<string, any>;
};

const Basic: FC<Props> = ({ extras, main, metadata, title }) => {
	return (
		<div className="Basic">
			<h2 className="hint">[Basic Page]</h2>
			<h1>{title || metadata['@name']}</h1>

			<main>
				<h2 className="hint">[Main Area]</h2>
				{main && <EditableArea className="Area" content={main} />}
			</main>

			<div className="Extras">
				<h2 className="hint">[Sercondary Area]</h2>
				{extras && <EditableArea className="Area" content={extras} />}
			</div>
		</div>
	);
};

export default Basic;
