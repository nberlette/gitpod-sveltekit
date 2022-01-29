import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';

export declare type Cookies = {
	userid?: string;
} & { [key: string]: string };

export const handle: Handle = async (input) => {
	const { request, resolve } = input;
	const { locals, url } = request;
	const { searchParams: query } = url;

	const cookies: Cookies = cookie.parse(request.headers.cookie || '');
	locals.userid = cookies.userid || uuid();
	
	request.method = (
		query.has('_method')
			? query.get('_method')
			: request.method
	).toUpperCase();

	const response = await resolve(request);

	if (!cookies.userid) {
		response.headers['set-cookie'] = `userid=${locals.userid};Path=/;HttpOnly`;
	}

	return response;
};

export default handle;
