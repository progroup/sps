<template>
  <main>
    <section
      class="hero is-light is-medium is-bold"
      style="background-size: cover; background-image: url('/assets/images/banners/training.jpg')"
    >
      <div
        class="hero-header"
        style="padding: 1rem"
      >
        <div class="container">
          <div class="field has-addons">
            <div class="control is-expanded has-icons-left">
              <input
                type="text"
                class="input is-medium"
                placeholder="What resources can we help you find today?"
                v-model="query"
                name="query"
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
      <div class="hero-body">
        <div class="container"></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-2">
            <sidebar />
          </div>
          <div class="column is-8">
            <div class="content">
              <h1>Training</h1>

              <p>
                <strong>Welcome the GASPS Training Center.</strong>
              </p>
              <p>From this page you can access and register for statewide GASPS trainings, as well as national trainings provided by our federal partners at the Center for the Application of Prevention Technologies (CAPT).</p>
              <p>Current and future training events are listed on this page. Past trainings are removed and web based trainings are archived to the resources page under the “webinar” heading.</p>
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
                        <th
                          class="training-table-training"
                          colspan="2"
                        >Training</th>
                        <th class="training-table-modality">Modality</th>
                        <th class="training-table-ceus">CEUs</th>
                        <th class="training-table-archived">Archived</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ event.date }} {{event.time }}</td>
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
export default {
  components: { Sidebar },
  data () {
    return {
      events: [
        {
          id: 10,
          name: 'ECCO Training',
          description: `
            <div class="content">
              <p>These ECCO trainings will cover:</p>
              <ol>
                <li>Quick review of Ga-SPS Website</li>
                <li>Review Ecco’s core features</li>
                <li>IP development process</li>
                <li>Entering monthly process data</li>
              </ol>
             <p>Please RSVP for the training date you plan to attend at ted@progroup.us or fiana@progroup.us<br><br>RSVPs must be sent no later than 5:00 PM on the Friday before the training date.<br><br>Webinar trainings will be held on GoToMeeting.</p>
            </div>
          `,
          date: 'August 5, 2020',
          time: '10:00 AM - 11:30 AM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        },
        {
          id: 10,
          name: 'Standing ECCO Training',
          description: `
            <div class="content">
              <p><b>Description:</b></p>
              <p>Please join my meeting from your computer, tablet or smartphone.<br>
              <a href="https://global.gotomeeting.com/join/893410589">
                https://global.gotomeeting.com/join/893410589
              </a></p>

              <p><b>You can also dial in using your phone.</b><br>
              United States: +1 (872) 240-3212</p>

              <p><b>Access Code: 893-410-589</b></p>

              <p><b>Join from a video-conferencing room or system?</b><br>
              Dial in or type: 67.217.95.2 or inroomlink.goto.com<br>
              Meeting ID: 893 410 589<br>
              Or dial directly: 893410589@67.217.95.2 or 67.217.95.2##893410589</p>

              <p>New to GoToMeeting? Get the app now and be ready when your first meeting starts:<br>
              <a href="https://global.gotomeeting.com/install/893410589">
                https://global.gotomeeting.com/install/893410589
              </a></p>
            </div>
          `,
          date: 'Septermber 2, 2020',
          time: '10:00 AM - 11:30 AM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        }
      ]
    }
  }
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
