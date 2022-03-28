<template>
  <v-snackbar
    v-if="snackbar"
    v-model="snackbar.model"
    :timeout="snackbar.timeout"
    :color="snackbar.bgColor"
    v-bind="propsAndAttrs"
    v-on="$listeners"
  >
    <p :style="`color: ${snackbar.fontColor}`" class="mb-0">{{ snackbar.text }}</p>

    <template v-slot:action="{ attrs }">
      <fy-button color="#ffffff" text v-bind="attrs" @click="snackbarClose" icon>
        <v-icon> mdi-close </v-icon>
      </fy-button>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue';
import FyButton from '@/components/FyButton';
import { ISnackbarProps } from './types';

export default Vue.extend({
  name: 'fy-snacbar',

  components: { FyButton },

  props: {
    snackbar: {
      type: Object as () => ISnackbarProps,
      default: {} as ISnackbarProps,
    },
  },

  computed: {
    propsAndAttrs(): Record<string, unknown> {
      return {
        ...this.$attrs,
        ...this.$props,
      };
    },
  },

  methods: {
    snackbarClose(): void {
      this.$emit('snackbar-close');
    },
  },
});
</script>
