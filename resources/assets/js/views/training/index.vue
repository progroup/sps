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
              <b-tab-item label="National">
                <section class="section">
                  <table class="table is-bordered is-fullwidth">
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
                        <td>May 16, 2017 at 1:30 p.m. Eastern</td>
                        <td colspan="2">Emerging Issues in Tobacco Use</td>
                        <td>Webinar</td>
                        <td class="training-table-ceus">NA</td>
                        <td class="training-table-archived">NA</td>
                      </tr>
                      <tr>
                        <td colspan="6">
                          <p>
                            <b>Description:</b>
                            <br>
                          </p>
                          <p>Emerging Issues in Tobacco Use – Tuesday, May 16, 2017 at 1:30 p.m. Eastern
                            <br>This webinar will discuss the current landscape on tobacco use and address emerging issues in tobacco misuse and prevention. It will feature experts from SAMHSA and the CDC, as well as NPW partner Campaign for Tobacco Free Kids.
                          </p>
                          <p>
                            <b>Logistics</b>
                            <br>
                          </p>
                          <p>
                            Register today:
                            <a href="https://cc.readytalk.com/r/aw7y9kj6ybk&amp;eom">https://cc.readytalk.com/r/aw7y9kj6ybk&amp;eom</a>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="table is-bordered is-fullwidth">
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
                        <td>Wednesday, May 17, 2017 at 1:30 p.m. Eastern</td>
                        <td colspan="2">Opioid Addiction and Prevention</td>
                        <td>Webinar</td>
                        <td class="training-table-ceus">NA</td>
                        <td class="training-table-archived">NA</td>
                      </tr>
                      <tr>
                        <td colspan="6">
                          <p>
                            <b>Description:</b>
                            <br>
                          </p>
                          <p>Opioid Addiction and Prevention – Wednesday, May 17, 2017 at 1:30 p.m. Eastern
                            <br>This webinar will discuss the growing issue of opioid addiction and how partner engagement can support prevention efforts. It will feature SAMHSA and state prevention experts, and NPW partner American Society for Addiction Medicine.
                            <br>m/r/749hzwn4sivd&amp;eom
                          </p>
                          <p>
                            <b>Logistics</b>
                            <br>
                          </p>
                          <p>
                            <a href="https://cc.readytalk.com/r/749hzwn4sivd&amp;eom">https://cc.readytalk.com/r/749hzwn4sivd&amp;eom</a>
                          </p>
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
          id: 1,
          name: 'Ethics Training',
          description: `<p><b>Location:</b> <br></p> <p>GoToMeeting Webinar</p> <p><b>Description:</b> <br></p> <p>Please join my meeting from your computer, tablet or
                      smartphone.</p> <a href="https://global.gotomeeting.com/join/908301725">https://global.gotomeeting.com/join/908301725</a><br> <b>You can also dial in using your phone.</b><br>
                      United States: +1 (408) 650-3123<br> <b>Access Code: 908-301-725</b><br> <b>Joining from a video-conferencing room or system?</b><br>
                      Dial: 67.217.95.2##908301725<br>
                      Cisco devices: 908301725@67.217.95.2<br> <b>First GoToMeeting? Let's do a quick system check:</b><br> <a href="https://link.gotomeeting.com/system-check">https://link.gotomeeting.com/system-check</a><br> <p><b>Target Audience:</b> <br>
                          OBHP providers
                      </p>`,
          date: 'February 26, 2019',
          time: '10:00AM - 11:30AM',
          modality: 'Webinar',
          presenter: 'Tiffiany Aholou',
          more: 'Needed for prevention certification'
        },
        {
          id: 2,
          name: 'CPAW Engagement and Utilization',
          description: 'Provide knowledge on how to use and engage the CPAW',
          date: 'April 17, 2019',
          time: '10:00AM - 11:30AM',
          modality: 'Webinar',
          presenter: 'Prospectus Group',
          more: ''
        },
        {
          id: 3,
          name: 'ECCO Clinic',
          description: `<p><b>Location:</b> <br></p> <p>GoToMeeting Webinar</p> <p><b>Description:</b> <br></p> <p>Please join my meeting from your computer, tablet or
                      smartphone.</p> <a href="https://global.gotomeeting.com/join/266496557">https://global.gotomeeting.com/join/266496557</a><br> <b>You can also dial in using your phone.</b><br>
                      United States: +1 (872) 240-3311<br> <b>Access Code: 266-496-557</b><br> <b>Joining from a video-conferencing room or system?</b><br>
                      Depending on your device dial:<br>
                      266496557@67.217.95.2 or 67.217.95.2##266496557<br>
                      <br> <b>New to GoToMeeting? Get the app now and be ready when your first meeting starts:</b><br> <a href="https://global.gotomeeting.com/join/266496557">https://global.gotomeeting.com/join/266496557</a><br> <p><b>Target Audience:</b> <br>
                          OBHP prevention providers on ECCO.
                      </p>`,
          date: 'August 21, 2019',
          time: '10:00AM - 11:00AM',
          modality: 'GoToMeeting',
          presenter: 'Ted Mulherin and Fiana Thacker',
          more: 'This webinar will include an overview of the new workflow and data guideline changes on ECCO.'
        },
        {
          id: 4,
          name: 'Current Trends in Substance Abuse Prevention',
          description: 'Provide knowledge on current practices, techniques, and research in the field of prevention',
          date: 'September 18, 2019',
          time: '10:00AM - 11:30AM',
          modality: 'Webinar',
          presenter: 'Prospectus Group, Ben Gleason',
          more: 'Should occur yearly<br>Ben Gleason / Lit review.'
        },
        {
          id: 5,
          name: 'Proposal/Technical Writing',
          description: 'This webinar will address the following objectives: 1.) using data to raise awareness and demonstrate need, 2.) formatting and proofing, and 3.) citing sources and avoiding unintentional plagiarism.',
          date: 'TBD',
          time: '10:00AM - 11:30AM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        },
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
              <p>Please RSVP for the training date you plan to attend at ted@progroup.us or fiana@progroup.us
              RSVPs must be sent no later than 5:00 PM on the Friday before the training date.
              In-person trainings will be held at 270 Peachtree St NW, GA, Atlanta 30303, Floor 22.</p>
            </div>
          `,
          date: 'October 2, 2019',
          time: '08:15AM - 04:30PM',
          modality: 'In-person',
          presenter: '',
          more: ''
        },
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
              <p>Please RSVP for the training date you plan to attend at ted@progroup.us or fiana@progroup.us
              RSVPs must be sent no later than 5:00 PM on the Friday before the training date.
              In-person trainings will be held at 270 Peachtree St NW, GA, Atlanta 30303, Floor 22.</p>
            </div>
          `,
          date: 'November 6, 2019',
          time: '10:00 AM - 11:30 AM',
          modality: 'In-person',
          presenter: 'Tiffiany Aholou',
          more: ''
        },
        {
          id: 10,
          name: 'Tri-Ethnic Community Readiness Model Training Highlights',
          description: `
            <div class="content">
              <p>Please join my meeting from your computer, tablet or smartphone. https://global.gotomeeting.com/join/938210085</p>
              <p>You can also dial in using your phone. United States: +1 (646) 749-3112 Access Code: 938-210-085</p>
              <p>Joining from a video-conferencing room or system? Dial: 67.217.95.2##938210085 Cisco devices: 938210085@67.217.95.2</p>
              <p>First GoToMeeting? Let's do a quick system check: https://link.gotomeeting.com/system-check</p>
              <p>TARGET AUDIENCE ASAPP providers unable to attend the in-person training do to Hurricane Michael. ASAPP providers who would like a refresher on the TECRM are also encouraged to attend.</p>
              <p>This training will highlight the processes for interviewing and scoring transcribed interviews for community readiness assessments.</p>
            </div>
          `,
          date: 'November 15th, 2019',
          time: '10:00AM - 11:30PM',
          modality: 'Webinar',
          presenter: 'Tiffiany Aholou',
          more: ''
        },
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
          date: 'December 4, 2019',
          time: '10:00 AM - 11:30 AM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        },
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
          date: 'January 8, 2020',
          time: '10:00 AM - 11:30 AM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        },
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
          date: 'February 5, 2020',
          time: '10:00 AM - 11:30 PM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        },
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
          date: 'March 4, 2020',
          time: '10:00 AM - 11:30 AM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        },
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
          date: 'April 1, 2020',
          time: '10:00 AM - 11:30 AM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        },
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
          date: 'May 6, 2020',
          time: '10:00 AM - 11:30 AM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        },
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
          date: 'June 3, 2020',
          time: '10:00 AM - 11:30 AM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        },
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
          date: 'July 1, 2020',
          time: '10:00 AM - 11:30 AM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        },
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
          date: 'August 5, 2019',
          time: '10:00 AM - 11:30 AM',
          modality: 'Webinar',
          presenter: '',
          more: ''
        },
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
          date: 'September 2, 2020',
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
