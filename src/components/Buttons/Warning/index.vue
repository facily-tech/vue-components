<template>
  <v-btn v-bind.sync="$props">
    <slot />
  </v-btn>
</template>

<script>
import { VBtn } from 'vuetify/lib';

export default {
  extends: VBtn,
  name: 'FyButtonInfo',
  props: {
    ...VBtn.props,
    color: {
      type: String,
      default: 'warning',
    },
  },
};
</script>

<style></style>
