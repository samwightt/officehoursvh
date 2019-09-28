<template>
  <div id="app">
    <f7-app :params="f7params">
      <f7-statusbar></f7-statusbar>

      <f7-view color="orange" id="main-view" url="/" main class="safe-areas"></f7-view>
    </f7-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import HomePage from "./pages/Home.vue";
import TutorPage from "./pages/Tutor.vue";

export default Vue.extend({
  name: "OfficeHours",
  components: {},
  data: function() {
    return {
      f7params: {
        id: "org.jdf2.officehours",
        name: "OfficeHours",
        theme: "md",
        routes: [
          {
            path: "/",
            component: HomePage
          },
          {
            path: "/tutor",
            component: TutorPage
          }
        ]
      }
    };
  },
  beforeCreate() {
    this.$store.dispatch("establishConnection");
    this.$store.dispatch("sendMessage", {
      users: ["Hello there!"]
    });
  }
});
</script>

<style>
/* Material Icons Font (for MD theme) */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(./assets/fonts/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(./assets/fonts/MaterialIcons-Regular.woff2) format("woff2"),
    url(./assets/fonts/MaterialIcons-Regular.woff) format("woff"),
    url(./assets/fonts/MaterialIcons-Regular.ttf) format("truetype");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}

/* Framework7 Icons Font (for iOS theme) */
@font-face {
  font-family: "Framework7 Icons";
  font-style: normal;
  font-weight: 400;
  src: url("./assets/fonts/Framework7Icons-Regular.eot");
  src: url("./assets/fonts/Framework7Icons-Regular.woff2") format("woff2"),
    url("./assets/fonts/Framework7Icons-Regular.woff") format("woff"),
    url("./assets/fonts/Framework7Icons-Regular.ttf") format("truetype");
}

.f7-icons {
  font-family: "Framework7 Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 25px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga=1";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  text-align: center;
}
</style>
