import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

import Experiences from "@/views/Experiences.vue";
import Educations from "@/views/Educations.vue";
Vue.component("Experiences", Experiences);
Vue.component("Educations", Educations);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
