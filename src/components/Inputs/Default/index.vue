<template>
  <div>
    <v-text-field
      :value="value"
      @input="update"
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
  methods: {
    update(value) {
      this.$emit('input', value);
    },
  },
};
</script>
