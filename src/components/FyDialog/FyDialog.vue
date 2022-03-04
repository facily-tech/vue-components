<template>
  <fy-dialog-base
    v-model="dialog"
    persistent
    :fullscreen="config.fullscreen"
    :hide-overlay="config.hideOverlay"
    :scrollable="config.scrollable"
    v-bind.sync="$props"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot name="content" />
  </fy-dialog-base>
</template>

<script lang="ts">
import Vue from 'vue';

import { VDialog } from 'vuetify/lib';

import { IDialog } from './types';

const BaseVDialog = Vue.extend({ mixins: [VDialog] });

interface options extends InstanceType<typeof BaseVDialog> {
  value: string;
}

export default BaseVDialog.extend<options>().extend({
  name: 'fy-dialog',

  components: { FyDialogBase: () => import('./FyDialogBase') },

  props: {
    config: {
      type: Object as () => IDialog,
      default: () => ({ fullscreen: false, hideOverlay: false, scrollable: false } as IDialog),
    },
    dialog: { type: Boolean, default: false },
  },
});
</script>
