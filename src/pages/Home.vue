<template>
  <f7-page>
    <f7-navbar title="OfficeHours"></f7-navbar>

    <f7-block>
      <f7-row>
        <f7-col>
          <f7-button large fill href="/tutor">Continue as tutor</f7-button>
        </f7-col>
      </f7-row>

      <f7-row class="padding-top-half">
        <f7-col>
          <f7-button large fill href="/student">Continue as a student</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <div v-for="(user, index) in users" :key="`user-${index}`">
      <h1>{{user}}</h1>
    </div>
    <h1></h1>
  </f7-page>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomePage",
  computed: {
    users() {
      return this.$store.state.users;
    }
  }
});
</script>
