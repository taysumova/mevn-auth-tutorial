import Vue from "vue";
import Router from "vue-router";
import * as Auth from "@/views/Authentication";
import Home from "@/components/Home";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiredAuth: true
      }
    },
    {
      path: "/login",
      name: "Authentication",
      component: () => import("./views/Authentication/Authentication.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth) {
    if (Auth.default.user.authenticated) {
      next();
    } else {
      router.push("/login");
    }
  } else {
    next();
  }
});

export default router;
