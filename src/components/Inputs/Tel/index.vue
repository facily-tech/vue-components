<template>
  <div>
    <v-text-field
      v-model="tel"
      v-mask="'(##)#####-####'"
      v-bind.sync="$props"
    />
  </div>
</template>

<script>
import { VTextField } from 'vuetify/lib';

export default {
  extends: VTextField,
  name: 'FyInputTel',
  props: {
    ...VTextField.props,
  },
  data() {
    return {
      tel: '',
    };
  },
  watch: {
    cnpj() {
      this.$emit('input', this.tel);
    },
  },
};
</script>
