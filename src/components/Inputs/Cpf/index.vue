<template>
  <div>
    <v-text-field
      v-model="cpf"
      v-mask="'###.###.###-##'"
      :rules="cpfRules"
      v-bind.sync="$props"
    />
  </div>
</template>

<script>
import { VTextField } from 'vuetify/lib';

export default {
  extends: VTextField,
  name: 'FyInputCpf',
  props: {
    ...VTextField.props,
    value: String,
  },
  data() {
    return {
      cpf: this.value ? this.value : '',
      cpfRules: [
        (value) => value.length === 14 || 'O campo Cpf deve conter 11 números',
      ],
    };
  },
  watch: {
    cpf() {
      this.$emit('input', this.cpf);
    },
  },
};
</script>
