/*
 * @Date: 2023-03-20 11:26:13
 * @LastEditTime: 2023-04-03 10:52:49
 * @FilePath: /Rockets/src/router/index.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
