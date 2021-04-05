import {createRouter, createWebHistory} from 'vue-router'
import NProgress from 'nprogress'
import routes from '~/router/routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return {x: 0, y: 0}
  //   }
  // },
})

router.beforeEach((routeTo, routeFrom, next) => {
  // If this isn't an initial page load...
  if (routeFrom.name !== null) {
    // Start the route progress bar.
    NProgress.start()
  }

  next() // make sure to always call next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
