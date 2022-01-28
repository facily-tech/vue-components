<template>
  <div>
    <v-text-field
      :value="text"
			:label="label"
      @input="update"
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
export default class FyInputDefault extends BaseVTextField {
  @Prop({ type: String }) value!: string;

	@Prop({ type: String }) label!: string;

  text = this.value ? this.value : '';

  update(value: string): void {
    this.$emit('input', value);
  }
}
</script>
