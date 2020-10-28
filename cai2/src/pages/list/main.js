import Vue from 'vue'

import List from './list'

Vue.config.errorHandler = function (err) {
    if (console && console.error) {
        console.error(err)
    }
}

const app = new Vue(List)
app.$mount()

  