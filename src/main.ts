import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

import Experience from "@/views/Experience.vue";
import Experiences from "@/views/Experiences.vue";
import NavBar from "@/components/NavBar.vue";
Vue.component("Experience", Experience);
Vue.component("Experiences", Experiences);
Vue.component("NavBar", NavBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
