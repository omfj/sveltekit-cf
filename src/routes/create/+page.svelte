<script>
	import { enhance } from '$app/forms';
</script>

<h1 class="text-3xl mb-8">Create a new post</h1>

<a class="text-blue-400 hover:underline mb-4" href="/">&larr; Back</a>

<form class="space-y-4" method="post" use:enhance>
	<div class="flex flex-col gap-1">
		<label class="font-medium" for="title">Title</label>
		<input
			class="rounded-lg border-2 border-gray-300 py-1 px-2"
			type="text"
			id="title"
			name="title"
			required
		/>
	</div>
	<div class="flex flex-col gap-1">
		<label class="font-medium" for="content">Content</label>
		<textarea
			class="rounded-lg border-2 border-gray-300 py-1 px-2"
			id="content"
			name="content"
			required
		></textarea>
	</div>

	<button
		class="py-1 px-2 font-medium flex items-center justify-center border-2 border-gray-300 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg"
		type="submit">Create post</button
	>
</form>
