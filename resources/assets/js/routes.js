import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: require('./views/search')
    }
]

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
})
