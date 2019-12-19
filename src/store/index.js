import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:4
  },
  mutations: {
    tambahMut(state){
      state.counter++
    }
  },
  actions: {
    tambahAct(context){
      context.commit('tambahMut')
    },
    tambahActDelay(context){
      setTimeout(()=>{
        context.commit('tambahMut')
      }, 1500)
    }
  },
  modules: {
  },
  getters:{
    counter(state){
      return state.counter 
    },
    doubleCounter(state){
      return state.counter * 2
    }    
  }
})
