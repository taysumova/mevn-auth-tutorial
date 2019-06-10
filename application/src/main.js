import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookie from "vue-cookie";
import Vuetify from "vuetify";
import Authentication from "@/views/Authentication";
import("../node_modules/vuetify/dist/vuetify.min.css");

Vue.use(VueCookie);
Vue.use(Vuetify);

Vue.config.productionTip = false;

Authentication.checkAuthentication();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
