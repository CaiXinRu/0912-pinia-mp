import type { AppRoutes } from "@/types/router";
import { createRouter, createWebHistory } from "vue-router";
import Counter from "../views/Counter.vue";
import Home from "../views/Home.vue";
import Todos from "../views/Todos.vue";

const routes: AppRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
