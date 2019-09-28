<template>
  <f7-toolbar position="bottom">
    <div class="display-flex justify-content-left">
      <f7-button
        class="display-flex"
        icon-f7="settings"
        raised
        small
      ></f7-button>
    </div>
    <div class="right">
      <p>
        <b>{{ time }}</b>
      </p>
    </div>
  </f7-toolbar>
</template>

<script lang="ts">
import Vue from "vue";

let intervalObject: number | undefined;

export default Vue.extend({
  name: "ActionBar",
  mounted() {
    this.updateTime();

    //Delay the start of our 1 second interval until the second changes so we're synced up
    setTimeout(() => {
      this.updateTime();
      intervalObject = setInterval(this.updateTime, 1000);
    }, 1000 - new Date().getMilliseconds());
  },
  destroyed() {
    if (typeof intervalObject !== "undefined") {
      clearInterval(intervalObject);
    }
  },
  data() {
    return {
      time: "00:00:00 PM"
    };
  },
  methods: {
    updateTime: function() {
      this.time = new Date().toLocaleTimeString();
    }
  }
});
</script>

<style>
:root {
  --f7-appbar-app-offset: var(
    --f7-toolbar-height
  ); /*Allows for the toolbar to be on the bottom without the app views covering it*/
}
</style>
