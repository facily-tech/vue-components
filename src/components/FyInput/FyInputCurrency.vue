<template>
  <fy-input
    :value="text"
    @input="update"
    v-money="money"
    v-bind.sync="$props"
    v-bind="$attrs"
    v-on="$listeners"
    :maxlength="maxlength"
  />
</template>

<script lang="ts">
import Vue from 'vue';

import { VMoney } from 'v-money';
import { formatCurrencyMaskToFloat } from '@/utils/format.mask';

import FyInput from './FyInput';

const BaseVTextField = Vue.extend({ extends: FyInput, mixins: [FyInput] });

interface options extends InstanceType<typeof BaseVTextField> {
  value: string;
  type: string;
  decimal: string;
  thousands: string;
  precision: number;
}

const MAXLENGTH = 24;

export default BaseVTextField.extend<options>().extend({
  name: 'fy-input-currency',

  directives: { money: VMoney },

  components: {
    FyInput,
  },

  props: {
    value: {
      tyupe: String,
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
    maxlength: {
      type: Number,
      default: MAXLENGTH,
      validator(value): boolean {
        return value > 0 && value <= MAXLENGTH;
      },
    },
  },
  data() {
    return {
      text: this.value ? this.value : '0',
      money: {
        decimal: ',',
        thousands: '.',
        prefix: this.type,
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
    };
  },
  methods: {
    update(value: string): void {
      this.$emit('input', value);
      this.$emit('input-float', formatCurrencyMaskToFloat(value, this.money.precision));
    },
  },
});
</script>
