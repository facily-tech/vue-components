<template>
  <v-btn v-bind.sync="$props">
    <slot />
  </v-btn>
</template>

<script>
import { VBtn } from 'vuetify/lib';

export default {
  extends: VBtn,
  name: 'FyButtonCancel',
  props: {
    ...VBtn.props
  }
};
</script>

<style></style>
