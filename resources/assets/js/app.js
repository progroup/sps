require('./bootstrap')
import router from './routes'

window.Vue = require('vue')

Vue.component('quick-links', require('./components/QuickLinks.vue'))

const app = new Vue({
    el: '#app',
    router
})
