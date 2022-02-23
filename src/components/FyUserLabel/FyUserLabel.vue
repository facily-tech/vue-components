<template>
  <div class="d-flex align-center justify-center">
    <fy-avatar v-bind.sync="$props" v-bind="$attrs">
      <slot />
    </fy-avatar>

    <div class="flex-column justify-space-between ml-5">
      <div class="font-weight-bold">{{ label }}</div>
      <div class="grey--text text--lighten-1">{{ caption }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { VAvatar } from 'vuetify/lib';

const BaseVAvatar = Vue.extend({ mixins: [VAvatar] });

interface options extends InstanceType<typeof BaseVAvatar> {
  label?: string;
  caption?: string;
}

export default BaseVAvatar.extend<options>().extend({
  name: 'fy-user-label',

  components: { FyAvatar: () => import('@/components/FyAvatar') },

  props: {
    label: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
  },
});
</script>
