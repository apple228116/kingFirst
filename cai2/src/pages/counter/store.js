// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ji: ['chiken','鸡']
  },
  mutations
})

export default store
