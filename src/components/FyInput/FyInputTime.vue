<template>
  <fy-input
    :value="text"
    @input="update"
    v-mask="mask"
    :rules="timeRule"
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
  name: 'fy-input-time',

  directives: { mask: VueMaskDirective },

  components: {
    FyInput,
  },

  props: {
    value: {
      type: String,
    },
    timeRule: {
      type: Array,
      default: () => [
        (value: string): boolean | string => {
          const nValue = value.split(':');

          let msg = '';

          if (Number(nValue[0]) > 23) msg = 'Hora inválida';

          if (Number(nValue[1]) > 59) msg = 'Minutos inválidos';

          if (Number(nValue[0]) > 31 && Number(nValue[1]) > 12) msg = 'Hora e minitos inválidos';

          if (!msg) return true;

          return msg;
        },
      ],
    },
  },

  data() {
    return {
      text: this.value ? this.value : '',
      mask: '##:##',
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
