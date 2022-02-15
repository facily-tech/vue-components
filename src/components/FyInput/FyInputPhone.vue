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

import { FyInput } from '@/index';

const BaseVTextField = Vue.extend({ mixins: [VTextField] });

interface options extends InstanceType<typeof BaseVTextField> {
  value: string;
}

export default BaseVTextField.extend<options>().extend({
  name: 'fy-input-phone',

  components: { FyInput },

  props: {
    value: {
      type: String,
    },
  },

  data() {
    return {
      text: this.value ? this.value : '',
      mask: '(##)#####-####',
    };
  },

  methods: {
    update(value: string): void {
      this.$emit('input', value);
    },
  },
});
</script>
