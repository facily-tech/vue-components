<template>
  <v-dialog
    v-model="dialog"
    persistent
    :fullscreen="config.fullscreen"
    :hide-overlay="config.hideOverlay"
    :scrollable="config.scrollable"
  >
    <slot name="content" />
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { VDialog } from 'vuetify/lib';

import { IDialog } from '../types';

const BaseVDialog = Vue.extend(VDialog);

@Component
export default class FyDialog extends BaseVDialog {
  @Prop({
    type: Object as () => IDialog,
    default: () => ({ fullscreen: false, hideOverlay: false, scrollable: false } as IDialog),
  })
  config!: IDialog;

  @Prop({ type: Boolean, default: false }) dialog!: boolean;
}
</script>
