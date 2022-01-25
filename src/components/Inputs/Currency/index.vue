<template>
  <div>
    <v-text-field
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
import { Component, Prop } from 'vue-property-decorator';

import { VTextField } from 'vuetify/lib';
import { VMoney } from 'v-money';

const BaseVTextField = Vue.extend(VTextField);

@Component({
  directives: { money: VMoney },
})
export default class FyInputCurrency extends BaseVTextField {
  @Prop({ type: String, default: '0' }) value!: string;

  @Prop({ type: String, default: 'R$ ' }) type!: string;

  @Prop({ type: String, default: ',' }) decimal!: string;

  @Prop({ type: String, default: '.' }) thousands!: string;

  @Prop({ type: Number, default: 2 }) precision!: number;

  text = this.value ? this.value : '0';

  money = {
    decimal: ',',
    thousands: '.',
    prefix: this.type,
    precision: 2,
    masked: false /* doesn't work with directive */,
  };

  update(value: string): void {
    this.$emit('input', value);
  }
}
</script>
