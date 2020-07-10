import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Console from "../views/console/index.vue";
import login from "../views/login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: login,
    children: []
    // name: "操作员控制台"
  },
  {
    path: "/index",
    name: "console",
    component: Console,
    children: []
    // name: "操作员控制台"
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
