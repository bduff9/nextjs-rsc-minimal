// More about Preview Mode: https://nextjs.org/docs/advanced-features/preview-mode

import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
	// res.setPreviewData({
	// 	query: req.query,
	// });
	draftMode().enable();
	return redirect(`${req.nextUrl.searchParams.get('slug')}?mgnlPreview=false`);
};
