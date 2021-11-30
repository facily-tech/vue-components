<template>
  <div>
    <v-text-field
      v-model="cnpj"
      v-mask="'##.###.###/####-##'"
      :rules="cnpjRules"
      v-bind.sync="$props"
    />
  </div>
</template>

<script>
import { VTextField } from 'vuetify/lib';

export default {
  extends: VTextField,
  name: 'FyInputCnpj',
  props: {
    ...VTextField.props,
  },
  data() {
    return {
      cnpj: '',
      cnpjRules: [
        (value) => value.length === 18 || 'O campo Cnpj deve conter 14 números',
      ],
    };
  },
  watch: {
    cnpj() {
      this.$emit('input', this.cnpj);
    },
  },
};
</script>
