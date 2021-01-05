<template>
  <main>
    <section
      class="hero is-light is-medium is-bold"
      style="background-size: cover; background-image: url('/assets/images/banners/training.jpg')"
    >
      <div class="hero-header" style="padding: 1rem">
        <div class="container">
          <div class="field has-addons">
            <div class="control is-expanded has-icons-left">
              <input
                type="text"
                class="input is-medium"
                placeholder="What resources can we help you find today?"
                v-model="query"
                name="query"
              />
              <span class="icon is-left">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-body">
        <div class="container"></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-2">
            <Sidebar />
          </div>
          <div class="column is-8">
            <div class="content">
              <h1>Training</h1>

              <p>
                <strong>Welcome the GASPS Training Center.</strong>
              </p>
              <p>
                From this page you can access and register for statewide GASPS
                trainings, as well as national trainings provided by our federal
                partners at the Center for the Application of Prevention
                Technologies (CAPT).
              </p>
              <p>
                Current and future training events are listed on this page. Past
                trainings are removed and web based trainings are archived to
                the resources page under the “webinar” heading.
              </p>
              <p>
                <a href="http://ga-sps.org/search?q=webinar">
                  <strong>Click Here For All Archived Webinars</strong>
                </a>
              </p>
            </div>
            <b-tabs type="is-boxed">
              <b-tab-item label="State">
                <section class="section">
                  <table
                    v-for="event in events"
                    :key="event.id"
                    class="table is-bordered is-fullwidth"
                  >
                    <caption></caption>
                    <thead>
                      <tr>
                        <th class="training-table-date">Dates</th>
                        <th class="training-table-training" colspan="2">
                          Training
                        </th>
                        <th class="training-table-modality">Modality</th>
                        <th class="training-table-ceus">CEUs</th>
                        <th class="training-table-archived">Archived</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ event.date }} {{ event.time }}</td>
                        <td colspan="2">{{ event.name }}</td>
                        <td>{{ event.modality }}</td>
                        <td class="training-table-ceus">no</td>
                        <td class="training-table-archived">no</td>
                      </tr>
                      <tr>
                        <td colspan="6">
                          <div v-html="event.description"></div>
                          <div v-html="event.more"></div>
                          <p style="margin-top: 1rem"><b>Facilitators:</b></p>
                          <div v-html="event.presenter"></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </b-tab-item>
            </b-tabs>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import events from 'store/plugins/events'
