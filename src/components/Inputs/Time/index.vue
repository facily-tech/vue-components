<template>
  <div>
    <v-text-field
      :value="value"
      @input="update"
      v-mask="'##:##'"
      :rules="timeRules"
      v-bind.sync="$props"
    />
  </div>
</template>

<script>
import { VTextField } from 'vuetify/lib';

export default {
  extends: VTextField,
  name: 'FyInputTime',
  props: {
    ...VTextField.props,
    value: String,
  },
  data() {
    return {
      time: this.value ? this.value : '',
      timeRules: [
        (value) => {
          const nValue = value.split(':');
          let msg = '';
          if (Number(nValue[0]) > 23) msg = 'Hora inválida';
          if (Number(nValue[1]) > 59) msg = 'Minutos inválidos';
          if ((Number(nValue[0]) > 31) && (Number(nValue[1]) > 12)) msg = 'Hora e minitos inválidos';
          if (!msg) return true;
          return msg;
        },
      ],
    };
  },
  methods: {
    update(value) {
      this.$emit('input', value);
    },
  },
};
</script>
