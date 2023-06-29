<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<nav class="flex items-center justify-between p-4 border-b border-b-white">
	<a href="/" class="flex justify-between items-center gap-2">
		<Icon icon="ant-design:check-circle-filled" class="text-3xl" />
		<span class="text-2xl font-bold">NextDo</span>
	</a>
	<ul class="flex gap-4 items-center justify-between">
		<li>
			<a href="/auth/login" class="text-xl font-bold">Login</a>
		</li>
		<li>
			<a href="/auth/register" class="text-xl font-bold btn btn-sm variant-filled-primary"
				>Register</a
			>
		</li>
	</ul>
</nav>
