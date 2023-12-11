'use client';

//@ts-expect-error
import { EditableArea } from '@magnolia/react-editor';
import { FC, MouseEvent, useState } from 'react';

type Props = {
	expanderItems: Record<string, any>;
	metadata: Record<string, any>;
};

const Expander: FC<Props> = ({ expanderItems, metadata }) => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

	const toggle = (event: MouseEvent) => {
		setIsCollapsed((isCollapsed) => !isCollapsed);
		event.preventDefault();
	};

	return (
		<div className="expander">
			<div
				onClick={toggle}
				className={
					isCollapsed ? 'open expanderHeader' : 'closed expanderHeader'
				}>
				Expander
				<svg
					className="expanderIcon"
					focusable="false"
					viewBox="0 0 24 24"
					aria-hidden="true"
					role="presentation">
					<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
				</svg>
			</div>

			{!isCollapsed && (
				<div>
					<div className="hint">[EXPANDER OPENED]</div>
					<EditableArea
						content={expanderItems}
						parentTemplateId={metadata['mgnl:template']}
					/>
				</div>
			)}
		</div>
	);
};

export default Expander;
