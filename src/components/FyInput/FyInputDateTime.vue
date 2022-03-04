<template>
  <div>
    <fy-input
      :value="text"
      @input="update"
      v-mask="mask"
      v-bind.sync="$props"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

import { VTextField } from 'vuetify/lib';

import FyInput from './FyInput';

import moment from 'moment';

const BaseVTextField = Vue.extend({ mixins: [VTextField] });

interface options extends InstanceType<typeof BaseVTextField> {
  value: string;
}

export default BaseVTextField.extend<options>().extend({
  name: 'fy-input-date-time',

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
