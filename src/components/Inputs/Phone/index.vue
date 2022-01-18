<template>
  <div>
    <v-text-field
      :value="value"
      @input="update"
      v-mask="'(##)#####-####'"
      v-bind.sync="$props"
    />
  </div>
</template>

<script>
import { VTextField } from 'vuetify/lib';

export default {
  extends: VTextField,
  name: 'FyInputPhone',
  props: {
    ...VTextField.props,
    value: String,
  },
  methods: {
    update(value) {
      this.$emit('input', value);
    },
  },
};
</script>
