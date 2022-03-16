/// <reference path="../../../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue';

import { VBtn } from 'vuetify/lib';

const base = Vue.extend({ mixins: [VBtn] });

type options = InstanceType<typeof base>;

export default base.extend<options>().extend({
  name: 'fy-button',

  props: {
    elevation: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    classes(): Record<string, unknown> {
      return {
        ...VBtn.options.computed.classes.call(this),
        'fy-button': true,
      };
    },
  },
});
