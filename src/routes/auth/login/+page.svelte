<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
</script>

<div class="flex flex-col justify-center items-center p-8 gap-8 h-screen">
	<h2 class="font-bold text-4xl">Log in</h2>
	<form method="post" use:enhance class="flex flex-col gap-4">
		{#if form?.error}
			<p class="text-error-500">{form.error}</p>
		{/if}
		<label class="label">
			<span>Email</span>
			<input type="email" name="email" placeholder="Enter your email..." class="input" required />
		</label>
		<label class="label">
			<span>Password</span>
			<input
				type="password"
				name="password"
				placeholder="Enter your password..."
				class="input"
				required
			/>
		</label>
		<button type="submit" class="btn variant-filled-primary font-bold text-lg mt-4">Log in</button>
	</form>
</div>
