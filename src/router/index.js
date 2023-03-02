import { createRouter, createWebHistory } from "vue-router";
import { articlesRoutes } from "./articles";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    ...articlesRoutes,
    {
      path: "/:pathMatch(.*)*",
      name: "not found",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
