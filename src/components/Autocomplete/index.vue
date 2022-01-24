<template>
  <v-autocomplete
    :value="select"
    @input="update"
    :loading="loading"
    :items="itemsData"
    :item-text="itemText"
    :item-value="itemValue"
    :label="label"
    :return-object="returnObject"
    :filter="(f) => f"
    :search-input.sync="search"
    :append-icon="appendIcon"
    v-bind.sync="$props"
    v-bind="$attrs"
    v-on="$listeners"
    :data-test="dataTest"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { VAutocomplete } from 'vuetify/lib';

import _ from 'lodash';

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

  @Prop({ type: Boolean, default: false }) loading!: boolean;

  @Prop({ type: Array as () => IAutocompleteItems[] }) items!: IAutocompleteItems[];

  @Prop({ type: String, default: 'label' }) itemText!: string;

  @Prop({ type: String, default: 'option' }) itemValue!: string;

  @Prop({ type: String, default: '' }) label!: string;

  @Prop({ type: Boolean, default: false }) returnObject!: boolean;

  @Prop({ type: String, default: '' }) dataTest!: string;

  @Prop({ type: String, default: 'search' }) appendIcon!: string;

  private select: string | IAutocompleteItems = '';

  private search = null;

  private itemsData = [] as IAutocompleteItems[];

  @Watch('search')
  querySearch(query: string | null): void {
    if (
      query &&
      (!this.select || this.select['text'] !== query || this.select['label'] !== query)
    ) {
      _.debounce(() => {
        this.loading = true;
        this.itemsData = this.items.filter((item) => {
          return (
            (item['text'] || item['label'] || '')
              .toLowerCase()
              .indexOf((query || '').toLowerCase()) > -1
          );
        });
        this.loading = false;
      }, 500);
    }
  }

  update(value: string): void {
    this.$emit('input', value);
  }
}
</script>

<style></style>
