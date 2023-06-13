import type { PageServerLoad } from './$types'

export const load = (async ({ url }) => {
	return {
		host: url.host,
		renderedTS: new Date().getTime()
	}
}) satisfies PageServerLoad
