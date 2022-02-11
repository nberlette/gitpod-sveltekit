import type { Options as MinifierOptions } from 'html-minifier';
import { minify } from 'html-minifier';
import { mode, dev } from '$app/env';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, resolve }) => {
	const response = await resolve(request);

	// do not minify in development mode
	if (dev || mode === 'development') return response;

	const htmlMinifierOptions: MinifierOptions = {
		collapseBooleanAttributes: true,
		collapseWhitespace: true,
		conservativeCollapse: true,
		decodeEntities: true,
		html5: true,
		ignoreCustomComments: [/^#/],
		minifyCSS: {
			compatibility: {
				properties: {
					ieBangHack: false,
					ieFilters: false,
					iePrefixHack: true,
					ieSuffixHack: true,
					colors: true,
					merging: true,
					urlQuotes: false,
					zeroUnits: true
				}
			}
		},
		minifyJS: false,
		removeAttributeQuotes: true,
		removeComments: true,
		removeOptionalTags: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: false,
		sortAttributes: true,
		sortClassName: true
	};

	if (response.headers['content-type'] === 'text/html') {
    response.body = minify(response.body.toString(), htmlMinifierOptions);
  }

  return response;
}

export default handle;
