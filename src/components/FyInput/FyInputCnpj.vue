<template>
  <div>
    <fy-input
      :value="text"
      @input="update"
      v-mask="mask"
      :rules="cnpjRule"
      v-bind.sync="$props"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { VTextField } from 'vuetify/lib';

const BaseVTextField = Vue.extend({ mixins: [VTextField] });

interface options extends InstanceType<typeof BaseVTextField> {
  value: string;
}

export default BaseVTextField.extend<options>().extend({
  name: 'fy-input-cnpj',

  props: {
    value: {
      type: String,
    },
  },

  data() {
    return {
      text: this.value ? this.value : '',
      cnpjRule: [
        (value: string): boolean | string => {
          if (value && value !== '')
            return value.length === 18 || 'O campo Cnpj deve conter 14 números';

          return false;
        },
      ],
      mask: '##.###.###/####-##',
    };
  },

  methods: {
    update(value: string): void {
      this.$emit('input', value);
    },
  },
});
</script>
