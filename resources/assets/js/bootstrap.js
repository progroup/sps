import Vue from 'vue'
import VueRouter from 'vue-router'
import lodash from 'lodash'
import axios from 'axios'
import Buefy from 'buefy'
import InstantSearch from 'vue-instantsearch'
import Meta from 'vue-meta'

Vue.prototype.authorize = function (handler) {
    // Additional admin privileges here.
    let user = window.App.user

    return user ? handler(user) : false
}

Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(InstantSearch)
Vue.use(Meta)

window.Vue = Vue
window._ = lodash
window.axios = axios
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
}

window.events = new Vue()

window.flash = function (message) {
    window.events.$emit('flash', message)
}

let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}
