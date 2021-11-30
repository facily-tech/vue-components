<template>
  <div>
    <v-text-field
      v-model="date"
      v-mask="'##/##/####'"
      :rules="dateRules"
      v-bind.sync="$props"
    />
  </div>
</template>
<script>
import { VTextField } from 'vuetify/lib';

export default {
  extends: VTextField,
  name: 'FyInputDate',
  props: {
    ...VTextField.props,
    value: Date,
  },
  data() {
    return {
      date: this.getDateToString(this.value),
      dateRules: [
        (value) => value.length === 10 || 'O campo Data deve conter 8 números',
        (value) => {
          const nValue = value.split('/');
          let msg = '';
          if (Number(nValue[0]) > 31) msg = 'Dia inválido';
          if (Number(nValue[1]) > 12) msg = 'Mês inválido';
          if ((Number(nValue[0]) > 31) && (Number(nValue[1]) > 12)) msg = 'Dia e mês inválidos';
          if (!msg) return true;
          return msg;
        },
      ],
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
      const nDate = str.split('/');
      return new Date(nDate[2], nDate[1] - 1, nDate[0]);
    },
    getDateToString(date) {
      if (!date) return '';
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
  },
};
</script>
