<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	// I will experiment with this regarding cache control and
	// understanding back end round trips.
	$: renderTime = new Date(data.renderedTS).toISOString()
</script>

<h1>Personal Website</h1>
<p>@{data.host}</p>

<pre>{renderTime}</pre>

<style>
	*,
	:not(p) {
		font-family: 'Rammetto One', sans-serif;
	}

	h1 {
		line-height: var(--font-lineheight-1);
		font-size: var(--font-size-fluid-3);
		font-weight: var(--font-weight-9);
		font-family: var(--font-sans);
	}
</style>
