import Vue from 'vue'
import Vuex from 'vuex'
import data from "../../static/data_use.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    DataUs : data
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
