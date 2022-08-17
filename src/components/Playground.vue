<template>
	<nav class="flex items-center justify-center" aria-label="Progress">
		<p class="text-sm font-medium">Step 2 of 4</p>
		<ol role="list" class="ml-8 flex items-center space-x-5">
			<li>
				<a class="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900"></a>
			</li>
			<li>
				<a class="relative flex items-center justify-center" aria-current="step">
					<span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
						<span class="w-full h-full rounded-full bg-indigo-200"></span>
					</span>
					<span class="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true"></span>
				</a>
			</li>
			<li>
				<a class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"></a>
			</li>
			<li>
				<a class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"></a>
			</li>
		</ol>
	</nav>
</template>

<script>
export default {
	name: "Playground"
}
</script>

<style scoped></style>