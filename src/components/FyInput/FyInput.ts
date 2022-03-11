/// <reference path="../../../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue';

import { VTextField } from 'vuetify/lib';

const base = Vue.extend({ mixins: [VTextField] });

type options = InstanceType<typeof base>;

export default base.extend<options>().extend({
  name: 'fy-input',

  props: {
    dense: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classes(): Record<string, unknown> {
      return {
        ...VTextField.options.computed.classes.call(this),
        'fy-input': true,
      };
    },
  },
});
