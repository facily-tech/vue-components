<template>
  <fy-dialog-base
    v-model="dialog"
    persistent
    :fullscreen="config.fullscreen"
    :hide-overlay="config.hideOverlay"
    :scrollable="config.scrollable"
    v-bind="propsAndAttrs"
    v-on="$listeners"
  >
    <slot name="content" />
  </fy-dialog-base>
</template>

<script lang="ts">
import Vue from 'vue';

import { VDialog } from 'vuetify/lib';

import FyDialogBase from './FyDialogBase';

import { IDialog } from './types';

const BaseVDialog = Vue.extend({ extends: VDialog, mixins: [VDialog] });

interface options extends InstanceType<typeof BaseVDialog> {
  config: IDialog;
  dialog: boolean;
  ['max-width']: string;
}

export default BaseVDialog.extend<options>().extend({
  name: 'fy-dialog',

  components: { FyDialogBase },

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
