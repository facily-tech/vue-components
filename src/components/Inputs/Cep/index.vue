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
    value: String,
  },
  data() {
    return {
      cep: this.value ? this.value : '',
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
