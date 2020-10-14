import axios from 'axios';
import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import i18n from '@/plugins/vue-i18n';

import '@/plugins';

// Layout Components
import DefaultLayout from '@/layouts/DefaultLayout';
import FullScreenLayout from '@/layouts/FullScreenLayout';
import NoHeaderLayout from '@/layouts/NoHeaderLayout';

Vue.component('DefaultLayout', DefaultLayout);
Vue.component('FullScreenLayout', FullScreenLayout);
Vue.component('NoHeaderLayout', NoHeaderLayout);

axios.defaults.withCredentials = true;
Vue.prototype.$http = window.axios = axios;

const token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
