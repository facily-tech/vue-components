<template>
  <div>
    <v-text-field
      :value="text"
      @input="update"
      v-mask="'##/##/####'"
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
import moment from 'moment';

const BaseVTextField = Vue.extend(VTextField);

@Component
export default class FyInputDate extends BaseVTextField {
  @Prop({ type: String }) value!: string;

  text = this.getDateToString(this.value);

  getStringToDate(str: string): string {
    const date = moment(str, 'DD/MM/YYYY');
    return date.format();
  }

  getDateToString(date: string): string {
    if (!date) return '';
    const nDate = moment(date);
    return nDate.format('DD/MM/YYYY');
  }

  update(value: string): void {
    const formatDate = this.getStringToDate(value);
    this.$emit('input', formatDate);
  }
}
</script>
