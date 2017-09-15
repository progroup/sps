<template>
    <main>
        <section class="hero is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <div class="field">
                        <div class="control has-icons-left">
                            <input
                                type="text"
                                class="input is-large"
                                placeholder="What resources can we help you find today?"
                                v-model="query"
                            >
                            <span class="icon is-small is-left">
                                <i
                                    class="fa fa-search"
                                    aria-hidden="true"
                                ></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-6">
                        <h2 class="is-size-4">Resources</h2>
                        <hr>
                        <ais-index
                            app-id="WTEU7RU64C"
                            api-key="84cd67fa388e3c50b3a0a1710fae55ad"
                            index-name="resources"
                            :cache="true"
                            :auto-search="true"
                            :query="query"
                        >

                            <ais-no-results></ais-no-results>
                            <ais-results>
                                <template scope="{ result }">
                                    <article class="media">
                                        <figure class="media-left">
                                            <p class="image is-64x64">
                                                <img src="http://bulma.io/images/placeholders/128x128.png">
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="content">
                                                <h5>
                                                    <a :href="result.url">
                                                        <ais-highlight
                                                            :result="result"
                                                            attribute-name="title"
                                                        ></ais-highlight>
                                                    </a>
                                                </h5>

                                                <p>{{ result.description }}</p>

                                                <span class="tag is-rounded" :key="index" v-for="(tag, index) in result._tags">
                                                    {{tag}}
                                                </span>

                                                <p class="lesson-list in-caps fs-smaller is-bold mbt-1 is-hidden-mobile">
                                                    <a
                                                        href="#"
                                                        class="tag is-rounded is-small color-white"
                                                        :style="{ background: colors[result.filetype] }"
                                                        v-text="result.filetype"
                                                    >
                                                        </a>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </template>
                            </ais-results>
                            <nav
                                class="pagination"
                                role="navigation"
                                aria-label="pagination"
                            >
                                <ais-pagination class="pagination-list">
                                    <template slot="first">
                                        First Page
                                    </template>
                                    <template
                                        class="pagination-previous"
                                        slot="previous"
                                    >
                                        Previous Page
                                        </template>
                                        <template
                                            class="pagination-link"
                                            scope="props"
                                        >
                                            {{ props.value }}
                                            </template>
                                            <template
                                                class="pagination-next"
                                                slot="next"
                                            >
                                                Next Page
                                                </template>
                                                <template slot="last">
                                                    Last Page
                                                </template>
                                </ais-pagination>
                            </nav>
                        </ais-index>
                    </div>
                    <div class="column is-4">
                        <ais-index
                            app-id="WTEU7RU64C"
                            api-key="84cd67fa388e3c50b3a0a1710fae55ad"
                            index-name="dev_faqs"
                            :cache="true"
                            :auto-search="true"
                            :query="query"
                        >
                            <ais-results>
                                <template scope="{ result }">
                                    <accordion-menu :contents="contents"></accordion-menu>
                                </template>
                            </ais-results>
                        </ais-index>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

import moment from 'moment'
import AccordionMenu from '@/components/AccordionMenu'

export default {
    // props: ['query'],
    components: {
        AccordionMenu
    },
    data () {
        return {
            query: '',
            user: window.App.user,
            value: [
                { name: 'Vue.js', language: 'JavaScript' }
            ],
            options: [
                { name: 'Vue.js', language: 'JavaScript' },
                { name: 'Adonis', language: 'JavaScript' },
                { name: 'Rails', language: 'Ruby' },
                { name: 'Sinatra', language: 'Ruby' },
                { name: 'Laravel', language: 'PHP' },
                { name: 'Phoenix', language: 'Elixir' }
            ],
            contents: [
                {
                    title: 'How are you?',
                    msg: 'Test for fun!'
                },
                {
                    title: 'Who let the dog out?',
                    msg: 'I do not know, dude.'
                },
                {
                    title: '肚子好餓?',
                    msg: '吃芭樂啦！'
                },
                {
                    title: 'Find hotels?',
                    msg: 'Trivago！'
                }
            ],
            colors: {
                laravel: '#333'
            }
        }
    },

    methods: {
        publishDate (date) {
            return moment(date).format('LL')
        },

        videoType (type) {
            type = type.replace(/^(.)|\+s(.)/g, $1 => {
                return $1.toUpperCase()
            })

            if (type === 'Lesson') {
                type = 'Standalone Lesson'
            }

            return type
        },

        seriesName (name) {
            return name
        }
    }
}
</script>

<style>
    .ais-highlight em {
        background-color: #ff9;
        font-style: normal;
    }

    .tile {
        outline: 1px dotted red;
    }

    .ais-refinement-list {
        margin-bottom: 2rem;
    }

    .ais-refinement-list__item {
        margin-bottom: 0.5rem;
    }

    .ais-refinement-list__label {
        display: flex;
        align-items: center;
    }

    .ais-refinement-list__checkbox {
        margin-right: 0.5rem;
    }

    .ais-refinement-list__value {
        flex-grow: 1;
    }

    form[role="search"] {}

    input.ais-input {}

    button.ais-search-box__submit {}

    svg {}

    button.ais-clear.ais-clear--disabled svg {}
</style>
