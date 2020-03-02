import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      meta: {
        name: "主页"
      },
      redirect: "test",
      name: "home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login/Index.vue")
    },
    {
      path: "/test",
      name: "test",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Test/Index.vue")
    }
  ]
});
