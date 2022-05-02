<template>
  <fy-card elevation="0" class="fy-card-form pa-0 pa-md-4" v-bind="propsAndAttrs" v-on="$listeners">
    <v-card-title
      v-if="$slots['title']"
      class="fy-card-title text-h6 font-weight-medium justify-space-between"
    >
      <slot name="title" />
    </v-card-title>

    <v-card-subtitle v-if="$slots['subtitle']" class="fy-card-subtitle">
      <slot name="subtitle" />
    </v-card-subtitle>

    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
  </fy-card>
</template>

<script lang="ts">
import Vue from 'vue';
import FyCard from './FyCard.vue';

export default Vue.extend({
  name: 'FyCardForm',

  components: {
    FyCard,
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
