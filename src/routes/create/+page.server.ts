import { posts } from '$lib/server/db/schema';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();

		const title = formData.get('title');
		const content = formData.get('content');

		if (typeof title !== 'string' || typeof content !== 'string') {
			return {
				success: false,
				error: 'Invalid form data'
			};
		}

		await locals.db.insert(posts).values({
			title,
			content,
			createdAt: new Date(),
			updatedAt: new Date()
		});

		return {
			success: true
		};
	}
};
