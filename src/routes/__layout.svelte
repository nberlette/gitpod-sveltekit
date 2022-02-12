<script lang="ts" context="module">
	export const prerender = true;
	export async function load ({ url, fetch }) {
		return {
			props: {
				path: url.pathname,
			}
		}
	}
</script>
<script lang="ts">
	import 'virtual:windi.css';
	import { navigating } from '$app/stores';
	import { backIn, backOut } from 'svelte/easing';
	import { blur, fly } from 'svelte/transition';
	import { 
		Header, 
		Footer, 
		LoadingIndicator, 
		GithubCorner 
	} from '$lib/components';
</script>

{#if $navigating && $navigating.to}
	<LoadingIndicator />
{/if}

<Header />

<main class="flex flex-col flex-1 my-2 mx-auto w-full max-w-[1024px] box-border p-4">
{#key $navigating?.to}
	<div out:fly={{x:-1000,duration:250,delay:150,easing:backIn}} in:fly|intro={{x:1000,duration:500,delay:300,easing:backOut}}>
		<div transition:blur>
				<slot />
				<Footer />
		</div>
	</div>
{/key}
</main>

<GithubCorner />

<style windi:preflights:global windi:safelist:global windi:global global>
	/* import our global app.css stylesheet and +safelist its contents */
	@import "../app.css";
</style>
