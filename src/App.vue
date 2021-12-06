<template>
  <v-app>
    <v-main>
      <ShowComponents />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import ShowComponents from './components/ShowComponents.vue';

export default Vue.extend({
  name: 'App',

  components: {
    ShowComponents,
  },
});
</script>
