<template>
    <main>
        <section class="hero is-primary is-bold" style="min-height: 250px;background-size: cover; background-image: url('/assets/images/banners/calendar.jpg')">
            <div class="hero-body">
                <div class="container">

                </div>
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
                            <h1>Calendar</h1>

                            <p>From this page you can get updates on GASPS initiatives, learn about trainings and other events, and even register or access registration.</p>
                            <h2>Add your event</h2>
                            <p>You can add your ASAPP or GEN Rx public events here, i.e. Public Training, Health Fair, etc.<br> Please click the link, complete the form, and allow at least 4 business days for posting. Keep in mind this is only for ASAPP and GEN Rx public events. CPAW Meetings and other internal operations should not be posted.</p>
                            <p>
                                <a class="button is-info" href="https://creator.zoho.com/marc247/add-an-event-to-the-calendar-here-/form-perma/Add_an_event_to_the_calendar">Add an Event</a>
                            </p>
                            <h2>Events</h2>
                            <iframe style="width:100%;border-width:0;height:600px" src="https://www.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=6t13hfehsh49tpi9dp282jccrs%40group.calendar.google.com&amp;color=%23BE6D00&amp;ctz=America%2FNew_York" frameborder="0" scrolling="no"></iframe>
                            <!--
        http://www.spunmonkey.com/display-contents-google-calendar-php/
        https://developers.google.com/google-apps/calendar/
        -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script>
    import Sidebar from '@/components/Sidebar.vue'
    export default {
      components: { Sidebar }
    }
</script>
