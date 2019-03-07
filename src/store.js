import Vue from 'vue';
import Vuex from 'vuex';
import allData from '../rushing.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: allData
  },
  mutations: {

  },
  actions: {

  },
});
