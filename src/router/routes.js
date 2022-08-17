const routes = [
	{
		path: '/',
		name: 'Playground',
		component: () => import('../components/Playground.vue'),
	},
	{
		path: '/intro',
		name: 'HtmlIntro',
		component: () => import('../components/HtmlIntro.vue'),
	},
	{
		path: '/tabindex',
		name: 'Tabindex',
		component: () => import('../components/Tabindex.vue'),
	},
	{
		path: '/aria',
		name: 'AriaIntro',
		component: () => import('../components/AriaIntro.vue'),
	},
	{
		path: '/css-demo',
		name: 'CssDemo',
		component: () => import('../components/CssDemo.vue'),
	},
]

export default routes;