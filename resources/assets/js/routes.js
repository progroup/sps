import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: require('./views')
    },
    {
        path: '/search',
        component: require('./views/search')
    },
    {
        path: '/spf-overview',
        component: require('./views/spf-overview')
    }
]

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
})
