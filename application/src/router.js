import Vue from "vue";
import Router from "vue-router";
import * as Auth from "@/views/Authentication";

// Pages
import Home from "@/components/Home";
import Authentication from "@/views/Authentication/Authentication";

// Global components
import Header from "@/components/Header";
import List from "@/views/List/List";
import Create from "@/components/pages/Create";

// Register components
Vue.component("app-header", Header);
Vue.component("list", List);
Vue.component("create", Create);

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: Home,
        header: Header,
        list: List,
        create: Create
      }
    },
    {
      path: "/login",
      name: "Authentication",
      component: Authentication
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/login") {
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
