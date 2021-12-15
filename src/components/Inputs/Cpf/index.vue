<template>
  <div>
    <v-text-field
      :value="value"
      @input="update"
      v-mask="'###.###.###-##'"
      :rules="rulesCpf"
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
      rulesCpf: [(value) => value.length === 14 || 'O campo Cpf deve conter 11 números'],
    };
  },
  methods: {
    update(value) {
      this.$emit('input', value);
    },
  },
};
</script>
