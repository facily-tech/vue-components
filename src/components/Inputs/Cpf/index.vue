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
  },
  data() {
    return {
      cpf: '',
      cpfRules: [
        // (value) => !!value || 'O Campo CPF é requerido',
        (value) => {
          console.log(value.length);
          return value.length === 14 || 'O campo Cpf deve conter 11 números';
        },
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
