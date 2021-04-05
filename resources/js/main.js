import axios from 'axios'
import {createApp} from 'vue'
import {createStore} from 'vuex'
import {createI18n} from 'vue-i18n'

import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full-vars.css'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import App from '~/App.vue'
import router from '~/router'
// import store from './store'

// import i18n from '~/plugins/vue-i18n'
// import '~/plugins'

// Layout Components
import DefaultLayout from '~/layouts/DefaultLayout'
import FullScreenLayout from '~/layouts/FullScreenLayout'
import NoHeaderLayout from '~/layouts/NoHeaderLayout'

import en from '~/locales/en.json'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      isMenuOpen: false,
      menu: {
        open: false,
      },
      affiliate: {
        slug: 'ga-sps',
        navbar: {
          topLinks: ['dashboard', 'volunteers', 'calendar', 'resources'],
          userLinks: ['profile', 'settings'],
        },
      },
      user: {
        name: 'Victor Tolbert',
        email: 'victor.tolbert@gmail.com',
        avatarUrl: 'https://cominex.net/assets/img/people/victor.jpeg',
      },
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
  },
})

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/,
)

axios.defaults.withCredentials = true

const token = document.head.querySelector('meta[name="csrf-token"]')
if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error(
    'CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token',
  )
}

const app = createApp(App)

app.config.globalProperties.$axios = axios

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
  )

  app.component(componentName, componentConfig.default || componentConfig)
})

app.component('DefaultLayout', DefaultLayout)
app.component('FullScreenLayout', FullScreenLayout)
app.component('NoHeaderLayout', NoHeaderLayout)

app.use(store)
app.use(router)

app.use(i18n)
app.use(Oruga)
app.provide('$axios', axios)
app.provide('guide', 'Vue 3 Guide')
app.mount('#app')
