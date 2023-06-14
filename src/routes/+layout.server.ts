import type { LayoutServerLoad } from './$types'
import * as config from '$lib/config'

export const load = (async ({ url }) => {
    return {
        title: config.title,
        description: config.description,
        url: config.url
    }
}) satisfies LayoutServerLoad