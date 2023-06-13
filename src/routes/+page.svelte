<script lang='ts'>
    import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Personal Website</h1>
<p>@{ data.host }</p>

<pre>{new Date().toISOString()}</pre>