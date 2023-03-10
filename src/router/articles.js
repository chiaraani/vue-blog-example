export const articlesRoutes = [
  {
    path: "/articles/:slug",
    name: "article",
    component: () => import("@/views/Articles/Show.vue"),
  },
  {
    path: '/articles/new',
    name: 'new article',
    component: () => import('@/views/Articles/New.vue')
  }
];
