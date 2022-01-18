<template>
  <div>
    <v-text-field
      :value="value"
      @input="update"
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
  methods: {
    update(value) {
      this.$emit('input', value);
    },
  },
};
</script>
