import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: require('./pages/Home.vue')
    },
    {
        path: '/faqs',
        component: require('./pages/Faqs.vue')
    },
    {
        path: '/about-us',
        component: require('./pages/AboutUs.vue')
    },
    {
        path: '/contact-information',
        component: require('./pages/ContactInformation.vue')
    },
    {
        path: '/georgia-seow',
        component: require('./pages/GeorgiaSeow.vue')
    },
    {
        path: '/spf-overview',
        component: require('./pages/SpfOverview.vue')
    },
    {
        path: '/training',
        component: require('./pages/Training.vue')
    },
    {
        path: '/calendar',
        component: require('./pages/Calendar.vue')
    },
    {
        path: '/resources',
        component: require('./pages/Resources.vue')
    }
]

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
})
