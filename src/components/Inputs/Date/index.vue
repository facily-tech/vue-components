<template>
  <div>
    <v-text-field
      v-model="date"
      v-mask="'##/##/####'"
      v-bind.sync="$props"
    />
  </div>
</template>
<script>
import moment from 'moment';
import { VTextField } from 'vuetify/lib';

export default {
  extends: VTextField,
  name: 'FyInputDate',
  props: {
    ...VTextField.props,
    value: String,
  },
  data() {
    return {
      date: this.getDateToString(this.value),
    };
  },
  watch: {
    date() {
      const formatDate = this.getStringToDate(this.date);
      this.$emit('input', formatDate);
    },
  },
  methods: {
    getStringToDate(str) {
      const date = moment(str, 'DD/MM/YYYY');
      return date.format();
    },
    getDateToString(date) {
      if (!date) return '';
      const nDate = moment(date);
      return nDate.format('DD/MM/YYYY');
    },
  },
};
</script>
