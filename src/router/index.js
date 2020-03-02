import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);
// 引入布局组件
import Layout from "@/views/Layout";
export default new Router({
  routes: [
    {
      path: "/",
      meta: {
        name: "主页"
      },
      redirect: "Login"
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login/Index.vue")
    },
    {
      path: "/console",
      name: "console",
      redirect: "index",
      meta: {
        name: "控制台",
        icon: "console"
      },
      component: Layout,
      children: [
        {
          path: "/index",
          name: "index",
          meta: {
            name: "首页"
          },
          component: () => import("../views/Console/index.vue")
        }
      ]
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("@/views/About.vue")
    }
  ]
});
