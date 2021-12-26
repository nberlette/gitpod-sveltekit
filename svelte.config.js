import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss'

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		vite: {
			plugins: [WindiCSS()]
		}
	}
}
