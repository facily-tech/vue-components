<template>
  <fy-input :value="text" @input="update" v-mask="mask" v-bind="propsAndAttrs" v-on="$listeners" />
</template>

<script lang="ts">
import Vue from 'vue';
import { VueMaskDirective } from 'v-mask';
import FyInput from './FyInput.vue';

export default Vue.extend({
  name: 'fy-input-phone',

  directives: { mask: VueMaskDirective },

  components: {
    FyInput,
  },

  props: {
    value: {
      type: String,
    },
  },

  data() {
    return {
      text: this.value ? this.value : '',
      mask: '(##)#####-####',
    };
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
    update(value: string): void {
      this.$emit('input', value);
    },
  },
});
</script>
