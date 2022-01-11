<template>
  <div>
    <v-text-field
      :value="text"
      @input="update"
      v-mask="'#####-###'"
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
export default class FyInputCep extends BaseVTextField {
  @Prop({ type: String }) value!: string;

  text = this.value ? this.value : '';

  rules = [
    (value: string): boolean | string => value.length === 9 || 'O campo Cep deve conter 8 números',
  ];

  update(value: string): void {
    this.$emit('input', value);
  }
}
</script>
