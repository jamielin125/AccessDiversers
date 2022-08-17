<template>
	<div class="flex">
		<aside class="flex flex-col gap-8 pt-8 mr-8">
			<router-link class="underline" to="/">Playground</router-link>
			<router-link class="underline" to="/intro">HTML Intro</router-link>
			<router-link class="underline" to="/tabindex">tabindex</router-link>
			<router-link class="underline" to="/aria">Aria Intro</router-link>
			<router-link class="underline" to="/css-demo">CSS</router-link>
		</aside>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<style scoped>
</style>
