<template>
	<ul role="list" class="divide-y divide-gray-200">
		<li class="py-4 flex">
			<img
				class="h-10 w-10 rounded-full"
				src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			>
			<div class="ml-3">
				<p class="text-sm font-medium text-gray-900">Calvin Hawkins</p>
				<p class="text-sm text-gray-500">calvin.hawkins@example.com</p>
			</div>
		</li>
		<li class="py-4 flex">
			<img
				class="h-10 w-10 rounded-full"
				src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			>
			<div class="ml-3">
				<p class="text-sm font-medium text-gray-900">Kristen Ramos</p>
				<p class="text-sm text-gray-500">kristen.ramos@example.com</p>
			</div>
		</li>
	</ul>

	<ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
		<li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
			<div class="w-0 flex-1 flex items-center">
				<svg
					class="flex-shrink-0 h-5 w-5 text-gray-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
				</svg>
				<span class="ml-2 flex-1 w-0 truncate"> resume_back_end_developer.pdf </span>
			</div>
			<div class="ml-4 flex-shrink-0">
				<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
			</div>
		</li>
		<li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
			<div class="w-0 flex-1 flex items-center">
				<svg
					class="flex-shrink-0 h-5 w-5 text-gray-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
				</svg>
				<span class="ml-2 flex-1 w-0 truncate"> coverletter_back_end_developer.pdf </span>
			</div>
			<div class="ml-4 flex-shrink-0">
				<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
			</div>
		</li>
	</ul>

<!--	-->
	<nav class="bg-gray-800">
		<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div class="relative flex items-center justify-between h-16">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<button
						type="button"
						class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
						aria-label="Open main menu"
					>
<!--						<span class="sr-only">Open main menu</span>-->
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
						<svg
							class="hidden h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none" viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
					<div class="flex-shrink-0 flex items-center">
						<img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow">
						<img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow">
					</div>
					<div class="hidden sm:block sm:ml-6">
						<div class="flex space-x-4">
							<a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
							<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
							<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
							<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
						</div>
					</div>
				</div>
				<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
					<button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
						<span class="sr-only">View notifications</span>
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		<div class="sm:hidden" id="mobile-menu">
			<div class="px-2 pt-2 pb-3 space-y-1">
				<a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
				<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
				<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
				<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
			</div>
		</div>
	</nav>

	<section aria-description="Choose your favorite fruit — the fruit with the highest number of votes will be added to the lunch options next week.">
		<form>
			<fieldset>
				<legend>
					Pick your favorite fruit
				</legend>
				<ul>
					<li><label>Apple: <input type="radio" name="fruit" value="apple"></label></li>
					<li><label>Orange: <input type="radio" name="fruit" value="orange"></label></li>
					<li><label>Banana: <input type="radio" name="fruit" value="banana"></label></li>
				</ul>
			</fieldset>
		</form>
	</section>

</template>

<script>
export default {
	name: "AriaIntro"
}
</script>

<style scoped>

</style>