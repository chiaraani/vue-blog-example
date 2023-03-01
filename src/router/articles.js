export const articlesRoutes = [
	{
		path: '/articles/:slug',
		name: 'article',
		component: () => import('@/views/Articles/Show.vue')
	}
]