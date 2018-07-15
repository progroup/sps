<script>
    import Sidebar from '@/components/Sidebar.vue'
    export default {
      components: { Sidebar }
    }
</script>
<template>
    <main>
        <section class="hero is-light is-medium is-bold" style="background-size: cover; background-image: url('/assets/images/banners/training.jpg')">
            <div class="hero-header" style="padding: 1rem">
                <div class="container">
                    <div class="field has-addons">
                        <div class="control is-expanded has-icons-left">
                            <input type="text" class="input is-medium" placeholder="What resources can we help you find today?" v-model="query" name="query">
                            <span class="icon is-left">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-body">
                <div class="container">

                </div>
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
                            <p>From this page you can access and register for statewide GASPS trainings, as well as national trainings provided by our federal partners at the Center for the Application of Prevention Technologies (CAPT). </p>
                            <p>Current and future training events are listed on this page. Past trainings are removed and web based trainings are archived to the resources page under the “webinar” heading. </p>
                            <p>
                                <a href="http://ga-sps.org/search?q=webinar">
                                    <strong>Click Here For All Archived Webinars</strong>
                                </a>
                            </p>
                        </div>
                        <b-tabs type="is-boxed">

                            <b-tab-item label="State">
                                <section class="section">
                                    <table class="table is-bordered is-fullwidth">
                                        <caption></caption>
                                        <thead>
                                            <tr>
                                                <th class="training-table-date">Dates</th>
                                                <th class="training-table-training" colspan="2">Training</th>
                                                <th class="training-table-modality">Modality</th>
                                                <th class="training-table-ceus">CEUs</th>
                                                <th class="training-table-archived">Archived</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    June 20, 2017 10 - 11am </td>
                                                <td colspan="2">
                                                    Key Stakeholder Analysis Tool Overview </td>
                                                <td>
                                                    Webinar </td>
                                                <td class="training-table-ceus">
                                                    no </td>
                                                <td class="training-table-archived">
                                                    no </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <p>
                                                        <b>Description:</b>
                                                        <br>
                                                    </p>
                                                    <p>Key Stakeholder Analysis Tool Overview:</p>
                                                    <p></p>
                                                    <p>
                                                        <b>Logistics</b>
                                                        <br>
                                                    </p>
                                                    <p>Key Stakeholder Analysis Review
                                                        <br> Tue, Jun 20, 2017 10:00 AM - 11:00 AM EDT</p>
                                                    <p>Please join my meeting from your computer, tablet or smartphone.
                                                        <br>
                                                        <a href="https://global.gotomeeting.com/join/798228261">https://global.gotomeeting.com/join/798228261</a></p>
                                                    <p>You can also dial in using your phone.
                                                        <br> United States: +1 (872) 240-3212</p>
                                                    <p>Access Code: 798-228-261</p>
                                                    <p></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table is-bordered is-fullwidth">
                                        <caption></caption>
                                        <thead>
                                            <tr>
                                                <th class="training-table-date">Dates</th>
                                                <th class="training-table-training" colspan="2">Training</th>
                                                <th class="training-table-modality">Modality</th>
                                                <th class="training-table-ceus">CEUs</th>
                                                <th class="training-table-archived">Archived</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    October 9, 2018- 8:15 AM – 4:30 PM </td>
                                                <td colspan="2">
                                                    Sustainability </td>
                                                <td>
                                                    In-person Meeting </td>
                                                <td class="training-table-ceus">
                                                </td>
                                                <td class="training-table-archived">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <p>
                                                        <b>Description:</b>
                                                        <br>
                                                    </p>
                                                    <p>This training will address how to develop and implement ongoing sustainability plans for maintaining prevention outcomes. Presenters will discuss 1.) how to build long-term partnerships with community organization and institutions, and 2.) practical solutions for building diverse financial streams.</p>
                                                    <p></p>
                                                    <p>
                                                        <b>Logistics</b>
                                                        <br>
                                                    </p>
                                                    <p>GSU Buckhead Center, Tower Place 200 | 3348 Peachtree Rd NE, Atlanta, GA 30326
                                                        <br> The hotels nearest to Tower Place 200 are the Courtyard by Marriott and the Doubletree. Both hotels offer government and GSU rates. Attendees may want to ask about both rates and compare pricing.</p>
                                                    <p></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table is-bordered is-fullwidth">
                                        <caption></caption>
                                        <thead>
                                            <tr>
                                                <th class="training-table-date">Dates</th>
                                                <th class="training-table-training" colspan="2">Training</th>
                                                <th class="training-table-modality">Modality</th>
                                                <th class="training-table-ceus">CEUs</th>
                                                <th class="training-table-archived">Archived</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    October 10, 2018- 9:00 AM – 4:30 PM </td>
                                                <td colspan="2">
                                                    Tri-Ethnic Community Readiness Model </td>
                                                <td>
                                                    In-Person Meeting </td>
                                                <td class="training-table-ceus">
                                                </td>
                                                <td class="training-table-archived">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <p>
                                                        <b>Description:</b>
                                                        <br>
                                                    </p>
                                                    <p>This training will take participants through the process of conducting a community readiness assessment. Participants will learn how to accurately capture community readiness, and the importance of fidelity when carrying out these assessments.</p>
                                                    <p></p>
                                                    <p>
                                                        <b>Logistics</b>
                                                        <br>
                                                    </p>
                                                    <p>GSU Buckhead Center, Tower Place 200 | 3348 Peachtree Rd NE, Atlanta, GA 30326</p>
                                                    <p></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table is-bordered is-fullwidth">
                                        <caption></caption>
                                        <thead>
                                            <tr>
                                                <th class="training-table-date">Dates</th>
                                                <th class="training-table-training" colspan="2">Training</th>
                                                <th class="training-table-modality">Modality</th>
                                                <th class="training-table-ceus">CEUs</th>
                                                <th class="training-table-archived">Archived</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    TBD, 10:00 AM – 11:30 AM </td>
                                                <td colspan="2">
                                                    Proposal/Technical Writing </td>
                                                <td>
                                                    Webinar </td>
                                                <td class="training-table-ceus">
                                                </td>
                                                <td class="training-table-archived">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <p>
                                                        <b>Description:</b>
                                                        <br>
                                                    </p>
                                                    <p>This webinar will address the following objectives: 1.) using data to raise awareness and demonstrate need, 2.) formatting and proofing, and 3.) citing sources and avoiding unintentional plagiarism.</p>
                                                    <p></p>
                                                    <p>
                                                        <b>Logistics</b>
                                                        <br>
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
                                                <th class="training-table-training" colspan="2">Training</th>
                                                <th class="training-table-modality">Modality</th>
                                                <th class="training-table-ceus">CEUs</th>
                                                <th class="training-table-archived">Archived</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    July 18, 2018, 10:00 AM to 11:00 AM </td>
                                                <td colspan="2">
                                                    Ecco Clinic </td>
                                                <td>
                                                    Webinar </td>
                                                <td class="training-table-ceus">
                                                </td>
                                                <td class="training-table-archived">
                                                    yes </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <p>
                                                        <b>Description:</b>
                                                        <br>
                                                    </p>
                                                    <p>TARGET AUDIENCE: ASAPP providers using the Ecco system to enter MDS data.
                                                        <br> This webinar will allow ASAPP providers to come with questions they have concerning developing/editing their Intervention Profiles, entering monthly process data, or other challenges they may have navigating the Ecco system. Providers are encouraged to email their questions in advance to Fiana Thacker at fiana@progroup.us; however, questions posed during the webinar are also welcomed.</p>
                                                    <p></p>
                                                    <p>
                                                        <b>Logistics</b>
                                                        <br>
                                                    </p>
                                                    <p>GoToMeeting
                                                        <br> Please join my meeting from your computer, tablet or smartphone.
                                                        <br>
                                                        <a href="https://global.gotomeeting.com/join/391064077">https://global.gotomeeting.com/join/391064077</a>
                                                        <br> You can also dial in using your phone.
                                                        <br> United States: +1 (646) 749-3112
                                                        <br> Access Code: 391-064-077
                                                        <br> Joining from a video-conferencing room or system?
                                                        <br> Dial: 67.217.95.2##391064077
                                                        <br> Cisco devices: 391064077@67.217.95.2
                                                        <br> First GoToMeeting? Let's do a quick system check:
                                                        <br>
                                                        <a href="https://link.gotomeeting.com/system-check">https://link.gotomeeting.com/system-check</a></p>
                                                    <p></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table is-bordered is-fullwidth">
                                        <caption></caption>
                                        <thead>
                                            <tr>
                                                <th class="training-table-date">Dates</th>
                                                <th class="training-table-training" colspan="2">Training</th>
                                                <th class="training-table-modality">Modality</th>
                                                <th class="training-table-ceus">CEUs</th>
                                                <th class="training-table-archived">Archived</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    October 9, 2018, 8:15 AM to 4:30 AM </td>
                                                <td colspan="2">
                                                    Sustainability </td>
                                                <td>
                                                    In-person </td>
                                                <td class="training-table-ceus">
                                                </td>
                                                <td class="training-table-archived">
                                                    no </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <p>
                                                        <b>Description:</b>
                                                        <br>
                                                    </p>
                                                    <p>The purpose of the one-day training is to address the important role substance abuse prevention coalitions play in creating safe communities and to provide strategies for increasing the involvement of various segments of the community in prevention efforts and programs.</p>
                                                    <p>Facilitator: Maxine Fuller</p>
                                                    <p></p>
                                                    <p>
                                                        <b>Logistics</b>
                                                        <br>
                                                    </p>
                                                    <p>The hotels nearest to Tower Place 200 are the Courtyard by Marriott and the Doubletree. Both hotels offer government and GSU rates. All attendees qualify for both rates and may want to inquire about each and compare pricing.</p>
                                                    <p>GSU Buckhead Center, Tower Place 200 | 3348 Peachtree Rd NE, Atlanta, GA 30326</p>
                                                    <p></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table is-bordered is-fullwidth">
                                        <caption></caption>
                                        <thead>
                                            <tr>
                                                <th class="training-table-date">Dates</th>
                                                <th class="training-table-training" colspan="2">Training</th>
                                                <th class="training-table-modality">Modality</th>
                                                <th class="training-table-ceus">CEUs</th>
                                                <th class="training-table-archived">Archived</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    August 15, 2018, 10:00 AM to 11:30 AM </td>
                                                <td colspan="2">
                                                    Technical Writing </td>
                                                <td>
                                                    Webinar </td>
                                                <td class="training-table-ceus">
                                                </td>
                                                <td class="training-table-archived">
                                                    yes </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <p>
                                                        <b>Description:</b>
                                                        <br>
                                                    </p>
                                                    <p>TARGET AUDIENCE: All ASAPP providers are encouraged to join. For those who are unable to attend the live webinar, a recorded version will be available on www.ga-sps.org.</p>
                                                    <p>This webinar will provide helpful tips for report writing. The objectives include 1.) techniques for infusing data into reports, and 2.) methods for keeping writing concise and clear.</p>
                                                    <p>Facilitator: Fiana Thacker</p>
                                                    <p></p>
                                                    <p>
                                                        <b>Logistics</b>
                                                        <br>
                                                    </p>
                                                    <p>GoToMeeting
                                                        <br> Please join my meeting from your computer, tablet or smartphone.
                                                        <br>
                                                        <a href="https://global.gotomeeting.com/join/137306045">https://global.gotomeeting.com/join/137306045</a>
                                                        <br> You can also dial in using your phone.
                                                        <br> United States: +1 (408) 650-3123
                                                        <br> Access Code: 137-306-045
                                                        <br> Joining from a video-conferencing room or system?
                                                        <br> Dial: 67.217.95.2##137306045
                                                        <br> Cisco devices: 137306045@67.217.95.2
                                                        <br> First GoToMeeting? Let's do a quick system check:
                                                        <br>
                                                        <a href="https://link.gotomeeting.com/system-check">https://link.gotomeeting.com/system-check</a></p>
                                                    <p></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table is-bordered is-fullwidth">
                                        <caption></caption>
                                        <thead>
                                            <tr>
                                                <th class="training-table-date">Dates</th>
                                                <th class="training-table-training" colspan="2">Training</th>
                                                <th class="training-table-modality">Modality</th>
                                                <th class="training-table-ceus">CEUs</th>
                                                <th class="training-table-archived">Archived</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    October 10, 8:15 AM to 4:30 PM </td>
                                                <td colspan="2">
                                                    Tri-Ethnic Community Readiness Model </td>
                                                <td>
                                                    In-person </td>
                                                <td class="training-table-ceus">
                                                </td>
                                                <td class="training-table-archived">
                                                    no </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <p>
                                                        <b>Description:</b>
                                                        <br>
                                                    </p>
                                                    <p>This training will take participants through the process of conducting a community readiness assessment. Participants will learn how to accurately capture community readiness, and the importance of fidelity when carrying out these assessments.</p>
                                                    <p></p>
                                                    <p>
                                                        <b>Logistics</b>
                                                        <br>
                                                    </p>
                                                    <p>GSU Buckhead Center, Tower Place 200 | 3348 Peachtree Rd NE, Atlanta, GA 30326
                                                        <br> FACILITATORS: Tiffiany Aholou</p>
                                                    <p>The hotels nearest to Tower Place 200 are the Courtyard by Marriott and the Doubletree. Both hotels offer government and GSU rates. All attendees qualify for both rates and may want to inquire about each and compare pricing.</p>
                                                    <p></p>
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
                                                <th class="training-table-training" colspan="2">Training</th>
                                                <th class="training-table-modality">Modality</th>
                                                <th class="training-table-ceus">CEUs</th>
                                                <th class="training-table-archived">Archived</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    May 16, 2017 at 1:30 p.m. Eastern
                                                </td>
                                                <td colspan="2">
                                                    Emerging Issues in Tobacco Use
                                                </td>
                                                <td>
                                                    Webinar
                                                </td>
                                                <td class="training-table-ceus">
                                                    NA
                                                </td>
                                                <td class="training-table-archived">
                                                    NA
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <p>
                                                        <b>Description:</b>
                                                        <br>
                                                    </p>
                                                    <p>Emerging Issues in Tobacco Use – Tuesday, May 16, 2017 at 1:30 p.m. Eastern<br> This webinar will discuss the current landscape on tobacco use and address emerging issues in tobacco misuse and prevention. It will feature experts from SAMHSA and the CDC, as well as NPW partner Campaign for Tobacco Free Kids.</p>
                                                    <p>
                                                        <b>Logistics</b>
                                                        <br>
                                                    </p>
                                                    <p>Register today:
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
                                                <th class="training-table-training" colspan="2">Training</th>
                                                <th class="training-table-modality">Modality</th>
                                                <th class="training-table-ceus">CEUs</th>
                                                <th class="training-table-archived">Archived</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Wednesday, May 17, 2017 at 1:30 p.m. Eastern
                                                </td>
                                                <td colspan="2">
                                                    Opioid Addiction and Prevention
                                                </td>
                                                <td>
                                                    Webinar
                                                </td>
                                                <td class="training-table-ceus">
                                                    NA
                                                </td>
                                                <td class="training-table-archived">
                                                    NA
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                    <p>
                                                        <b>Description:</b>
                                                        <br>
                                                    </p>
                                                    <p>Opioid Addiction and Prevention – Wednesday, May 17, 2017 at 1:30 p.m. Eastern<br>This webinar will discuss the growing issue of opioid addiction and how partner engagement can support prevention efforts. It will feature SAMHSA and state prevention experts, and NPW partner American Society for Addiction Medicine.<br>m/r/749hzwn4sivd&amp;eom</p>
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

<style>
.hero-header {
    background-color: #ccc;
}

.input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 100
}

.input:-moz-placeholder {
    font-style: italic;
    font-weight: 100
}

.input::-moz-placeholder {
    font-style: italic;
    font-weight: 100
}

.input:-ms-input-placeholder {
    font-style: italic;
    font-weight: 100
}
</style>
