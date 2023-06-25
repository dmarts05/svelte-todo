<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<div class="flex flex-col h-screen">
	<!-- Navigation -->
	<nav class="flex items-center justify-between p-4 border-b border-b-white">
		<a href="/" class="flex justify-between items-center gap-2">
			<Icon icon="ant-design:check-circle-filled" class="text-3xl" />
			<span class="text-2xl font-bold">NextDo</span>
		</a>
		<button class="btn" on:click={toggleMenu}>
			<Icon icon="ant-design:menu-outlined" class="text-2xl" />
		</button>
	</nav>

	<!-- Hidden menu for mobile -->
	{#if showMenu}
		<ul
			class="flex flex-col items-center justify-center gap-8 fixed top-0 left-0 w-full h-full z-10 bg-surface-backdrop-token"
			transition:slide={{ duration: 200, axis: 'x' }}
			on:click={toggleMenu}
			on:keydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					toggleMenu();
				}
			}}
		>
			<li>
				<a href="/login" class="btn variant-ghost w-52 text-xl font-bold" on:click|stopPropagation
					>Login</a
				>
			</li>
			<li>
				<a
					href="/register"
					class="btn variant-filled-primary w-52 text-xl font-bold"
					on:click|stopPropagation>Register</a
				>
			</li>
		</ul>
	{/if}

	<!-- Hero -->
	<section class="flex-1 flex flex-col items-center justify-center gap-8 p-8">
		<h1 class="text-5xl font-bold text-center">Organize your work and life, finally.</h1>
		<p class="text-xl text-center">
			Become focused, organized, and calm with Nextdo. The world’s #1 task manager and to-do list
			app.
		</p>
	</section>
</div>
