'use client';

//@ts-expect-error
import { EditableArea } from '@magnolia/react-editor';
import { FC, ReactNode } from 'react';

type Props = { items: ReactNode; metadata: Record<string, any> };

const List: FC<Props> = ({ items, metadata }) => {
	return (
		<>
			<div className="hint">[LIST]</div>
			<ul className="List">
				<EditableArea
					content={items}
					parentTemplateId={metadata['mgnl:template']}
				/>
			</ul>
		</>
	);
};

export default List;
