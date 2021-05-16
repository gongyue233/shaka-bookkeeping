import Vue from 'vue';
import Vuex from 'vuex';
import record from './model/record';
import tag from './model/tag';

Vue.use(Vuex)

export default new Vuex.Store({
  state:{},
  mutations:{},
  actions: {
  },
  modules: {
    record,
    tag
  }
})
