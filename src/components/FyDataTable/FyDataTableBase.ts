/// <reference path="../../../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue';

// @ts-ignore
import { VDataTable } from 'vuetify/lib';

const BaseDataTable = Vue.extend({ mixins: [VDataTable] });

type options = InstanceType<typeof BaseDataTable>;

export default BaseDataTable.extend<options>().extend({
  name: 'fy-data-table-base',

  computed: {
    class() {
      return {
        ...VDataTable.options.computed.classes.call(this),
        'fy-data-table-base': true,
      };
    },
  },
});
