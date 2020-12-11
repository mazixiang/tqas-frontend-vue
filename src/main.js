import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Meta from 'vue-meta';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrashAlt,
  faEdit,
  faSyncAlt,
  faPlus,
  faUser,
  faLock,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import store from './store';

library.add(faTrashAlt, faEdit, faSyncAlt, faPlus, faUser, faLock, faHome);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(Meta);
