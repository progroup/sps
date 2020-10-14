import Index from '@/views/index'
import Calendar from '@/views/calendar'
import Media from '@/views/media'
import About from '@/views/about'
import Contact from '@/views/contact'
import GeorgiaSeow from '@/views/georgia-seow'
import Search from '@/views/search'
import SpfOverview from '@/views/spf-overview'
import Training from '@/views/training'

export default [
    {
        path: '/',
        component: Index,
    },
    {
        path: '/calendar',
        component: Calendar
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/georgia-seow',
        component: GeorgiaSeow
    },
    {
        path: '/media',
        component: Media
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/spf-overview',
        component: SpfOverview
    },
    {
        path: '/training',
        component: Training
    }
]
