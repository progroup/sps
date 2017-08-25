import Vue from 'vue'
import VueRouter from 'vue-router'
import lodash from 'lodash'
import axios from 'axios'
import Buefy from 'buefy'
import InstantSearch from 'vue-instantsearch'

window.Vue = Vue
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(InstantSearch)

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

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
