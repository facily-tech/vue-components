<template>
  <v-autocomplete
    :value="select"
    @input="update"
    :loading="loadingData"
    :items="itemsData"
    :item-text="itemText"
    :item-value="itemValue"
    :label="label"
    :return-object="returnObject"
    :filter="(f) => f"
    :search-input.sync="search"
    :prepend-icon="prependIcon"
    v-bind.sync="$props"
    v-bind="$attrs"
    v-on="$listeners"
    :data-test="dataTest"
    :no-data-text="noDataTextData"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { VAutocomplete } from 'vuetify/lib';

import { debounce } from 'lodash';

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

  @Prop({ type: String, default: '' }) prependIcon!: string;

  @Prop({ type: String, default: 'Dados não encontrado' }) noDataText!: string;

  @Prop({ type: Number, default: 3 }) ruleSearch!: number;

  @Prop({ type: String, default: 'Mínimo de 3 caractéres' }) ruleSearchText!: string;

  private select: string | IAutocompleteItems = '';

  private search = null;

  private itemsData = [] as IAutocompleteItems[];

  private loadingData = this.loading;

  private noDataTextData = this.ruleSearchText;

  @Watch('search')
  changeSearch(query: string | null): void {
    if (
      query &&
      (!this.select || this.select['text'] !== query || this.select['label'] !== query)
    ) {
      if (query.length >= this.ruleSearch) this.querySearch(query, this);
    }
  }

  querySearch = debounce((query: string, $self: this) => {
    $self.loadingData = true;

    const queryResult = $self.items.filter((item) => {
      return (
        (item[$self.itemText] || item[$self.itemValue] || '')
          .toLowerCase()
          .indexOf((query || '').toLowerCase()) > -1
      );
    }) as IAutocompleteItems[];

    if (!queryResult.length) $self.noDataTextData = $self.noDataText;

    $self.itemsData = [...queryResult];
    $self.loadingData = false;
  }, 500);

  update(value: string): void {
    this.$emit('input', value);
  }
}
</script>

<style></style>
