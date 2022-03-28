<template>
  <v-btn :elevation="0" v-bind="$attrs" v-on="$listeners">
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FyButton',
});
</script>
