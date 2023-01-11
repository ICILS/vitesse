<script setup lang="ts">
import { RouterView } from 'vue-router'
import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue'
import VerticalHeaderVue from './vertical-header/VerticalHeader.vue'
import Customizer from './customizer/Customizer.vue'
import HorizontalHeader from './horizontal-header/HorizontalHeader.vue'
import HorizontalSidebar from './horizontal-sidebar/HorizontalSidebar.vue'
import { useCustomizerStore } from '~/stores/customizer'
const customizer = useCustomizerStore()
</script>

<template>
  <v-app
    id="inspire"
    :theme="customizer.darktheme ? 'dark' : 'light'"
    :class="[
      customizer.mini_sidebar ? 'mini-sidebar' : '',
      customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
    ]"
  >
    <Customizer />
    <v-system-bar>
      <v-spacer />

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer
      absolute
      color="grey-lighten-3"
      rail
    >
      <v-avatar
        class="d-block text-center mx-auto mt-4"
        color="grey-darken-1"
        size="36"
      />

      <v-divider class="mx-3 my-5" />

      <v-avatar
        v-for="n in 6"
        :key="n"
        class="d-block text-center mx-auto mb-9"
        color="grey-lighten-1"
        size="28"
      />
    </v-navigation-drawer>

    <!-- <v-navigation-drawer
      width="244"
    >
      <v-sheet
        color="grey-lighten-5"
        height="128"
        width="100%"
      />

      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          :title="`Item ${n}`"
          link
        />
      </v-list>
    </v-navigation-drawer> -->

    <VerticalSidebarVue v-if="!customizer.setHorizontalLayout" />

    <v-app-bar
      class="px-3"
      color="grey-lighten-4"
      flat
      height="72"
    >
      <v-spacer />

      <v-responsive max-width="156">
        <v-text-field
          bg-color="grey-lighten-2"
          class="rounded-pill overflow-hidden"
          density="compact"
          hide-details
          variant="solo"
        />
      </v-responsive>
    </v-app-bar>

    <v-main>
      <v-container fluid class="page-wrapper">
        <RouterView />

        <CustomizerButton />
      </v-container>
    </v-main>

    <v-navigation-drawer location="right">
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          :title="`Item ${n}`"
          link
        />
      </v-list>
    </v-navigation-drawer>

    <v-footer
      app
      height="72"
    >
      <v-text-field
        bg-color="grey-lighten-1"
        class="rounded-pill overflow-hidden"
        density="compact"
        hide-details
        variant="solo"
      />
    </v-footer>
  </v-app>
</template>
