<template>
  <div>
    <v-text-field
      :value="value"
      @input="update"
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
    value: String,
  },
  data() {
    return {
      cnpj: this.value ? this.value : '',
      cnpjRules: [
        (value) => value.length === 18 || 'O campo Cnpj deve conter 14 números',
      ],
    };
  },
  methods: {
    update(value) {
      this.$emit('input', value);
    },
  },
};
</script>
