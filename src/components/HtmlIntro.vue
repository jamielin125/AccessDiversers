<template>
	<h1 class="py-4 text-3xl">HTML 基本簡介</h1>
	<h2 class="py-6 text-2xl">table</h2>
	<table class="min-w-full divide-y divide-gray-300">
		<thead class="bg-gray-50">
		<tr>
			<th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
			<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
			<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
			<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
			<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
				<span class="sr-only">Edit</span>
			</th>
		</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 bg-white">
		<tr>
			<td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Lindsay Walton</td>
			<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Front-end Developer</td>
			<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">lindsay.walton@example.com</td>
			<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
			<td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
				<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
			</td>
		</tr>
		</tbody>
	</table>
	<h2 class="py-6 text-2xl">list</h2>

	<ul role="list" class="divide-y divide-gray-200">
		<li class="py-4 flex">
			<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
			<div class="ml-3">
				<p class="text-sm font-medium text-gray-900">Calvin Hawkins</p>
				<p class="text-sm text-gray-500">calvin.hawkins@example.com</p>
			</div>
		</li>

		<li class="py-4 flex">
			<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
			<div class="ml-3">
				<p class="text-sm font-medium text-gray-900">Kristen Ramos</p>
				<p class="text-sm text-gray-500">kristen.ramos@example.com</p>
			</div>
		</li>

		<li class="py-4 flex">
			<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
			<div class="ml-3">
				<p class="text-sm font-medium text-gray-900">Ted Fox</p>
				<p class="text-sm text-gray-500">ted.fox@example.com</p>
			</div>
		</li>
	</ul>

	<h2 class="py-6 text-2xl">button</h2>
	<button class="border border-gray-500 p-2">example 1</button>


	<h2 class="py-6 text-2xl">link</h2>
	<div class="pb-8">
		<a href="#">example 1</a>
		<a>example 2</a>
	</div>


</template>

<script>
export default {
	name: "HtmlIntro"
}
</script>

<style scoped>

</style>