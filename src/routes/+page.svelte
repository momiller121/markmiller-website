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
