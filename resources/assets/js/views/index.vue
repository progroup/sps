<template>
    <main>
        <section class="hero" style="background-size: cover; background-image: url('/images/atlanta.jpg')">
            <div class="hero-header">
                <div class="container">
                    <p class="is-size-2 has-text-light" style="line-height: 1; padding-top: 1.5rem">
                        <b>Welcome to the Georgia Strategic<br> Prevention Services Hubsite</b>
                    </p>
                </div>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="field has-addons">
                        <div class="control is-expanded has-icons-left">
                            <input type="text" class="input is-large" placeholder="What resources can we help you find today?" v-model="query" name="query">
                            <span class="icon is-left">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div class="control">
                            <button @click="search()" class="button is-primary is-large" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-footer">
                <div class="container">
                    <div class="level">
                        <div class="level-left">
                            <div class="level-item">
                                <figure class="image" style="width: 200px">
                                    <img src="/images/progroup.png" alt="Progroup">
                                </figure>
                            </div>
                        </div>
                        <div class="level-right">
                            <div class="level-item">
                                <p class="is-size-3 has-text-weight-semibold has-text-light" style="line-height: 1;padding-bottom: 1.5rem">
                                    <em>Serving the state of Georgia's<br> Behavioral Health / Prevention Workforce</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container is-medium">
                <div class="columns is-multiline">
                    <div class="column is-half-tablet is-one-half-desktop is-one-quarter-fullhd has-text-centered">
                        <article class="media">
                            <a href="/#/search">
                                <figure class="media-left" style="padding-right: 1rem">
                                    <p class="image is-48x48">
                                        <svg id="icon-cogs" viewBox="0 0 15 14">
                                            <path fill="currentColor" d="M7 7q0-.828-.586-1.414T5 5t-1.414.586T3 7t.586 1.414T5 9t1.414-.586T7 7zm6 4q0-.406-.297-.703T12 10t-.703.297T11 11q0 .414.293.707T12 12t.707-.293T13 11zm0-8q0-.406-.297-.703T12 2t-.703.297T11 3q0 .414.293.707T12 4t.707-.293T13 3zm-3 3.289v1.445q0 .078-.055.152t-.125.082l-1.211.187q-.086.273-.25.594.266.375.703.898.055.078.055.156 0 .094-.055.148-.18.234-.645.699t-.613.465q-.086 0-.164-.055l-.898-.703q-.289.148-.602.242-.086.844-.18 1.211-.055.187-.234.187H4.273q-.086 0-.156-.059t-.078-.137l-.18-1.195q-.266-.078-.586-.242l-.922.695q-.055.055-.156.055-.086 0-.164-.062Q.906 10.013.906 9.802q0-.07.055-.148.078-.109.32-.414t.367-.477q-.18-.344-.273-.641L.188 7.935Q.11 7.927.055 7.861T0 7.709V6.264q0-.078.055-.152T.18 6.03l1.211-.187q.086-.273.25-.594-.266-.375-.703-.898-.055-.086-.055-.156 0-.094.055-.156.172-.234.641-.695t.617-.461q.086 0 .164.055l.898.703q.266-.141.602-.25.086-.844.18-1.203.055-.187.234-.187h1.453q.086 0 .156.059t.078.137l.18 1.195q.266.078.586.242l.922-.695q.062-.055.156-.055.086 0 .164.062 1.125 1.039 1.125 1.25 0 .07-.055.148-.094.125-.328.422t-.352.469q.18.375.266.641l1.187.18q.078.016.133.082T10 6.29zm5 4.164v1.094q0 .125-1.164.242-.094.211-.234.406.398.883.398 1.078 0 .031-.031.055-.953.555-.969.555-.062 0-.359-.367t-.406-.531q-.156.016-.234.016t-.234-.016q-.109.164-.406.531t-.359.367q-.016 0-.969-.555-.031-.023-.031-.055 0-.195.398-1.078-.141-.195-.234-.406-1.164-.117-1.164-.242v-1.094q0-.125 1.164-.242.102-.227.234-.406-.398-.883-.398-1.078 0-.031.031-.055.031-.016.273-.156t.461-.266.234-.125q.062 0 .359.363t.406.527q.156-.016.234-.016t.234.016q.398-.555.719-.875L13 8.124q.031 0 .969.547.031.023.031.055 0 .195-.398 1.078.133.18.234.406 1.164.117 1.164.242zm0-8v1.094q0 .125-1.164.242-.094.211-.234.406.398.883.398 1.078 0 .031-.031.055-.953.555-.969.555-.062 0-.359-.367t-.406-.531q-.156.016-.234.016t-.234-.016q-.109.164-.406.531t-.359.367q-.016 0-.969-.555-.031-.023-.031-.055 0-.195.398-1.078-.141-.195-.234-.406-1.164-.117-1.164-.242V2.453q0-.125 1.164-.242.102-.227.234-.406-.398-.883-.398-1.078 0-.031.031-.055.031-.016.273-.156t.461-.266.234-.125q.062 0 .359.363t.406.527q.156-.016.234-.016t.234.016q.398-.555.719-.875L13 .124q.031 0 .969.547.031.023.031.055 0 .195-.398 1.078.133.18.234.406Q15 2.327 15 2.452z"></path>
                                        </svg>
                                    </p>
                                </figure>
                            </a>
                            <div class="media-content">
                                <div style="padding-right: 1rem">
                                    <h3 class="is-size-3">
                                        <a href="/#/search">Resources</a>
                                    </h3>
                                    <p class="is-size-5">GASPS has searched, developed and listed a comprehensive list of approved support resources. This includes Tools, Prospectus Literature Reviews, and webinars.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="column is-half-tablet is-one-half-desktop is-one-quarter-fullhd has-text-centered">
                        <article class="media">
                            <a href="/training">
                                <figure class="media-left" style="padding-right: 1rem">
                                    <p class="image is-48x48">
                                        <svg id="icon-university" viewBox="0 0 45 42">
                                            <path fill="currentColor" d="M22.5 0L45 9v3h-3q0 .609-.48 1.055t-1.137.445H4.617q-.656 0-1.137-.445T3 12H0V9zM6 15h6v18h3V15h6v18h3V15h6v18h3V15h6v18h1.383q.656 0 1.137.445T42 34.5V36H3v-1.5q0-.609.48-1.055T4.617 33H6V15zm37.383 22.5q.656 0 1.137.445T45 39v3H0v-3q0-.609.48-1.055t1.137-.445h41.766z"></path>
                                        </svg>
                                    </p>
                                </figure>
                            </a>
                            <div class="media-content">
                                <div style="padding-right: 1rem">
                                    <h3 class="is-size-3">
                                        <a href="/training">Training Center</a>
                                    </h3>
                                    <p class="is-size-5">Locate and Register for local and national trainings from the Training Center page.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="column is-half-tablet is-one-half-desktop is-one-quarter-fullhd has-text-centered">
                        <article class="media">
                            <a href="http://ecco.ga-sps.org/help.php" target="ecco">
                                <figure class="media-left" style="padding-right: 1rem">
                                    <p class="image is-48x48">
                                        <svg id="icon-medkit" viewBox="0 0 28 28">
                                            <path fill="currentColor" d="M20 17.5v-3q0-.219-.141-.359T19.5 14H16v-3.5q0-.219-.141-.359T15.5 10h-3q-.219 0-.359.141T12 10.5V14H8.5q-.219 0-.359.141T8 14.5v3q0 .219.141.359T8.5 18H12v3.5q0 .219.141.359T12.5 22h3q.219 0 .359-.141T16 21.5V18h3.5q.219 0 .359-.141T20 17.5zM10 6h8V4h-8v2zM4 6v20h-.5q-1.437 0-2.469-1.031T0 22.5v-13q0-1.437 1.031-2.469T3.5 6H4zm18.5 0v20h-17V6H8V3.5q0-.625.438-1.062T9.5 2h9q.625 0 1.062.438T20 3.5V6h2.5zM28 9.5v13q0 1.437-1.031 2.469T24.5 26H24V6h.5q1.437 0 2.469 1.031T28 9.5z"></path>
                                        </svg>
                                    </p>
                                </figure>
                            </a>
                            <div class="media-content">
                                <div style="padding-right: 1rem">
                                    <h3 class="is-size-3">
                                        <a href="http://ecco.ga-sps.org/help.php" target="ecco">Help&nbsp;/&nbsp;IP&nbsp;Reports</a>
                                    </h3>
                                    <p class="is-size-5">In need of Technical Assistance (TA)? Use the TA page to link to ECCO to submit a request for TA quickly and easily, no log in required</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="column is-half-tablet is-one-half-desktop is-one-quarter-fullhd has-text-centered">
                        <article class="media">
                            <a href="/calendar">
                                <figure class="media-left" style="padding-right: 1rem">
                                    <p class="image is-48x48">
                                        <svg id="icon-calendar" viewBox="0 0 26 28">
                                            <path fill="currentColor" d="M2 26h4.5v-4.5H2V26zm5.5 0h5v-4.5h-5V26zM2 20.5h4.5v-5H2v5zm5.5 0h5v-5h-5v5zm-5.5-6h4.5V10H2v4.5zM13.5 26h5v-4.5h-5V26zm-6-11.5h5V10h-5v4.5zm12 11.5H24v-4.5h-4.5V26zm-6-5.5h5v-5h-5v5zM8 7V2.5q0-.203-.148-.352T7.5 2h-1q-.203 0-.352.148T6 2.5V7q0 .203.148.352T6.5 7.5h1q.203 0 .352-.148T8 7zm11.5 13.5H24v-5h-4.5v5zm-6-6h5V10h-5v4.5zm6 0H24V10h-4.5v4.5zM20 7V2.5q0-.203-.148-.352T19.5 2h-1q-.203 0-.352.148T18 2.5V7q0 .203.148.352t.352.148h1q.203 0 .352-.148T20 7zm6-1v20q0 .812-.594 1.406T24 28H2q-.812 0-1.406-.594T0 26V6q0-.812.594-1.406T2 4h2V2.5q0-1.031.734-1.766T6.5 0h1q1.031 0 1.766.734T10 2.5V4h6V2.5q0-1.031.734-1.766T18.5 0h1q1.031 0 1.766.734T22 2.5V4h2q.812 0 1.406.594T26 6z"></path>
                                        </svg>
                                    </p>
                                </figure>
                            </a>
                            <div class="media-content">
                                <div style="padding-right: 1rem">
                                    <h3 class="is-size-3">
                                        <a href="/calendar">Calendar</a>
                                    </h3>
                                    <p class="is-size-5">What to keep up with all that's going on? Take a look at the GASPS calendar. Where we list upcoming events, trainings and Major due dates for in the GASPS systems.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <section class="section">
            <div class="container content is-medium">
                <div class="columns">
                    <div class="column is-4">
                        <div class="content">
                            <h3>Welcome</h3>
                            <p>Welcome to GASPS, the technical assistance system for Georgia’s Alcohol Substance Abuse Prevention Project (ASAPP).</p>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="content">
                            <h3>APP State Wide Goals</h3>
                            <ul class="list-unstyled">
                                <li>
                                    <strong>Goal 1:</strong> Reduce the early onset of alcohol use among 9-20 year olds</li>
                                <li>
                                    <strong>Goal 2:</strong> Reduce access to alcohol and binge drinking among 9-20 year olds</li>
                                <li>
                                    <strong>Goal 3:</strong> Reduce binge drinking and heavy drinking among 18-25 year olds</li>
                            </ul>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="content">
                            <h3>We Provide</h3>
                            <ul>
                                <li>Training by Subject Matter Experts (SME)</li>
                                <li>Research-based knowledge and reliable information</li>
                                <li>Guidance through the implementation process</li>
                                <li>Assistance in problem solving and goal attainment</li>
                                <li>Resource and referral information</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container content is-medium">
                <div class="columns">
                    <div class="column is-8">
                        <div class="content">
                            <h3>Prevention in the State of Georgia</h3>
                            <p>Prevention is a proactive process that enables individuals to create and reinforce conditions that promote healthy behaviors and lifestyles. The Office of Behavioral Health Prevention (OBHP) supports the health and well being of individuals, families and communities by reducing the use and abuse of substances and their related consequences across the lifespan, and delaying the onset of substance use by youth using a data-driven planning process that targets high priorities for all categories of the population defined by the Institute of Medicine.</p>
                        </div>
                    </div>
                    <div class="column is-4">
                        <img src="/assets/images/georgia.jpg" style="display:inline-block;float:right; margin-top: 1em;margin-right: 50px;height: 212px">
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container content is-medium">
                <div class="columns">
                    <div class="column is-4 col-md-pull-8">
                        <img src="/assets/images/the-behavioral-health-continuum-model.png" style="display:inline-block;float:right; margin-top: 1em;height: 175px">
                    </div>
                    <div class="column is-8 col-md-push-4">
                        <div class="content">
                            <h3>Prevention in the State of Georgia</h3>
                            <p>The Institute of Medicine’s Continuum of Care (also known as the mental health intervention spectrum) is a classification system that presents the scope of behavioral health services: promotion of health, prevention of illness/disorder, treatment, and maintenance/recovery.</p>
                            <p>
                                <strong>Promotion</strong> involves interventions (e.g., programs, practices, or environmental strategies) that enable people “to increase control over, and to improve, their health.”10 As such, interventions that promote health occur independently as well as throughout the continuum of care as part of prevention, treatment, and maintenance/recovery.</p>
                            <p>
                                <strong>Prevention</strong> focuses on interventions that occur prior to the onset of a disorder and which are intended to prevent the occurrence of the disorder or reduce risk for the disorder.14 Prevention is also about striving to optimize well-being.</p>
                            <p>
                                <strong>Treatment</strong> interventions include case identification and standard forms of treatment (e.g., detoxification, outpatient treatment, in-patient treatment, medication-assisted treatment).</p>
                            <p>
                                <strong>Maintenance</strong> includes interventions that focus on compliance with long-term treatment to reduce relapse and recurrence and aftercare, including rehabilitation and recovery support.</p>
                            <p>
                                <strong>Recovery</strong> is a process of change through which individuals improve their health and wellness, live a self-directed life, and strive to reach their full potential.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container content is-medium">
                <div class="columns">
                    <div class="column is-8">
                        <div class="content">
                            <h3>About the Strategic Prevention Framework (SPF)</h3>

                            <p>SAMHSA's Strategic Prevention Framework (SPF) is a 5-step planning process to guide the selection, implementation, and evaluation of effective, culturally appropriate, and sustainable prevention activities. The effectiveness of this process begins with a clear understanding of community needs and depends on the involvement of community members in all stages of the planning process.</p>

                            <p>SPF Logo The SPF includes these five steps:</p>

                            <ul class="list-unstyled">
                                <li>
                                    <b>Step 1.</b> Assess Needs</li>
                                <li>
                                    <b>Step 2.</b> Build Capacity</li>
                                <li>
                                    <b>Step 3.</b> Plan</li>
                                <li>
                                    <b>Step 4.</b> Implement</li>
                                <li>
                                    <b>Step 5.</b> Evaluation</li>
                            </ul>

                            <p>These steps are guided by the principles of cultural competence and sustainability. The SPF is designed to help States, Jurisdictions, Tribes, and communities build the infrastructure necessary for effective and sustainable prevention. Each step contains key milestones and products that are essential to the validity of the process. Focused on systems development, the SPF reflects a public health, or community-based, approach to delivering effective prevention.</p>
                        </div>
                    </div>
                    <div class="column is-4">
                        <img src="/assets/images/spf2.png" style="display:inline-block;float:right; margin-top: 1em;width: 275px">
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container content is-medium">
                <div class="columns">
                    <div class="column is-8 col-md-push-4">
                        <div class="content">
                            <h3>About Environmental Strategies</h3>
                            <p>Environmental strategies are prevention efforts aimed at changing or influencing community standards, institutions, structures or attitudes that shape individuals’ behaviors. While individual approaches focus on helping people develop the knowledge, attitudes, and skills they need to change their behavior, environmental approaches focus on creating an environment that makes it easier for people to act in healthy ways.</p>
                        </div>
                    </div>
                    <div class="column is-4 col-md-pull-8">
                        <img src="/assets/images/research-icon.png" style="width: 275px;float:right">
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    // props: ['query'],
    data () {
        return {
            query: '',
            user: window.App.user
        }
    },
    methods: {
        search () {
            this.$router.push({ path: 'search', query: { query: this.query } })
            console.log(this.query)
        }
    }
}
</script>
