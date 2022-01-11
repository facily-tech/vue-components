<template>
  <div>
    <v-snackbar
      v-if="snackbar"
      v-model="snackbar.model"
      :timeout="snackbar.timeout"
      :color="snackbar.bgColor"
    >
      <p :style="`color: ${snackbar.fontColor}`" class="mb-0">{{ snackbar.text }}</p>

      <template v-slot:action="{ attrs }">
        <v-btn color="#ffffff" text v-bind="attrs" @click="snackbarClose" icon>
          <v-icon> mdi-close </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { VSnackbar } from 'vuetify/lib';

import { ISnackbarProps } from './types';

const BaseVSnackbar = Vue.extend(VSnackbar);

@Component
export default class FySnackbar extends BaseVSnackbar {
  @Prop({ type: Object as () => ISnackbarProps, default: {} as ISnackbarProps })
  snackbar!: ISnackbarProps;

  snackbarClose(): void {
    this.$emit('snackbar-close');
  }
}
</script>
