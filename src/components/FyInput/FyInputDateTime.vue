<template>
  <div>
    <fy-input
      :value="text"
      @input="update"
      v-mask="mask"
      v-bind="propsAndAttrs"
      v-on="$listeners"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

import { VueMaskDirective } from 'v-mask';

import FyInput from './FyInput';

import moment from 'moment';

const BaseVTextField = Vue.extend({ mixins: [FyInput] });

interface options extends InstanceType<typeof BaseVTextField> {
  value: string;
}

export default BaseVTextField.extend<options>().extend({
  name: 'fy-input-date-time',

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
      mask: '##/##/#### ##:##',
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
      if (!str) return '';

      const dateTime = moment(str, 'DD/MM/YYYY HH:mm');

      return dateTime.format();
    },

    getDateToString(date: string): string {
      if (!date) return '';

      const nDate = moment(date);

      return nDate.format('DD/MM/YYYY HH:mm');
    },

    update(value: string): void {
      const formatDate = this.getStringToDate(value);
      this.$emit('input', formatDate);
    },
  },
});
</script>
