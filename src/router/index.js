import { createRouter, createWebHistory } from "vue-router";
import { articlesRoutes } from "./articles";

export const routes = [
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
];

/* c8 ignore start */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
/* c8 ignore stop */