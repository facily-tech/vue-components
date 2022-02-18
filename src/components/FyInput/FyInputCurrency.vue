<template>
  <div>
    <fy-input
      :value="text"
      @input="update"
      v-money="money"
      v-bind.sync="$props"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { VTextField } from 'vuetify/lib';
import { VMoney } from 'v-money';

const BaseVTextField = Vue.extend({ mixins: [VTextField] });

interface options extends InstanceType<typeof BaseVTextField> {
  value: string;
  type: string;
  decimal: string;
  thousands: string;
  precision: number;
}

export default BaseVTextField.extend<options>().extend({
  name: 'fy-input-currency',

  directives: { money: VMoney },

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
    },
  },
});
</script>
