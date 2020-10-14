import Vue from 'vue'
import router from './routes'

require('./bootstrap')

// const app = new Vue({
//     router,
//     data: {
//         aboutMenuOpen: false,
//         eccoMenuOpen: false
//     },
//     render: h => h(App),
//  }).$mount('#app')


const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
