<template>
  <div>
    <v-text-field
      :value="text"
      @input="update"
      v-mask="'##:##'"
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
export default class FyInputTime extends BaseVTextField {
  @Prop({ type: String }) value!: string;

  @Prop({
    type: Array,
    default: () => [
      (value: string): boolean | string => {
        const nValue = value.split(':');

        let msg = '';

        if (Number(nValue[0]) > 23) msg = 'Hora inválida';

        if (Number(nValue[1]) > 59) msg = 'Minutos inválidos';

        if (Number(nValue[0]) > 31 && Number(nValue[1]) > 12) msg = 'Hora e minitos inválidos';

        if (!msg) return true;

        return msg;
      },
    ],
  })
  rules!: [];

  text = this.value ? this.value : '';

  update(value: string): void {
    this.$emit('input', value);
  }
}
</script>
