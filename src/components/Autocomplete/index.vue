<template>
  <v-autocomplete
    :value="select"
    @input="update"
    :loading="loading"
    :items="items"
    :item-text="itemText"
    :item-value="itemValue"
    :label="label"
    :return-object="returnObject"
    v-bind.sync="$props"
    v-bind="$attrs"
    v-on="$listeners"
    :data-test="dataTest"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { VAutocomplete } from 'vuetify/lib';

import VSelect, {
  defaultMenuProps as VSelectMenuProps,
} from 'vuetify/lib/components/VSelect/VSelect';

import { IAutocompleteItems } from './types';

const BaseAutocomplete = Vue.extend(VAutocomplete);

const defaultMenuProps = {
  ...VSelectMenuProps,
  offsetY: true,
  offsetOverflow: true,
  transition: false,
};

@Component
export default class FyAutocomplete extends BaseAutocomplete {
  @Prop({ type: VSelect.options.props.menuProps.type, default: () => defaultMenuProps })
  menuProps!: VSelect.options.props.menuProps.type;

  @Prop({ type: Boolean, default: false })
  loading!: boolean;

  @Prop({ type: Array as () => IAutocompleteItems[] }) items!: IAutocompleteItems[];

  @Prop({ type: String, default: 'label' }) itemText!: string;

  @Prop({ type: String, default: 'option' }) itemValue!: string;

  @Prop({ type: String, default: '' }) label!: string;

  @Prop({ type: Boolean, default: false }) returnObject!: boolean;

  @Prop({ type: String, default: '' }) dataTest!: string;

  private select = '';

  update(value: string): void {
    this.$emit('input', value);
  }
}
</script>

<style></style>
