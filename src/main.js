import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Meta from 'vue-meta';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit, faSyncAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faTrashAlt, faEdit, faSyncAlt, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(Meta);
