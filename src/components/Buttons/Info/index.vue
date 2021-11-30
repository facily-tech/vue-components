<template>
  <v-btn v-bind.sync="$props" v-on="$listeners">
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
      default: 'info'
    }
  }
};
</script>

<style></style>
