import router from './routes'
require('./bootstrap')

window.Vue = require('vue')

Vue.component('flash', require('./components/Flash.vue'))
Vue.component('quick-links', require('./components/QuickLinks.vue'))

const app = new Vue({
    el: '#app',
    router
})
