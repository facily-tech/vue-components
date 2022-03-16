<template>
  <v-container fluid>
    <FyToolbar :items="toolbar" :backButton="toolbar.backButton">
      <template v-slot:btn>
        <slot name="toolbar-actions"></slot>
      </template>
    </FyToolbar>
    <div class="mx-1">
      <slot></slot>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import FyToolbar from '@/components/FyToolbar/FyToolbar.vue';
import { IItemsToolbar } from '@/components/FyToolbar/types';

type TToolbar = IItemsToolbar & {
  backButton: boolean;
};

export default Vue.extend({
  name: 'FyPage',

  props: {
    toolbar: {
      type: Object as () => TToolbar,
      default: {
        backButton: false,
      } as TToolbar,
      required: true,
    },
  },

  components: {
    FyToolbar,
  },
});
</script>
