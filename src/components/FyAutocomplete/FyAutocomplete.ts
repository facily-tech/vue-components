/// <reference path="../../../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue';

import { VAutocomplete } from 'vuetify/lib';

const base = Vue.extend({ mixins: [VAutocomplete] });

type options = InstanceType<typeof base>;

export default base.extend<options>().extend({
  name: 'fy-autocomplete',

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
        ...VAutocomplete.options.computed.classes.call(this),
        'fy-autocomplete': true,
      };
    },
  },
});
