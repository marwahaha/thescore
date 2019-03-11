import Vue from 'vue';
import Vuex from 'vuex';

const axios = require('axios');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    search: null,
    filterOrder: null,
    filterProp: null,
  },
  mutations: {
    data(state, arr) {
      state.data = arr;
    },
    search(state, string) {
      state.search = string;
    },
    filterOrder(state, string) {
      state.filterOrder = string;
    },
    filterProp(state, string) {
      state.filterProp = string;
    }
  },
  actions: {
    fetch({ commit, state }) {
      // Call our backend endpoint to get all the data, pass in search and filter queries if they are defined from the state.
      axios.get('/api/all', {
        params: {
          search: state.search,
          order: state.filterOrder,
          prop: state.filterProp,
        },
      })
        .then((response) => {
        // Once we recieve a response commit it to state
          commit('data', response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
