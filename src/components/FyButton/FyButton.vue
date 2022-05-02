<template>
  <v-btn
    :elevation="0"
    :data-test="dataTest"
    v-on="$listeners"
    v-bind="$attrs"
    style="min-height: 40px"
  >
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FyButton',
  props: {
    dataTest: {
      type: String,
      default: 'btn',
    },
  },
});
</script>
