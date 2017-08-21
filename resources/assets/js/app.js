require('./bootstrap');
import router from "./routes";

window.Vue = require('vue');

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
  router,
  el: '#app'
});
