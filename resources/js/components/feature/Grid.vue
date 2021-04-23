<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="hidden lg:text-center">
        <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase">Transactions</h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >A better way to send money</p>
        <p
          class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
        >Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"
              >
                <BaseIconOutlined name="collection" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Resources</p>
            </dt>
            <dd
              class="mt-2 ml-16 text-base text-gray-500"
            >GASPS has searched, developed and listed a comprehensive list of approved support resources. This includes Tools, Prospectus Literature Reviews, and webinars.</dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"
              >
                <BaseIconOutlined name="academic-cap" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Training Center</p>
            </dt>
            <dd
              class="mt-2 ml-16 text-base text-gray-500"
            >Locate and Register for local and national trainings from the Training Center page.</dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"
              >
                <BaseIconOutlined name="support" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Help / IP Reports</p>
            </dt>
            <dd
              class="mt-2 ml-16 text-base text-gray-500"
            >In need of Technical Assistance (TA)? Use the TA page to link to ECCO to submit a request for TA quickly and easily, no log in required</dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"
              >
                <BaseIconOutlined name="calendar" />
              </div>

              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Calendar</p>
            </dt>
            <dd
              class="mt-2 ml-16 text-base text-gray-500"
            >What to keep up with all that's going on? Take a look at the GASPS calendar. Where we list upcoming events, trainings and Major due dates for in the GASPS systems.</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
