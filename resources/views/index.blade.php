@extends('layouts.app')
@section('content')
<section class="hero" style="background-size: cover; background-image: url('/images/atlanta.jpg')">
    <div class="hero-header">
        <div class="container">
            <p class="is-size-2 has-text-light" style="line-height: 1; padding-top: 1.5rem"><b>Welcome to the Georgia Strategic<br>
            Prevention Services Hubsite</b></p>
        </div>
    </div>
     <div class="hero-body">
        <div class="container">
            <div class="field has-addons">
                <div class="control is-expanded has-icons-left">
                    <input type="text" class="input is-large" placeholder="What resources can we help you find today?" v-model="query">
                    <span class="icon is-left">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="control">
                    <a href="{{route('search')}}" class="button is-primary is-large" type="submit">Search</a>
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
                        <p class="is-size-3 has-text-weight-semibold has-text-light" style="line-height: 1;padding-bottom: 1.5rem"><em>Serving the state of Georgia's<br>
                        Behavioral Health / Prevention Workforce</em></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container is-medium">
        <div class="columns is-multiline">
            <div class="column is-half-tablet is-one-half-desktop has-text-centered">
                <a href="{{route('search')}}">
                    <article class="media">
                        <figure class="media-left" style="padding-right: 1rem">
                            <p class="image is-48x48">
                                @include('partials.svg.cogs')
                            </p>
                        </figure>
                        <div class="media-content">
                            <div style="padding-right: 1rem">
                                <h3 class="is-size-3"><a href="{{route('search')}}">Resources</a></h3>
                                <p class="is-size-5">GASPS has searched, developed and listed a comprehensive list of approved support resources. This includes Tools, Prospectus Literature Reviews, and webinars.</p>
                            </div>
                        </div>
                    </article>
                </a>
            </div>
            <div class="column is-half-tablet is-one-half-desktop has-text-centered">
                <a href="{{route('training')}}">
                    <article class="media">
                        <figure class="media-left" style="padding-right: 1rem">
                            <p class="image is-48x48">
                                @include('partials.svg.university')
                            </p>
                        </figure>
                        <div class="media-content">
                            <div style="padding-right: 1rem">
                                <h3 class="is-size-3"><a href="{{route('training')}}">Training Center</a></h3>
                                <p class="is-size-5">Locate and Register for local and national trainings from the Training Center page.</p>
                            </div>
                        </div>
                    </article>
                </a>
            </div>
            <div class="column is-half-tablet is-one-half-desktop has-text-centered">
                <a href="http://ecco.ga-sps.org/help.php" target="ecco">
                    <article class="media">
                        <figure class="media-left" style="padding-right: 1rem">
                            <p class="image is-48x48">
                                @include('partials.svg.medkit')
                            </p>
                        </figure>
                        <div class="media-content">
                            <div style="padding-right: 1rem">
                                <h3 class="is-size-3"><a href="http://ecco.ga-sps.org/help.php" target="ecco">Help / IP Reports</a></h5>
                                <p class="is-size-5">In need of Technical Assistance (TA)? Use the TA page to link to ECCO to submit a request for TA quickly and easily, no log in required</p>
                            </div>
                        </div>
                    </article>
                </a>
            </div>
            <div class="column is-half-tablet is-one-half-desktop has-text-centered">                <a href="{{route('calendar')}}">
                    <article class="media">
                        <figure class="media-left" style="padding-right: 1rem">
                            <p class="image is-48x48">
                                @include('partials.svg.calendar')
                            </p>
                        </figure>
                        <div class="media-content">
                            <div style="padding-right: 1rem">
                                <h3 class="is-size-3"><a href="{{route('calendar')}}">Calendar</a></h3>
                                <p class="is-size-5">What to keep up5with all that's going on? Take a look at the GASPS calendar. Where we list upcoming events, trainings and Major due dates for in the GASPS systems.</p>
                            </div>
                        </div>
                    </article>
                </a>
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
                        <li><strong>Goal 1:</strong> Reduce the early onset of alcohol use among 9-20 year olds</li>
                        <li><strong>Goal 2:</strong> Reduce access to alcohol and binge drinking among 9-20 year olds</li>
                        <li><strong>Goal 3:</strong> Reduce binge drinking and heavy drinking among 18-25 year olds</li>
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
                    <p><strong>Promotion</strong> involves interventions (e.g., programs, practices, or environmental strategies) that enable people “to increase control over, and to improve, their health.”10 As such, interventions that promote health occur independently as well as throughout the continuum of care as part of prevention, treatment, and maintenance/recovery.</p>
                    <p><strong>Prevention</strong> focuses on interventions that occur prior to the onset of a disorder and which are intended to prevent the occurrence of the disorder or reduce risk for the disorder.14 Prevention is also about striving to optimize well-being.</p>
                    <p><strong>Treatment</strong> interventions include case identification and standard forms of treatment (e.g., detoxification, outpatient treatment, in-patient treatment, medication-assisted treatment).</p>
                    <p><strong>Maintenance</strong> includes interventions that focus on compliance with long-term treatment to reduce relapse and recurrence and aftercare, including rehabilitation and recovery support.</p>
                    <p><strong>Recovery</strong> is a process of change through which individuals improve their health and wellness, live a self-directed life, and strive to reach their full potential.</p>
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
                        <li><b>Step 1.</b> Assess Needs</li>
                        <li><b>Step 2.</b> Build Capacity</li>
                        <li><b>Step 3.</b> Plan</li>
                        <li><b>Step 4.</b> Implement</li>
                        <li><b>Step 5.</b> Evaluation</li>
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
@endsection
