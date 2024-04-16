import { posts } from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const posts = await locals.db.query.posts.findMany();

	return {
		posts
	};
};

export const actions: Actions = {
	create: async ({ locals, request }) => {
		const formData = await request.formData();

		const title = formData.get('title');
		const content = formData.get('content');

		if (typeof title !== 'string' || typeof content !== 'string') {
			throw new Error('Invalid form data');
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
