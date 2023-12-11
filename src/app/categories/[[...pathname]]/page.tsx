import { draftMode } from 'next/headers';
import Navigation from '@/templates/components/Navigation';

import { config, getProps } from '@/utils';
import EditablePage from '@/components/EditablePage';
import { NP } from '@/types';

const getStaticProps = async (
	params: Record<string, string>,
	searchParams: Record<string, string | Array<string> | undefined>
) => {
	let resolvedUrl = params.pathname
		? `/categories/${(params.pathname as any).join('/')}`
		: '/categories';

	if (draftMode().isEnabled) {
		const { slug, ...query } = searchParams;
		let params = new URLSearchParams(query as any);
		resolvedUrl += `?${params.toString()}`;
	}

	return getProps(resolvedUrl);
};

const Categories: NP = async ({ params, searchParams }) => {
	const { props } = await getStaticProps(params, searchParams);
	const {
		page = {},
		pagenav = {},
		templateAnnotations = {},
		magnoliaContext,
		nodeName,
	} = props;

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
					page={page}
					config={config}
					templateAnnotations={templateAnnotations}
				/>
			)}
		</div>
	);
};

export default Categories;
