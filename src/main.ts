import VueMask from 'v-mask';
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueMask);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
