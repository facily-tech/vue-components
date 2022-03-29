<template>
  <fy-input
    :value="text"
    @input="update"
    v-mask="'##/##/####'"
    v-bind="propsAndAttrs"
    v-on="$listeners"
  />
</template>
<script lang="ts">
import Vue from 'vue';
import { VueMaskDirective } from 'v-mask';
import FyInput from './FyInput.vue';
import moment from 'moment';

export default Vue.extend({
  name: 'fy-input-date',

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
      mask: '##/##/####',
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
    getStringToDate(str: string): string {
      const date = moment(str, 'DD/MM/YYYY');
      return date.format();
    },

    getDateToString(date: string): string {
      if (!date) return '';
      const nDate = moment(date);
      return nDate.format('DD/MM/YYYY');
    },

    update(value: string): void {
      const formatDate = this.getStringToDate(value);
      this.$emit('input', formatDate);
    },
  },
});
</script>
