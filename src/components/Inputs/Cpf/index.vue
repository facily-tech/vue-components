<template>
  <div>
    <v-text-field
      :value="text"
      @input="update"
      v-mask="'###.###.###-##'"
      :rules="rules"
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

const BaseVTextField = Vue.extend(VTextField);

@Component
export default class FyInputCpf extends BaseVTextField {
  @Prop({ type: String }) value!: string;

  @Prop({
    type: Array,
    default: () => [
      (value: string): boolean | string =>
        value.length === 14 || 'O campo Cpf deve conter 11 números',
    ],
  })
  rules!: [];

  text = this.value ? this.value : '';

  update(value: string): void {
    this.$emit('input', value);
  }
}
</script>
