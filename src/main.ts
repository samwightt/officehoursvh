import Vue from "vue";

import Framework7 from "framework7/framework7.esm.bundle.js";
import Framework7Vue from "framework7-vue/framework7-vue.esm.bundle.js";
import "framework7/css/framework7.bundle.css";
import store from './store'

Vue.config.productionTip = false;
Framework7.use(Framework7Vue);

import AppVue from "./App.vue";

new Vue({
  extends: AppVue,
  store
}).$mount("#app");
