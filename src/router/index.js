import Vue from "vue";
import VueRouter from "vue-router";
import VuePageTransition from "vue-page-transition";
import Home from "../views/Home.vue";
import AddCard from "../views/AddCard.vue";

Vue.use(VueRouter);
Vue.use(VuePageTransition);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/AddCard",
    name: "AddCard",
    component: AddCard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
