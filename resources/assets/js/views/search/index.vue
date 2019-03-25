<template>
  <main>
    <section
      class="hero is-bold has-bg-img"
      style="background-image: url('/assets/images/banners/learn.jpg')"
    >
      <div class="hero-body">
        <div
          class="container"
          style="padding: 4rem 0"
        >
          <div class="field">
            <div class="control has-icons-left">
              <input
                type="text"
                class="input is-large"
                placeholder="What resources can we help you find today?"
                v-model="query"
              >
              <span class="icon is-left">
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
          <div class="column is-8">
            <ais-index
              app-id="WTEU7RU64C"
              api-key="84cd67fa388e3c50b3a0a1710fae55ad"
              index-name="dev_resource_index"
              :cache="true"
              :auto-search="true"
              :query="query"
            >
              <div class="columns">
                <div class="column is-3 is-hidden-touch">

                  <aside>
                    <div>
                      <ais-refinement-list attribute-name="tags">
                        <template slot="header">
                          <p class="menu-label">
                            Tags
                          </p>
                        </template>

                        <template scope="props">
                          <span
                            style="font-size: 0.75rem"
                            class="ais-refinement-list__value"
                            v-text="seriesName(props.value)"
                          ></span>
                        </template>
                      </ais-refinement-list>
                    </div>

                    <div>
                      <ais-refinement-list
                        attribute-name="filetype"
                        :sort-by="['count:desc']"
                      >
                        <template slot="header">
                          <p class="menu-label">
                            File Type
                          </p>
                        </template>

                        <template scope="props">
                          <span
                            class="ais-refinement-list__value"
                            v-text="seriesName(props.value)"
                          ></span>
                        </template>
                      </ais-refinement-list>
                    </div>
                  </aside>

                </div>
                <div class="column">
                  <h2 class="is-size-4">Resources</h2>
                  <ais-stats>
                    <template scope="{ totalResults, processingTime, query }">
                      <hr> There are {{ totalResults }} resources matching your search
                      <b>{{ query }}</b>
                    </template>
                  </ais-stats>
                  <ais-no-results>
                    <template scope="props">
                      <hr> No resources were found for
                      <b>{{ props.query }}</b>.
                    </template>
                  </ais-no-results>
                  <ais-results :results-per-page="10">
                    <template scope="{ result }">
                      <hr>
                      <article class="media">
                        <figure class="media-left">
                          <p class="image is-64x64">
                            <img src="http://bulma.io/images/placeholders/128x128.png">
                          </p>
                        </figure>
                        <div class="media-content">
                          <div class="content">
                            <h5>
                              <a
                                :href="result.file_url"
                                target="_new"
                              >
                                <ais-highlight
                                  :result="result"
                                  attribute-name="title"
                                ></ais-highlight>
                              </a>
                            </h5>

                            <p>{{ result.description }}</p>

                            <span
                              class="tag is-rounded"
                              :key="index"
                              v-for="(tag, index) in result.tags"
                            >
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

                  <hr>
                  <nav
                    class="pagination"
                    role="navigation"
                    aria-label="pagination"
                  >
                    <ais-pagination class="pagination-list">
                      <template slot="first">
                        &lt;&lt;
                      </template>
                      <template
                        class="pagination-previous"
                        slot="previous"
                      >
                        &lt;
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
                        &gt;
                      </template>
                      <template slot="last">
                        &gt;&gt;
                      </template>
                    </ais-pagination>
                  </nav>
                </div>
              </div>
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

              <h2 class="is-size-4">FAQs</h2>

              <ais-stats>
                <template scope="{ totalResults, processingTime, query }">
                  <hr> There are {{ totalResults }} FAQs matching your search
                  <b>{{ query }}</b>
                </template>
              </ais-stats>
              <ais-no-results>
                <template scope="props">
                  <hr> No FAQs were found for
                  <b>{{ props.query }}</b>.
                </template>
              </ais-no-results>
              <ais-results>
                <template scope="{ result }">
                  <hr>
                  <article class="media">
                    <div class="media-content">
                      <div class="content is-small">
                        <h5>{{result.question}}</h5>
                        <p>{{result.answer}}</p>

                        <p class="is-hidden-mobile">
                          <a
                            href="#"
                            class="tag is-rounded"
                            :style="{ background: colors[result.topic] }"
                            v-text="result.topic"
                          >
                          </a>
                        </p>

                      </div>
                    </div>
                  </article>
                  <!-- <accordion-menu :contents="contents"></accordion-menu> -->
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
      query: this.$route.query.query || '',
      user: window.App.user,
      value: [{ name: 'Vue.js', language: 'JavaScript' }],
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
      return name.toUpperCase()
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

form[role="search"] {
}

input.ais-input {
}

button.ais-search-box__submit {
}

svg {
}

button.ais-clear.ais-clear--disabled svg {
}

.icon.is-xx-large {
  width: 84px;
  height: 84px;
}

.icon.is-xx-large .fa {
  font-size: 96px;
}
</style>
