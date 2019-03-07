import Vue from 'vue';
import Vuex from 'vuex';
import allData from '../rushing.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: allData,
    search: null
  },
  mutations: {
    data (state, arr) {
      state.data = arr;
    },
    search (state, string) {
      state.search = string;
    },
  },
  actions: {
    filterList ({ commit, state, dispatch }) {
      const testStr = new RegExp(`.*${state.search}.*`, 'gi')
      const newData = allData.filter(el => {
        if (el["Player"].search(testStr) === -1) {
          return false
        }
        return true
      })
      commit('data', newData);
    }
  },
});
