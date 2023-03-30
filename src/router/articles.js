export const articlesRoutes = [
  {
    path: '/articles/:id',
    name: 'article',
    component: () => import('@/views/Articles/Show.vue'),
  },
  {
    path: '/articles/new',
    name: 'new article',
    component: () => import('@/views/Articles/New.vue'),
  },
  {
    path: '/articles/:id/edit',
    name: 'edit article',
    component: () => import('@/views/Articles/Edit.vue'),
  },
]
