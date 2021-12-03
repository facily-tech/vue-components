<template>
  <div class="d-flex align-center justify-center">
    <v-avatar v-bind.sync="$props">
      <slot />
    </v-avatar>

    <div class="flex-column justify-space-between ml-5">
      <div class="font-weight-bold">{{ label }}</div>
      <div class="grey--text text--lighten-1">{{ caption }}</div>
    </div>
  </div>
</template>

<script>
import { VAvatar } from 'vuetify/lib';

export default {
  extends: VAvatar,
  name: 'FyUserLabel',
  props: {
    ...VAvatar.props,
    label: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
