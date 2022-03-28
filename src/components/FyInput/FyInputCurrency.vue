<template>
  <fy-input
    :value="text"
    @input="update"
    v-money="money"
    v-bind="propsAndAttrs"
    v-on="$listeners"
    :maxlength="maxlength"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { VMoney } from 'v-money';
import { formatCurrencyMaskToFloat } from '@/utils/format.mask';
import FyInput from '@/components/FyInput/FyInput.vue';

const MAXLENGTH = 24;

export default Vue.extend({
  name: 'fy-input-currency',

  directives: { money: VMoney },

  inheritAttrs: false,

  components: {
    FyInput,
  },

  props: {
    value: {
      type: [String, Number],
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

  computed: {
    propsAndAttrs(): Record<string, unknown> {
      return {
        ...this.$attrs,
        ...this.$props,
      };
    },
  },

  data() {
    return {
      text: this.value,
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
