<script>
	const { data } = $props();
	const { post, views } = data;
</script>

<h1 class="text-3xl mb-8">{post.title}</h1>

<a class="text-blue-400 hover:underline mb-4" href="/">&larr; Back</a>

<p>Views: {views}</p>

<p>{post.content}</p>
