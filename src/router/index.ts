import type { AppRoutes } from "@/types/router";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: AppRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
