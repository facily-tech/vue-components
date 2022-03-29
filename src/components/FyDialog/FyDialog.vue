<template>
  <v-dialog
    v-model="dialog"
    persistent
    :fullscreen="config.fullscreen"
    :hide-overlay="config.hideOverlay"
    :scrollable="config.scrollable"
    v-bind="propsAndAttrs"
    v-on="$listeners"
  >
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
    <slot name="content"></slot>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { IDialog } from './types';

export default Vue.extend({
  name: 'fy-dialog',

  props: {
    config: {
      type: Object as () => IDialog,
      default: () => ({ fullscreen: false, hideOverlay: false, scrollable: false } as IDialog),
    },
    dialog: { type: Boolean, default: false },
  },

  computed: {
    propsAndAttrs(): Record<string, unknown> {
      return {
        ...this.$attrs,
        ...this.$props,
      };
    },
  },
});
</script>
