import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import NProgress from 'nprogress';

import routes from '@/router/routes';

Vue.use(Router);
Vue.use(Meta, { keyName: 'page' });

const router = new Router({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

router.beforeEach((routeTo, routeFrom, next) => {
    // If this isn't an initial page load...
    if (routeFrom.name !== null) {
    // Start the route progress bar.
        NProgress.start();
    }

    next(); // make sure to always call next()
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
