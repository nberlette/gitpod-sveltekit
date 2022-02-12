<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';

	let scrollY = 0;

	const navLinks = [
		['/', 'Home'],
		['/about', 'About'],
		['/todos', 'Todos']
	];

</script>

<svelte:window bind:scrollY />

<header>
	<div class="corner left" class:small={scrollY >= 50}>
		<a href="https://kit.svelte.dev">
			<img 
				src={logo} 
				alt="SvelteKit" 
				aria-label="SvelteKit" 
				width="2em"
				height="2em"
			/>
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
		{#each navLinks as [path, title] }
			<li class:active={$page.url.pathname === path}>
				<a sveltekit:prefetch href={path}>{title}</a>
			</li>
		{/each}
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner right"></div>

</header>

<style windi windi:preflights windi:safelist>
	header {
		display: grid;
		justify-content: center;
		place-items: center;
		width: 100vw;
		min-width: 100vw;
		z-index: 999999;
	}

	.corner {
		width: 3em;
		height: 3em;
	}
	.corner.left {
		position: fixed;
		top: 0;
		left: 0;
	}

	/* svelte corner */
	.corner.left a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner.left img {
		width: 2em;
		height: 2em;
		object-fit: contain;
		transition: opacity 0.5s ease;
		opacity: 1;
	}

	.corner.left.small img {
		opacity: 0.5;
	}

	nav {
		--nav-height: 3em;
		display: flex;
		justify-content: center;
		place-self: center;
		height: var(--nav-height, 3em);
		--background: rgba(255, 255, 255, 0.7);
	}

	nav svg {
		width: calc((2 / 3) * var(--nav-height));
		height: var(--nav-height);
		display: block;
	}

	nav svg > path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
