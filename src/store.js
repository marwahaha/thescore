import Vue from 'vue';
import Vuex from 'vuex';
import allData from '../rushing.json';

const axios = require('axios');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
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
    async fetchAll({ commit, state, dispatch }) {
      axios.get('/api/all')
      .then((response) => {
        commit('data', response.data);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    filterList ({ commit, state, dispatch }) {
      const testStr = new RegExp(`.*${state.search}.*`, 'gi')
      const newData = allData.filter(el => {
        if (el["Player"].search(testStr) === -1) {
          return false
        }
        return true
      })
      commit('data', newData);
    },
    sortList ({ commit, state, dispatch }, options) {
      if (options.order !== null) {
        const newData = state.data.sort((a, b) => {
          a = a[options.prop].toString().replace(',', '');
          b = b[options.prop].toString().replace(',', '');;
          if (options.order === 'ascending') {
            return a.localeCompare(b, 'en', {numeric: true})
          } else {
            return b.localeCompare(a, 'en', {numeric: true})
          }
        })
        commit('data', newData);
      } else {
        dispatch('fetchAll');
      }
    }
  },
});
