<template>
  <v-autocomplete
    :value="select"
    @input="update"
    :loading="loading"
    :items="items"
    :item-text="itemText"
    :item-value="itemValue"
    :label="label"
    v-bind.sync="$props"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { VAutocomplete } from 'vuetify/lib';

import { IAutocompleteItems } from './types';

const BaseAutocomplete = Vue.extend(VAutocomplete);

@Component
export default class FyAutocomplete extends BaseAutocomplete {
  @Prop({ type: Boolean, default: false }) loading!: boolean;

  @Prop({ type: Array as () => IAutocompleteItems[] }) items!: IAutocompleteItems[];

  @Prop({ type: String, default: 'label' }) itemText!: string;

  @Prop({ type: String, default: 'option' }) itemValue!: string;

  @Prop({ type: String, default: '' }) label!: string;

  select = '';

  update(value: string): void {
    this.$emit('input', value);
  }
}
</script>

<style></style>
