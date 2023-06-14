<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	// I will experiment with this regarding cache control and
	// understanding back end round trips.
	$: renderTime = new Date(data.renderedTS).toISOString()
</script>

<h1>{data.title}</h1>
<p>@{data.host}</p>

<pre>{renderTime}</pre>

<hr />

<p class="description">{data.description}</p>

<style>
	p {
		font-family: 'Caveat Variable', sans-serif;
		font-size: var(--font-size-5);
		font-weight: var(--font-weight-7);
	}

	p.description {
		margin-block-start: var(--size-6);
		font-size: var(--font-size-4);
	}

	h1 {
		font-family: 'Rammetto One', sans-serif;
		line-height: var(--font-lineheight-1);
		font-size: var(--font-size-fluid-2);
		font-weight: var(--font-weight-2);
	}
</style>
