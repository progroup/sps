<template>
  <div>
    <!-- <section class="hero is-primary is-bold" style="margin-bottom: 1rem; min-height: 250px; background-size: cover; background-image: url('/assets/images/banners/calendar.jpg')">
            <div class="hero-body">
                <div class="container">

                </div>
            </div>
        </section> -->
    <section
      classs="section"
      style="margin-top: 2rem;"
    >
      <div class="container">
        <div class="content">
          <h1>Shared Media</h1>
          <p>Providers can share media messaging with one another that they've created and have been approved by DBHDD</p>
          <slick
            ref="slick"
            :options="slickOptions"
          >
            <article
              class="media"
              v-for="(slide, index) in slides"
              :key="index"
            >
              <!-- <figure class="media-left" style="display: flex; outline: 1px solid green;">
                                <p class="image is-3by5" style="outline: 1px solid red;">
                                      <img :src="slide.img">
                                </p>
                            </figure> -->
              <div class="media-content">
                <figure class="image is-3by5">
                  <a :href="slidesPath + slide.img">
                    <img
                      :src="slidesPath + slide.img"
                      alt=""
                      style="padding: 1px;"
                    >
                  </a>
                </figure>
              </div>
            </article>
          </slick>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Slick from 'vue-slick'
  import 'slick-carousel/slick/slick.css'
  import 'slick-carousel/slick/slick-theme.css'

  export default {
    components: { Slick },
    data() {
      return {
        slickOptions: {
          // nextArrow: '<i class="fa fa-arrow-right"></i>',
          // prevArrow: '<i class="fa fa-arrow-left"></i>',
          // options can be used from the plugin documentation
          slidesToShow: 3,
          // slidesToScroll: 1,
          infinite: true,
          accessibility: true,
          adaptiveHeight: true,
          // asNavFor: '',
          // slide: '.slide',
          centerMode: true,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
          draggable: true,
          edgeFriction: 0.3,
          swipe: true,
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 768 - 1,
              settings: {
                arrows: true,
                swipeToSlide: true,
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 600 - 1,
              settings: {
                arrows: false,
                centerMode: true,
                dots: false,
                touchMove: true,
                swipeToSlide: true,
                slidesToShow: 1
              }
            }
          ]
        },
        slidesPath: '/assets/media/',
        slides: [
          { img: 'dont_always_square.png' },
          { img: 'parents_reason_spanish.png' },
          { img: 'stop_alcohol_under_21_back.jpg' },
          { img: 'stop_alcohol_under_21_front.jpg' },
          { img: 'alcohol_retailer_paper_bag_sample.jpg' },
          { img: 'we_check_id_sign.jpg' },
          { img: 'we_id_notice_sign.jpg' },
          { img: 'dude_did_you_know_no_logos.png' },
          { img: 'peers_dont_binge_drink.png' },
          { img: 'sometimes_it_ok.png' },
          { img: 'augusta-university_1.png' },
          { img: 'augusta-university_2.png' },
          { img: 'augusta_university_3.png' },
          { img: 'cling_logo.png' },
          { img: 'columbia_county_1.png' },
          { img: 'dawson_co_voices_billboard.png' },
          { img: 'forsyth_tobacco_cards.png' },
          { img: 'hall_co_gdbd_football.png' },
          { img: 'hearts.png' },
          { img: 'save_brains_thank_you_billboard.png' },
          { img: 'ssyp_billboard.png' },
          { img: 'tcad_1.png' },
          { img: 'we_check_id.png' }
        ]
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
