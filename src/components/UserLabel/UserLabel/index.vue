<template>
  <div class="d-flex align-center justify-center">
    <v-avatar v-bind.sync="$props">
      <slot />
    </v-avatar>

    <div class="flex-column justify-space-between ml-5">
      <div class="font-weight-bold">{{ label }}</div>
      <div class="grey--text text--lighten-1">{{ caption }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { VAvatar } from 'vuetify/lib';

const BaseVAvatar = Vue.extend(VAvatar);

@Component
export default class FyUserLabel extends BaseVAvatar {
  @Prop({ type: String, default: '' }) label!: string;

  @Prop({ type: String, default: '' }) caption!: string;
}
</script>

<style></style>
