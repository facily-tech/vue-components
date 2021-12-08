import VueMask from 'v-mask';
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueMask);

new Vue({
  vuetify,
  // store,
  render: (h) => h(App),
}).$mount('#app');
