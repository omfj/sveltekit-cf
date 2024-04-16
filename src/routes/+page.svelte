<script lang="ts">
	const { data } = $props();

	const { posts } = data;
</script>

<h1 class="text-3xl mb-8">Welcome to SvelteKit on Cloudflare Pages!</h1>

<p class="mb-4">
	This is a simple SvelteKit project deployed on Cloudflare Pages. You can find the <a
		class="text-blue-400 hover:underline"
		href="https://github.com/omfj/sveltekit-cf"
		target="_blank"
	>
		source code on GitHub
	</a>.
</p>

<div class="mb-4">
	<a class="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" href="/create">
		Create a new post
	</a>
</div>

{#if posts.length > 0}
	<ul>
		{#each posts as post}
			<li class="py-2">
				<a class="hover:underline" href="/post/{post.id}">
					<h2>{post.title}</h2>
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>No posts found.</p>
{/if}
