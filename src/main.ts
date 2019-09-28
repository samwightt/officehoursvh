import Vue from "vue";

import Framework7 from "framework7/framework7.esm.bundle.js";
import Framework7Vue from "framework7-vue/framework7-vue.esm.bundle.js";
import "framework7/css/framework7.bundle.css";

Vue.config.productionTip = false;
Framework7.use(Framework7Vue);

import AppVue from "./App.vue";

new Vue({
  extends: AppVue
}).$mount("#app");
