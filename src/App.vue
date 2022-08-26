<template>
	<div class="flex">
		<aside class="flex flex-col gap-8 pt-8 mr-8">
			<!--	router link 利用路徑轉導	-->
			<router-link class="underline" to="/">Playground</router-link>
			<router-link class="underline" to="/intro">HTML Intro</router-link>
			<!--	router link 利用 route name 轉導	-->
			<router-link class="underline" :to="{ name: 'Tabindex' }">tabindex</router-link>
			<!--	利用 hyper link 相對路徑轉導	-->
			<a class="underline" href="/aria">Aria</a>
			<a class="underline" href="/css-demo">CSS demo</a>
		</aside>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<style scoped>
</style>
