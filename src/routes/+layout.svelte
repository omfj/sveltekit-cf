<script lang="ts">
	import '../app.css';

	const { children } = $props();
</script>

<main class="py-24 max-w-[900px] w-full px-4 mx-auto">
	{@render children()}
</main>
