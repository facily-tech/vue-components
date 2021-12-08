<template>
  <div>
    <v-text-field
      v-model.lazy="currency"
      v-money="money"
      v-bind.sync="$props"
  />
  </div>
</template>

<script>
import { VTextField } from 'vuetify/lib';
import { VMoney } from 'v-money';

export default {
  extends: VTextField,
  name: 'FyInputCurrency',
  props: {
    ...VTextField.props,
    value: {
      type: String,
      default: '0',
    },
    type: {
      type: String,
      default: 'R$ ',
    },
    decimal: {
      type: String,
      default: ',',
    },
    thousands: {
      type: String,
      default: '.',
    },
    precision: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      currency: this.value ? this.value : '0',
      money: {
        decimal: ',',
        thousands: '.',
        prefix: this.type,
        precision: 2,
        masked: false, /* doesn't work with directive */
      },
    };
  },
  directives: { money: VMoney },
  watch: {
    currency() {
      this.$emit('input', this.currency);
    },
  },
};
</script>
