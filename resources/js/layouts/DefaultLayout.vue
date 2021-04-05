<script>
import AppNavbar from '~/components/app/Navbar'
import AppFooter from '~/components/app/Footer'
import TheFooter from '~/components/layout/TheFooter'

export default {
  name: 'DefaultLayout',
  components: {
    AppNavbar,
    AppFooter,
    TheFooter
  }
}
</script>

<template>
  <div class="flex flex-col w-full min-h-screen">
    <AppNavbar />

    <main class="flex-1 w-full">
      <slot />
    </main>
    <AppFooter />
    <TheFooter />
  </div>
</template>
