/**
 * @tutorial https://svelte.dev/tutorial/actions
 * @param {HTMLFormElement} form - the form element to enhance
 * @param {*} options - ```js 
 * { pending: (data, form) => void,   error: (res, error, form) => void, result: (res, form) => void } 
 ```
 */
export default function enhance(
	form: HTMLFormElement,
	{ pending, error, result }:
	{
		pending?: (data: FormData, form: HTMLFormElement) => void;
		error?: (res: Response, error: Error, form: HTMLFormElement) => void;
		result: (res: Response, form: HTMLFormElement) => void;
	}
): { destroy(): void; } {
	let current_token: {};

	async function handle_submit(e: Event): Promise<void> {
		const token = (current_token = {});
		e.preventDefault();
		const body = new FormData(form);
		if (pending) pending(body, form);

		try {
			const res = await fetch(form.action, {
				method: form.method,
				headers: {
					accept: 'application/json'
				},
				body
			});

			if (token !== current_token) return;

			if (res.ok) return result(res, form);
			else if (error) return error(res, null, form);
			else console.error(await res.text());
		} catch (e) {
			if (error) {
				console.error('%c error: %c %s', 'color:#fff;background-color:#cc0000;text-transform:uppercase;font-weight:bold;', 'font-weight:bold;color:#c00;', e);
				error(null, e, form);
			} else {
				throw e;
			}
		}
	}

	form.addEventListener('submit', handle_submit);

	return {
		destroy() {
			form.removeEventListener('submit', handle_submit);
		}
	};
}
