const routes = [
	{
		path: '/',
		component: () => import('../components/HelloWorld.vue'),
	},
	{
		path: '/playground',
		name: 'Playground',
		component: () => import('../components/Playground.vue'),
	},
]

export default routes;