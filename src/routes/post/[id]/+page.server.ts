import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const incrementPostViews = async (kv: KVNamespace, id: number) => {
	const key = `post:${id}:views`;

	const views = await kv.get(key);
	const newViews = (views ? Number(views) : 0) + 1;

	await kv.put(key, String(newViews));

	return newViews;
};

export const load: PageServerLoad = async ({ params, locals, platform }) => {
	const post = await locals.db.query.posts.findFirst({
		where: (post, { eq }) => eq(post.id, Number(params.id))
	});

	if (!post) {
		throw error(404, 'Post not found');
	}

	let views: number | null = null;
	if (platform?.env.KV) {
		views = await incrementPostViews(platform?.env.KV, post.id);
	}

	return {
		post,
		views
	};
};
