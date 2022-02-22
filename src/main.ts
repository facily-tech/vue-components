import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMask, { VueMaskFilter } from 'v-mask';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import VueComponents from './';

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(VueMask);
Vue.filter('VMask', VueMaskFilter);

Vue.use(VueComponents);

new Vue({
  vuetify,
  // store,
  render: (h) => h(App),
}).$mount('#app');
