<template>
  <fy-card class="fy-card-filter pa-2 pa-md-4 pb-md-0" v-bind="propsAndAttrs" v-on="$listeners">
    <v-form ref="form">
      <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
    </v-form>
  </fy-card>
</template>

<script lang="ts">
import Vue from 'vue';
import FyCard from './FyCard.vue';

export default Vue.extend({
  name: 'FyCardFilter',

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
