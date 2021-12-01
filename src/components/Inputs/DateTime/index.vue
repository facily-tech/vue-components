<template>
  <div>
    <v-text-field
      v-model="date"
      v-mask="'##/##/#### ##:##'"
      v-bind.sync="$props"
    />
  </div>
</template>
<script>
import moment from 'moment';
import { VTextField } from 'vuetify/lib';

export default {
  extends: VTextField,
  name: 'FyInputDateTime',
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
      if (!str) return '';
      const dateTime = moment(str, 'DD/MM/YYYY HH:mm');
      dateTime.format();
      return dateTime;
    },
    getDateToString(date) {
      if (!date) return '';
      const nDate = moment(date);
      return nDate.format('DD/MM/YYYY HH:mm');
    },
  },
};
</script>
