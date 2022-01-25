<template>
  <v-btn v-bind.sync="$props" v-on="$listeners">
    <slot />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { VBtn } from 'vuetify/lib';

const BaseVBtn = Vue.extend(VBtn);

@Component
export default class FyButtonWarning extends BaseVBtn {
  @Prop({ type: String, default: 'warning' }) color!: string;
}
</script>

<style></style>
