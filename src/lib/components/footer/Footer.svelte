<script>
  import { fly } from 'svelte/transition';
  import { cubicIn } from 'svelte/easing';
</script>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
  footer {
		display: flex;
		flex-direction: column;
    place-items: center;
    place-self: center;
		justify-content: center;
		align-items: center;
		padding: 40px 0;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
