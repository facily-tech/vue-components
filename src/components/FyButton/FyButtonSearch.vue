<template>
  <fy-button
    outlined
    :color="color"
    class="fy-button-search"
    :data-test="dataTest"
    @click="$emit('click-filter')"
    v-bind="propsAndAttrs"
    v-on="$listeners"
  >
    <v-icon>mdi-magnify</v-icon>
    <span class="text-uppercase" :class="isHideName">
      {{ name }}
    </span>
  </fy-button>
</template>

<script lang="ts">
import Vue from 'vue';
import FyButton from './FyButton.vue';

export default Vue.extend({
  name: 'FyButtonSearch',

  components: {
    FyButton,
  },

  props: {
    name: {
      type: String,
      default: 'Buscar',
    },

    hideName: {
      type: Boolean,
      default: false,
    },

    dataTest: {
      type: String,
      default: 'btn-filter',
    },
  },

  computed: {
    propsAndAttrs(): Record<string, unknown> {
      return {
        ...this.$attrs,
        ...this.$props,
      };
    },

    isHideName() {
      return this.hideName ? 'd-none d-sm-flex' : '';
    },

    color(): string {
      return this.$vuetify?.theme?.dark ? 'grey' : 'primary';
    }
  },
});
</script>
