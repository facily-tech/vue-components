<template>
  <fy-input
    :value="text"
    @input="update"
    v-mask="mask"
    :rules="cepRule"
    v-bind="propsAndAttrs"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { VueMaskDirective } from 'v-mask';
import FyInput from './FyInput.vue';

export default Vue.extend({
  name: 'fy-input-cep',

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
      cepRule: [
        (value: string): boolean | string => {
          if (value && value !== '')
            return value.length === 9 || 'O campo Cep deve conter 8 números';

          return false;
        },
      ],
      mask: '#####-###',
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
