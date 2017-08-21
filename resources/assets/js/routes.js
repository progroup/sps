import Vue from "vue";
import VueRouter from "vue-router";

const Home = require("./pages/Home.vue");

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    }
];


const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
