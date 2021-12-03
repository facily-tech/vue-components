<template>
  <div>
    <v-text-field
      v-model="phone"
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
  data() {
    return {
      phone: this.value ? this.value : '',
    };
  },
  watch: {
    phone() {
      this.$emit('input', this.phone);
    },
  },
};
</script>
