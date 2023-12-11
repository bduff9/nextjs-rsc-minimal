import Navigation from '@/templates/components/Navigation';
import { nodeName, languages, config, pagenavApi, getProps } from '@/utils';
import { NP } from '@/types';
import EditablePage from '@/components/EditablePage';
import { draftMode } from 'next/headers';

export const dynamicParams = false;

const getStaticPath = (
	node: Record<string, any>,
	paths: Array<Record<'pathname', string>>
) => {
	if (node['mgnl:template'].startsWith('nextjs-hybrid-minimal-lm:pages/ssg')) {
		let pathname = node['@path'].replace(nodeName, '');

		pathname = pathname.split('/');

		pathname.shift();

		languages.forEach((language, i) => {
			let i18nPathname = JSON.parse(JSON.stringify(pathname));

			if (i !== 0) i18nPathname.unshift(language);

			paths.push({ pathname: i18nPathname });
		});
	}

	node['@nodes'].forEach((nodeName: string) =>
		getStaticPath(node[nodeName], paths)
	);
};

export const generateStaticParams = async () => {
	const navRes = await fetch(`${pagenavApi}${nodeName}`);
	const nav = await navRes.json();
	const paths: Array<Record<'pathname', string>> = [];

	getStaticPath(nav, paths);

	return paths;
};

const getStaticProps = async (
	params: Record<string, string>,
	searchParams: Record<string, string | Array<string> | undefined>
) => {
	let resolvedUrl = params.pathname
		? '/' + (params.pathname as any).join('/')
		: '';

	if (draftMode().isEnabled) {
		const { slug, ...query } = searchParams;
		let params = new URLSearchParams(query as any);
		resolvedUrl = resolvedUrl + '?' + params.toString();
	}

	return getProps(resolvedUrl);
};

const Page: NP = async ({ params, searchParams }) => {
	const { props } = await getStaticProps(params, searchParams);
	const {
		nodeName,
		page = {},
		pagenav = {},
		templateAnnotations = {},
		magnoliaContext,
	} = props;

	console.log(magnoliaContext, params, searchParams);

	return (
		<div
			className={
				magnoliaContext.isMagnoliaEdit ? 'disable-a-pointer-events' : ''
			}>
			{pagenav && (
				<Navigation
					content={pagenav}
					nodeName={nodeName}
					currentLanguage={magnoliaContext.currentLanguage}
				/>
			)}
			{page && (
				<EditablePage
					config={config}
					page={page}
					templateAnnotations={templateAnnotations}
				/>
			)}
		</div>
	);
};

export default Page;
