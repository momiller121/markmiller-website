<script lang="ts">
	import type { LayoutData } from './$types'
	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'
	import '@fontsource/rammetto-one'
	// Supports weights 400-700
	import '@fontsource-variable/caveat'
	import '$lib/app.css'

	export let data: LayoutData
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>
<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		max-width: 65ch;
		margin-inline: auto;
	}
</style>
