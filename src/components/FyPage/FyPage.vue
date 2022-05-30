<template>
  <v-container fluid>
    <fy-toolbar :items="toolbar" :backButton="toolbar.backButton">
      <template v-slot:btn>
        <slot name="toolbar-actions"></slot>
      </template>
    </fy-toolbar>
    <div class="mx-md-4">
      <v-progress-linear v-if="loading" indeterminate />
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

    loading: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    FyToolbar,
  },
});
</script>
