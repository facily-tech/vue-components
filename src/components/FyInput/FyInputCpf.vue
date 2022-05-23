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

const isValidCPF = (cpf: string): boolean => {
  const cpfOnlyNumbers = cpf.replace(/[^\d]+/g, '');

  if (
    [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ].includes(cpfOnlyNumbers)
  ) {
    return false;
  }

  if (cpfOnlyNumbers.length !== 11 || !!cpfOnlyNumbers.match(/(\d)\1{10}/)) {
    return false;
  }

  const cpfArray = cpfOnlyNumbers.split('');
  const validator = cpfArray
    .filter((digit, index, array) => index >= array.length - 2 && digit)
    .map((el) => +el);

  const toValidate = (pop: number) =>
    cpfArray.filter((digit, index, array) => index < array.length - pop && digit).map((el) => +el);

  const rest = (count: number, pop: number) =>
    ((toValidate(pop).reduce((soma, el, i) => soma + el * (count - i), 0) * 10) % 11) % 10;

  return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
};

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
