/// <reference path="../../../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue';

import { VSnackbar } from 'vuetify/lib';

const BaseSnackbar = Vue.extend({ mixins: [VSnackbar] });

type options = InstanceType<typeof BaseSnackbar>;

export default BaseSnackbar.extend<options>().extend({
  name: 'fy-snackbar-base',
  computed: {
    class() {
      return {
        ...VSnackbar.options.computed.classes.call(this),
        'fy-input': true,
      };
    },
  },
});
