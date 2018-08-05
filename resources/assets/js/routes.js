import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: require('./views')
    },
    {
        path: '/calendar',
        component: require('./views/calendar')
    },
    {
        path: '/media',
        component: require('./views/media')
    },
    {
        path: '/search',
        component: require('./views/search')
    },
    {
        path: '/spf-overview',
        component: require('./views/spf-overview')
    },
    {
        path: '/training',
        component: require('./views/training')
    }
]

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
})
