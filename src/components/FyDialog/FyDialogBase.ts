/// <reference path="../../../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue';

import { VDialog } from 'vuetify/lib';

const BaseSnackbar = Vue.extend({ extends: VDialog, mixins: [VDialog] });

type options = InstanceType<typeof BaseSnackbar>;

export default BaseSnackbar.extend<options>().extend({
  name: 'fy-dialog-base',
  computed: {
    class() {
      return {
        ...VDialog.options.computed.classes.call(this),
        'fy-dialog-base': true,
      };
    },
  },
});
