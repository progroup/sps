<script>
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '~/logics'
// import TypeScriptIcon from '~/assets/svg/typescript.svg'
import { Icon } from '@iconify/vue'
import sun from '@iconify-icons/carbon/sun'
import moon from '@iconify-icons/carbon/moon'
import language from '@iconify-icons/carbon/language'
import overlay from '@iconify-icons/carbon/overlay'

export default {
  components: {
    Icon,
  },
  setup() {
    const { t, availableLocales, locale } = useI18n()
    const toggleLocales = () => {
      // change to some real logic
      const locales = availableLocales
      locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
    }
    return {
      t, availableLocales, locale, toggleLocales, isDark, toggleDark
    }
  },
  data() {
    return {
      icons: {
        moon, sun, language, overlay
      },
    }
  }
}

</script>

<template>
  <nav class="flex mt-6 text-xl">
    <!-- <TypeScriptIcon class="w-5 h-5" /> -->
    <button class="mx-2 icon-btn" :title="t('button.toggle_dark')" @click="toggleDark">
      <Icon :icon="icons.moon" v-if="isDark" />
      <Icon :icon="icons.sun" v-else />
    </button>

    <button class="mx-2 icon-btn" :title="t('button.toggle_langs')" @click="toggleLocales">
      <Icon :icon="icons.language" />
    </button>

    <RouterLink class="mx-2 icon-btn" to="/about" :title="t('button.about')">
      <Icon :icon="icons.overlay" />
    </RouterLink>
  </nav>
</template>
