import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/index'

export default async function createTestRouter(visitPath = '/') {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })

  router.push(visitPath)
  await router.isReady()

  return router
}
