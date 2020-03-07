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
      hidden: true,
      meta: {
        name: "主页"
      },
      redirect: "Login"
    },
    {
      path: "/login",
      name: "login",
      hidden: true,
      meta: {
        name: "登录"
      },
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
    },
    {
      path: "/info",
      name: "name",
      meta: {
        name: "信息管理",
        icon: "info"
      },
      component: Layout,
      children: [
        {
          path: "/infoindex",
          name: "infoindex",
          meta: {
            name: "信息列表"
          },
          component: () => import("../views/Info/index.vue")
        }
      ]
    }
  ]
});
