<template>
  <fy-input
    :value="text"
    @input="update"
    v-mask="mask"
    :rules="cnpjRule"
    v-bind="propsAndAttrs"
    v-on="$listeners"
  >
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
  </fy-input>
</template>

<script lang="ts">
import Vue from 'vue';
import { VueMaskDirective } from 'v-mask';
import FyInput from './FyInput.vue';

export default Vue.extend({
  name: 'fy-input-cnpj',

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
      cnpjRule: [
        (value: string): boolean | string => {
          if (value && value !== '')
            return value.length === 18 || 'O campo Cnpj deve conter 14 números';

          return false;
        },
      ],
      mask: '##.###.###/####-##',
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
