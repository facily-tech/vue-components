<template>
  <fy-button
    :color="color"
    @click="$emit('active-control', { key: event, value: item })"
    data-test="btn-status"
    x-small
    text
    v-bind="propsAndAttrs"
    v-on="$listeners"
  >
    <span class="text-uppercase">{{ name }}</span>
    <v-icon small class="pl-1">mdi-circle</v-icon>
  </fy-button>
</template>

<script lang="ts">
import Vue from 'vue';
import FyButton from './FyButton.vue';

export default Vue.extend({
  name: 'FyButtonStatus',

  components: {
    FyButton,
  },

  props: {
    item: {
      type: Object,
    },

    status: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    propsAndAttrs(): Record<string, unknown> {
      return {
        ...this.$attrs,
        ...this.$props,
      };
    },

    name() {
      return this.status ? 'Ativo' : 'Inativo';
    },

    color() {
      return this.status ? 'success' : 'warning';
    },

    event() {
      return !this.status ? 'actitve' : 'inactitve';
    },
  },
});
</script>