export default {
  components: {Sidebar},
  data() {
    return {
      events: [
        {
          id: 1,
          name: 'Sustainability Assessment Toolkit-building plan',
          description: `
            <div class="content">
                <h5><b>Join Zoom Meeting</b></h5>
                <a href="https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09">https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09</a></p>
                <ul>
                    <li><b>Meeting ID:</b> 884 3584 3854</li>
                    <li><b>Passcode:</b> 421097</li>
                    <li>--OR--<br>
                    Dial by your location
                      +1 929 205 6099 US (New York)<br>
                      Find your local number:<br>
                      https://us02web.zoom.us/u/kpWLPEqKk
                    </li>
                </ul>
            </div>
          `,
          date: ' January 12, 2021',
          time: '10:00 AM - 12:00 PM',
          modality: 'Zoom',
          presenter: 'Prospectus Group',
          more: '',
        },
        {
          id: 2,
          name: 'Shared Risk & Protective Factors-all staff  ',
          description: `
            <div class="content">
                <h5><b>Join Zoom Meeting</b></h5>
                <p><a href="https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09">https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09</a></p>
                <ul>
                    <li><b>Meeting ID:</b> 884 3584 3854</li>
                    <li><b>Passcode:</b> 421097</li>
                    <li>--OR--<br>
                    Dial by your location
                      +1 929 205 6099 US (New York)<br>
                      Find your local number:<br>
                      https://us02web.zoom.us/u/kpWLPEqKk
                    </li>
                </ul>
            </div>
          `,
          date: 'January 26, 2021',
          time: '10:00-11:00 am',
          modality: 'Zoom',
          presenter: 'Prospectus Group',
          more: '',
        },
        {
          id: 3,
          name: 'SAPST (State) ',
          description: `
            <div class="content">
            <h5><b>270 Peachtree Street NW</b></h5>
            </div>
          `,
          date: 'February 9-12, 2021',
          time: '9:00 am-5:00 pm',
          modality: 'In-person',
          presenter: 'Prospectus Group',
          more: '',
        },
        {
          id: 4,
          name: 'SAPST (Providers)',
          description: `
            <div class="content">
                <h5><b>Join Zoom Meeting</b></h5>
                <p><a href="https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09">https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09</a></p>
                <ul>
                    <li><b>Meeting ID:</b> 884 3584 3854</li>
                    <li><b>Passcode:</b> 421097</li>
                    <li>--OR--<br>
                    Dial by your location
                      +1 929 205 6099 US (New York)<br>
                      Find your local number:<br>
                      https://us02web.zoom.us/u/kpWLPEqKk
                    </li>
                </ul>
            </div>
          `,
          date: 'March 9-12, 2021',
          time: '9:00 am-5:00 pm',
          modality: 'Zoom',
          presenter: 'Prospectus Group',
          more: '',
        },
        {
          id: 5,
          name: 'Ethics',
          description: `
            <div class="content">
                <h5><b>Join Zoom Meeting</b></h5>
                <p><a href="https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09">https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09</a></p>
                <ul>
                    <li><b>Meeting ID:</b> 884 3584 3854</li>
                    <li><b>Passcode:</b> 421097</li>
                    <li>--OR--<br>
                    Dial by your location
                      +1 929 205 6099 US (New York)<br>
                      Find your local number:<br>
                      https://us02web.zoom.us/u/kpWLPEqKk
                    </li>
                </ul>
            </div>
          `,
          date: 'March 23, 2021',
          time: '10:00 am-12:00 pm',
          modality: 'Zoom',
          presenter: 'Prospectus Group',
          more: '',
        },
        {
          id: 6,
          name:
            'Intervening Variables & Contributing Factors - possible later date ',
          description: `
            <div class="content">
                <h5><b>Join Zoom Meeting</b></h5>
                <p><a href="https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09">https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09</a></p>
                <ul>
                    <li><b>Meeting ID:</b> 884 3584 3854</li>
                    <li><b>Passcode:</b> 421097</li>
                    <li>--OR--<br>
                    Dial by your location
                      +1 929 205 6099 US (New York)<br>
                      Find your local number:<br>
                      https://us02web.zoom.us/u/kpWLPEqKk
                    </li>
                </ul>
            </div>
          `,
          date: 'Early-Mid April, 2021',
          time: '10:00 am-11:00 am',
          modality: 'Zoom',
          presenter: 'Prospectus Group',
          more: '',
        },
        {
          id: 7,
          name: 'Sustainability',
          description: `
            <div class="content">
                <h5><b>Join Zoom Meeting</b></h5>
                <p><a href="https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09">https://us02web.zoom.us/j/88435843854?pwd=TytNU2ZvQXNMcHpaNFdLdk56cHRkQT09</a></p>
                <ul>
                    <li><b>Meeting ID:</b> 884 3584 3854</li>
                    <li><b>Passcode:</b> 421097</li>
                    <li>--OR--<br>
                    Dial by your location
                      +1 929 205 6099 US (New York)<br>
                      Find your local number:<br>
                      https://us02web.zoom.us/u/kpWLPEqKk
                    </li>
                </ul>
            </div>
          `,
          date: 'April 22, 2021',
          time: '10:00 am-2:00 pm',
          modality: 'Zoom',
          presenter: 'Prospectus Group',
          more: '',
        },
      ],
    }
  },
}
</script>

<style scoped>
.hero-header {
  background-color: #ccc;
}

.input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 100;
}

.input:-moz-placeholder {
  font-style: italic;
  font-weight: 100;
}

.input::-moz-placeholder {
  font-style: italic;
  font-weight: 100;
}

.input:-ms-input-placeholder {
  font-style: italic;
  font-weight: 100;
}
</style>
