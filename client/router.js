import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: require('./pages'),
  },
  {
    path: '/calendar',
    component: require('./pages/calendar'),
  },
  {
    path: '/media',
    component: require('./pages/media'),
  },
  {
    path: '/search',
    component: require('./pages/search'),
  },
  {
    path: '/spf-overview',
    component: require('./pages/spf-overview'),
  },
  {
    path: '/training',
    component: require('./pages/training'),
  },
]

export default new VueRouter({
  routes,
  linkActiveClass: 'is-active',
})
