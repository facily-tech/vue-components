<template>
  <v-text-field
    v-bind.sync="$props"
  ></v-text-field>
</template>

<script>
import { VTextField } from 'vuetify/lib';

export default {
  extends: VTextField,
  name: 'FyInputCpf',
  props: {
    ...VTextField.props,
  },
};
</script>

<style></style>
