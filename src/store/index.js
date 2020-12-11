import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUserId: null,
    currentUserIsAdmin: false,
  },
  mutations: {
    updateCurrentUser(state, newUser) {
      state.currentUserId = newUser.id;
      state.currentUserIsAdmin = newUser.isAdmin;
    },
  },
  actions: {
  },
  modules: {},
});
