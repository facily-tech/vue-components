<template>
  <div>
    <v-text-field
      v-model="text"
      v-bind.sync="$props"
  />
  </div>
</template>

<script>
import { VTextField } from 'vuetify/lib';

export default {
  extends: VTextField,
  name: 'FyInputDefault',
  props: {
    ...VTextField.props,
  },
  data() {
    return {
      text: '',
    };
  },
  watch: {
    text() {
      this.$emit('input', this.text);
    },
  },
};
</script>
