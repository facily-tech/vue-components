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
export default {
  name: 'FyDialog',

  props: {
    config: {
      type: Object,
      default: () => {
        const item = {
          fullscreen: false,
          hideOverlay: false,
          scrollable: false
        };
        return item;
      }
    },

    dialog: {
      type: Boolean,
      default: false
    }
  }
};
</script>
