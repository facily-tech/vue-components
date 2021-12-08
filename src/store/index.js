import Vue from 'vue';
import Vuex from 'vuex';
import HelpersStore from './helpers/helpers.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    HelpersStore,
  },
});
