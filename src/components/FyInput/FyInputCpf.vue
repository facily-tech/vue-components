<template>
  <fy-input
    :value="text"
    @input="update"
    v-mask="mask"
    :rules="cpfRule"
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
import { isValidCPF } from '@/utils/validate';

export default Vue.extend({
  name: 'fy-input-cpf',

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
      cpfRule: [(value: string): boolean | string => isValidCPF(value) || 'O CPF deve ser válido'],
      mask: '###.###.###-##',
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
