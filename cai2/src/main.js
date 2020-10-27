import Vue from 'vue'

import store from './pages/counter/store'
import App from './App'

Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
