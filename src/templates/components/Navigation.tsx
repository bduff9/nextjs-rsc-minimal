import Link from 'next/link';
import { languages } from '../../utils';
// import { usePathname } from 'next/navigation';
import { FC, Fragment } from 'react';

let NODE_NAME: string;
let BASENAME = '';

const renderLink = (item: Record<string, any>, _currentLanguage?: string) => {
	return (
		<Fragment key={item['@id']}>
			<Link href={BASENAME + item['@path'].replace(NODE_NAME, '') || '/'}>
				{item['@name']}
			</Link>
			{item['@nodes'].length > 0 &&
				item['@nodes'].map((nodeName: string) => renderLink(item[nodeName]))}
		</Fragment>
	);
};

type Props = {
	nodeName: string;
	content: Record<string, any>;
	currentLanguage: string;
};

const Navigation: FC<Props> = ({ nodeName, content, currentLanguage }) => {
	const pathname = ''; //usePathname();

	NODE_NAME = nodeName;
	BASENAME = currentLanguage === languages[0] ? '' : '/' + currentLanguage;

	return (
		<nav>
			{renderLink(content, currentLanguage)}
			{languages.map((language, i) => (
				<Link
					key={language}
					style={{ padding: 'initial' }}
					href={
						(i === 0 ? '' : '/' + language) +
						pathname.replace('/' + languages[1], '')
					}>
					<button>{language}</button>
				</Link>
			))}
		</nav>
	);
};

export default Navigation;
