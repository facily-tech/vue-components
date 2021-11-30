<template>
  <div>
    <v-text-field
      v-model="cep"
      v-mask="'#####-###'"
      :rules="cepRules"
      v-bind.sync="$props"
    />
  </div>
</template>

<script>
import { VTextField } from 'vuetify/lib';

export default {
  extends: VTextField,
  name: 'FyInputCep',
  props: {
    ...VTextField.props,
  },
  data() {
    return {
      cep: '',
      cepRules: [
        (value) => value.length === 9 || 'O campo Cep deve conter 8 números',
      ],
    };
  },
  watch: {
    cep() {
      this.$emit('input', this.cep);
    },
  },
};
</script>
