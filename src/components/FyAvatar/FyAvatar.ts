/// <reference path="../../../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue';

import { VAvatar } from 'vuetify/lib';

const BaseVAvatar = Vue.extend({ mixins: [VAvatar] });

type options = InstanceType<typeof BaseVAvatar>;

export default BaseVAvatar.extend<options>().extend({
  name: 'fy-avatar',
  computed: {
    class() {
      return {
        ...VAvatar.options.computed.classes.call(this),
        'fy-avatar': true,
      };
    },
  },
});
