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
    value: String,
  },
  data() {
    return {
      text: this.value ? this.value : '',
    };
  },
  watch: {
    text() {
      this.$emit('input', this.text);
    },
  },
};
</script>
