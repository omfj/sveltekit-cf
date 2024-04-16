import { getDB } from '$lib/server/db/drizzle';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const setup: Handle = async ({ event, resolve }) => {
	const dbBinding = event.platform?.env.DB;
	if (dbBinding) {
		event.locals.db = getDB(dbBinding);
	}

	return await resolve(event);
};

export const handle: Handle = sequence(setup);
