import { minify } from 'html-minifier';
import { prerendering } from '$app/env';
import type { Handle } from '@sveltejs/kit';

export const htmlMinifierOptions: { [k: string]: any } = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: false,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true
};

export const handle: Handle = async ({ request, resolve }) => {
  const response = await resolve(request);

  if (response.headers['content-type'] === 'text/html') {
    response.body = minify(response.body.toString(), htmlMinifierOptions);
  }

  return response;
}

export default handle;