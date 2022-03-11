<template>
  <v-container fluid>
    <v-card>
      <FyToolbar :items="toolbar">
        <template v-slot:btn>
          <slot name="toolbar-actions"></slot>
        </template>
      </FyToolbar>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import FyToolbar from '@/components/FyToolbar/FyToolbar.vue';
import { IItemsToolbar } from '@/components/FyToolbar/types';

export default Vue.extend({
  name: 'FyPage',

  props: {
    toolbar: {
      type: Object as () => IItemsToolbar,
      default: {} as IItemsToolbar,
      required: true,
    },
  },

  components: {
    FyToolbar,
  },
});
</script>
