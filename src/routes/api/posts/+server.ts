import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getPosts } from '$lib/server/notion';

export const GET: RequestHandler = async () => {
    const posts = await getPosts()
    return json(posts)
};