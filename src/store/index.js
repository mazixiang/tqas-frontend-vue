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
      sessionStorage.setItem(
        'currentUser',
        JSON.stringify({ id: newUser.id, isAdmin: newUser.isAdmin })
      );
      state.currentUserId = newUser.id;
      state.currentUserIsAdmin = newUser.isAdmin;
    },
    userLogout(state) {
      sessionStorage.removeItem('currentUser');
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
