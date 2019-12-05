import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    opened: false,
  },
  mutations: {
    SET_OPENED(state, data) {
      state.opened = data;
    },
  },
  actions: {
    setOpened({commit}, data) {
      commit('SET_OPENED', data);
    },
  },
  getters: {
    opened: (state) => state.opened,
  },
  modules: {
  },
});
