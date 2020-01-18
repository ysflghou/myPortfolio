import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/experiences",
    name: "experiences",
    component: () =>
      import(/* webpackChunkName: "experiences" */ "../views/Experiences.vue")
  },
  {
    path: "/educations",
    name: "educations",
    component: () =>
      import(/* webpackChunkName: "educations" */ "../views/Educations.vue")
  },
  {
    path: "/home",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: "*",
    redirect: "/home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/myporttfolio/",
  routes
});

export default router;
