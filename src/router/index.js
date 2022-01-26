import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Coin from "../views/Coin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/coin/:namme",
    name: "Coin",
    component: Coin,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
