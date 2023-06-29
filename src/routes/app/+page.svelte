<script lang="ts">
	export let data;

	const handleSignOut = async () => {
		await data.supabase.auth.signOut();
	};
</script>

<button on:click={handleSignOut} class="btn variant-filled-primary">Sign Out</button>
