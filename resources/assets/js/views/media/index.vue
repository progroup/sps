<template>
    <div>
        <!-- <section class="hero is-primary is-bold" style="margin-bottom: 1rem; min-height: 250px; background-size: cover; background-image: url('/assets/images/banners/calendar.jpg')">
            <div class="hero-body">
                <div class="container">

                </div>
            </div>
        </section> -->
        <section classs="section" style="margin-top: 2rem">
            <div class="container">
                <div class="content">
                    <h1>Shared Media</h1>
                    <p>Providers can share media messaging with one another that they've created and have been approved by DBHDD</p>
                    <slick ref="slick" :options="slickOptions">
                        <a href="/assets/media/augusta-university_1.png">
                            <img src="/assets/media/augusta-university_1.png" alt="">
                        </a>
                        <a href="/assets/media/augusta-university_2.png">
                            <img src="/assets/media/augusta-university_2.png" alt="">
                        </a>
                        <a href="/assets/media/augusta-university_3.png">
                            <img src="/assets/media/augusta-university_3.png" alt="">
                        </a>
                        <a href="/assets/media/columbia-county_1.jpg">
                            <img src="/assets/media/columbia-county_1.jpg" alt="">
                        </a>
                        <a href="/assets/media/dawson-co-voices-billboard.pdf">
                            <img src="/assets/media/dawson-co-voices-billboard.png" alt="">
                        </a>
                        <a href="/assets/media/forsyth-tobacco-cards.png">
                            <img src="/assets/media/forsyth-tobacco-cards.png" alt="">
                        </a>
                        <a href="/assets/media/hall-co-gdbd-football.png">
                            <img src="/assets/media/hall-co-gdbd-football.png" alt="">
                        </a>
                        <a href="/assets/media/tcad_1.png">
                            <img src="/assets/media/tcad_1.png" alt="">
                        </a>
                    </slick>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
 import Slick from 'vue-slick'
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';

 export default {
    components: { Slick },
    data() {
            return {
                    slickOptions: {
                        //options can be used from the plugin documentation
                        slidesToShow: 4,
                        infinite: true,
                        accessibility: true,
                        adaptiveHeight: true,
                        // asNavFor: '',
                        centerMode: true,
                        arrows: true,
                        dots: true,
                        draggable: true,
                        edgeFriction: 0.30,
                        swipe: true
                    }
            }
    },
    // All slick methods can be used too, example here
    methods: {
            next() {
                    this.$refs.slick.next()
            },
            prev() {
                    this.$refs.slick.prev()
            },
            reInit() {
                    // Helpful if you have to deal with v-for to update dynamic lists
                    this.$refs.slick.reSlick()
            }
    }
 }
</script>
