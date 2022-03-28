<template>
  <v-btn :elevation="0" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FyButton',
});
</script>
