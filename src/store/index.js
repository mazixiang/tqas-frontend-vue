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
      localStorage.setItem('currentUser', newUser.id);
      localStorage.setItem('currentUserIsAdmin', newUser.isAdmin);
      state.currentUserId = newUser.id;
      state.currentUserIsAdmin = newUser.isAdmin;
    },
    userLogout(state) {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserIsAdmin');
      state.currentUserId = null;
      state.currentUserIsAdmin = false;
    },
  },
  actions: {
    updateCurrentUser({ commit }, newUser) {
      commit('updateCurrentUser', newUser);
    },
    userLogout({ commit }) {
      commit('userLogout');
    },
  },
  modules: {},
});
