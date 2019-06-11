import Vue from "vue";
import Router from "vue-router";
import Authentication from "@/views/Authentication";
import Home from "@/components/Home";

import Header from "@/components/Header";
import BudgetList from "@/views/Budget/BudgetList.vue";

Vue.component("app-header", Header);
Vue.component("budget-list", BudgetList);

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: Home,
        header: Header,
        budgetList: BudgetList
      },
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
    if (Authentication.default.user.authenticated) {
      next();
    } else {
      router.push("/login");
    }
  } else {
    next();
  }
});

export default router;
