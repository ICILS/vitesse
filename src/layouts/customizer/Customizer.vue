<script setup lang="ts">
import { ref } from 'vue'
import { useCustomizerStore } from '~/stores/customizer'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const customizer = useCustomizerStore()

function reloadPage() {
  if (customizer.setHorizontalLayout)
    window.location.reload()
}
const navbarColors = ref([
  '#f6f6f6',
  '#1e88e5',
  '#21c1d6',
  '#fc4b6c',
  '#563dea',
  '#ff9800',
])
const sidebarColors = ref([
  'white',
  '#212121',
  '#1e88e5',
  '#fc4b6c',
  '#563dea',
  '#ff9800',
])
</script>

<template>
  <v-navigation-drawer
    v-model="customizer.Customizer_drawer"
    app
    temporary
    elevation="10"
    location="right"
  >
    <div class="px-4 py-4">
      <h3>Customizer</h3>
    </div>
    <v-divider />

    <div v-if="!customizer.darktheme" class="px-4 py-4">
      <h4 class="mb-3">
        Topbar Colors
      </h4>

      <v-item-group v-model="customizer.navbarColor" mandatory>
        <v-item
          v-for="color in navbarColors"
          v-slot="{ isSelected, toggle }"
          :key="color"
          :value="color"
        >
          <v-avatar
            :class="isSelected && 'v-sidebar_active'"
            :color="color"
            class="v-settings__item mr-2 cursor-pointer"
            size="25"
            @click="toggle"
          />
        </v-item>
      </v-item-group>
    </div>
    <v-divider />
    <div v-if="!customizer.darktheme" class="px-4 py-4">
      <h4 class="mb-3">
        Sidebar Colors
      </h4>

      <v-item-group v-model="customizer.SidebarColor" mandatory>
        <v-item
          v-for="color in sidebarColors"
          v-slot="{ isSelected, toggle }"
          :key="color"
          :value="color"
        >
          <v-avatar
            :class="isSelected && 'v-sidebar_active'"
            :color="color"
            class="v-settings__item mr-2 cursor-pointer"
            size="25"
            @click="toggle"
          />
        </v-item>
      </v-item-group>
    </div>
    <v-divider />
    <div class="px-4 py-4">
      <h4>Horizontal Layout</h4>
      <div @click="reloadPage">
        <v-checkbox
          v-model="customizer.setHorizontalLayout"
          hide-details
          label="Horizontal"
        />
      </div>
      <br>
      <h4>Dark Mode</h4>

      <v-checkbox
        v-model="customizer.darktheme"
        hide-details
        label="Dark"
        @click="customizer.TOGGLE_DARK_THEME"
      />

      <br>
      <h4>Mini Sidebar</h4>
      <v-checkbox
        v-model="customizer.mini_sidebar"
        hide-details
        label="Mini"
      />
    </div>
    <v-divider />
    <TheFooter />
  </v-navigation-drawer>
</template>

<style lang="scss">
.v-application .v-item-group .v-avatar--density-default {
  border: 1px solid rgb(0, 0, 0, 0.1) !important;
}
.v-application .v-item-group .v-sidebar_active {
  border: 2px solid black !important;
}
</style>
