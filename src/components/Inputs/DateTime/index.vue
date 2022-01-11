<template>
  <div>
    <v-text-field
      :value="text"
      @input="update"
      v-mask="'##/##/#### ##:##'"
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
export default class FyInputDateTime extends BaseVTextField {
  @Prop({ type: String }) value!: string;

  text = this.getDateToString(this.value);

  getStringToDate(str: string): string {
    if (!str) return '';

    const dateTime = moment(str, 'DD/MM/YYYY HH:mm');

    return dateTime.format();
  }

  getDateToString(date: string): string {
    if (!date) return '';

    const nDate = moment(date);

    return nDate.format('DD/MM/YYYY HH:mm');
  }

  update(value: string): void {
    const formatDate = this.getStringToDate(value);
    this.$emit('input', formatDate);
  }
}
</script>
