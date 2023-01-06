<script setup lang="ts">
import { useCustomizerStore } from '@/stores/customizer'

const customizer = useCustomizerStore()
useHead({
  title: 'ICILS 2077 prototype',
})

const classs = 'page-enter'
</script>

<template>
  <div>
    <v-app
      :theme="$colorMode.preference === 'dark' ? 'dark' : 'light' && customizer.darktheme ? 'dark' : 'light'"
      :class="[
        customizer.mini_sidebar ? 'mini-sidebar' : '',
        customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
      ]"
    >
      <LcFullCustomizer />
      <LcFullVerticalHeader v-if="!customizer.setHorizontalLayout" />
      <LcFullVerticalSidebar v-if="!customizer.setHorizontalLayout" />
      <v-main>
        <LcFullHorizontalHeader v-if="customizer.setHorizontalLayout" />
        <LcFullHorizontalSidebar v-if="customizer.setHorizontalLayout" />
        <v-container fluid class="page-wrapper">
          <div v-if="classs">
            <slot />
          </div>
          <v-btn
            class="customizer-btn"
            variant="tonal"
            icon="mdi:cog"
            size="large"
            @click.stop="
              customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)
            "
          />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss">
/*.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}*/
</style>
