import Vue from 'vue';
import Vuex from 'vuex';
import record from './model/record';
import tag from './model/tag';

Vue.use(Vuex)
type costList = [
  {name: string, tagName:string}
]


const mutations = {
  // cutType(){
  //   if(state.type === '-'){
  //     state.type = '+'
  //   }else{
  //     state.type = '-'
  //   }
  // }
}

export default new Vuex.Store({
  state:{},
  mutations,
  actions: {
  },
  modules: {
    record,
    tag
  }
})
