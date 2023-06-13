import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    return {
        host: url.host
    };
}) satisfies PageServerLoad;