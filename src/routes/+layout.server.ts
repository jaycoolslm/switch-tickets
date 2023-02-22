import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (({ url }) => {
	if (url.pathname === '/resellersacademy') {
		throw redirect(307, '/resellers-academy');
	}
}) satisfies LayoutServerLoad;
