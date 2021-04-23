import Index from '~/pages/index'
import Login from '~/pages/login'
import Calendar from '~/pages/calendar'
import Media from '~/pages/media'
import About from '~/pages/about'
import Contact from '~/pages/contact'
import GeorgiaSeow from '~/pages/georgia-seow'
import Resources from '~/pages/resources'
import SpfOverview from '~/pages/spf-overview'
import Training from '~/pages/training'

export default [
  {
    path: '/',
    component: Index,
    meta: {
      layout: 'PlainLayout',
    },
  },
  {
    path: '/login',
    component: Login,
    meta: {
      layout: 'FullScreenLayout',
    },
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/georgia-seow',
    component: GeorgiaSeow,
  },
  {
    path: '/media',
    component: Media,
  },
  {
    path: '/resources',
    component: Resources,
  },
  {
    path: '/spf-overview',
    component: SpfOverview,
  },
  {
    path: '/training',
    component: Training,
  },
]
