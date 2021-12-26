import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, resolve }) => {
	const cookies: Record<string, string> = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();
	
	// TODO https://github.com/sveltejs/kit/issues/1046
	// if (request.query.has('_method')) {
	// 	request.method = request.query.get('_method').toUpperCase();
	// }
	
	request.method = (
		request.query.has('_method')
			? request.query.get('_method')
			: request.method
	).toUpperCase();

	const response = await resolve(request);

	if (!cookies.userid) {
		response.headers['set-cookie'] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
	}

	return response;
};

export default handle;