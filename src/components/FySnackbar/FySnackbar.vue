<template>
  <div>
    <fy-snackbar-base
      v-if="snackbar"
      v-model="snackbar.model"
      :timeout="snackbar.timeout"
      :color="snackbar.bgColor"
      v-bind="propsAndAttrs"
      v-on="$listeners"
    >
      <p :style="`color: ${snackbar.fontColor}`" class="mb-0">{{ snackbar.text }}</p>

      <template v-slot:action="{ attrs }">
        <v-btn color="#ffffff" text v-bind="attrs" @click="snackbarClose" icon>
          <v-icon> mdi-close </v-icon>
        </v-btn>
      </template>
    </fy-snackbar-base>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { VSnackbar } from 'vuetify/lib';

import FySnackbarBase from './FySnackbarBase';

import { ISnackbarProps } from './types';

const BaseVSnackbar = Vue.extend({ mixins: [VSnackbar] });

interface options extends InstanceType<typeof BaseVSnackbar> {
  snackbar: ISnackbarProps;
}

export default BaseVSnackbar.extend<options>().extend({
  name: 'fy-snacbar',

  components: { FySnackbarBase },

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
