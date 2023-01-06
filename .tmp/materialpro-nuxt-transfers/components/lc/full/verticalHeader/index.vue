<script setup lang="ts">
import { ref, watch } from 'vue'
import { message, notification, profile } from './data'
import { useCustomizerStore } from '@/stores/customizer'

const customizer = useCustomizerStore()

const showSearch = ref(false)
const href = ref(undefined)
const messages = ref(message)
const notifications = ref(notification)
const userprofile = ref(profile)
const priority = ref(customizer.setHorizontalLayout ? 0 : 0)
function searchbox() {
  showSearch.value = !showSearch.value
}
watch(priority, (newPriority) => {
  // yes, console.log() is a side effect
  priority.value = newPriority
})
</script>

<template>
  <v-app-bar
    :color="customizer.darktheme ? '' : customizer.navbarColor" elevation="5" :priority="priority"
    class="v-topbar" :class="[
      customizer.navbarColor === '#ffffff' ? '' : 'text-white',
    ]" density="compact"
  >
    <!-- ---------------------------------------------- -->
    <!--- Logo part -->
    <!-- ---------------------------------------------- -->
    <div class="pl-1 pa-4">
      <LcFullLogoDark v-if="!customizer.darktheme && customizer.navbarColor === '#ffffff'" />
      <LcFullLogoLight v-else />
    </div>
    <v-app-bar-nav-icon
      color="lighten-2" class="hidden-sm-and-down"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
    />
    <v-app-bar-nav-icon color="lighten-2" class="hidden-md-and-up" @click.stop="customizer.SET_SIDEBAR_DRAWER" />

    <v-spacer />
    <!-- ---------------------------------------------- -->
    <!--- ight part -->
    <!-- ---------------------------------------------- -->

    <div class="d-flex">
      <v-btn icon class="ms-3" color="lighten-2">
        <v-badge color="error" dot>
          <v-icon :icon="mdi:message" />
        </v-badge>

        <v-menu activator="parent" anchor="bottom end" origin="auto" max-width="300">
          <v-list class="pa-5" elevation="10" rounded="lg">
            <h4 class="d-flex">
              Messages
              <v-chip label small color="secondary" class="ml-auto">
                5 new
              </v-chip>
            </h4>

            <v-list-item
              v-for="(item, i) in messages" :key="i" class="my-2 pa-3" rounded="lg" :value="item"
              :title="item.title" :subtitle="item.desc" @click="href"
            >
              <template #prepend>
                <v-list-item-avatar start class="v-list-item-avatar--start">
                  <v-avatar size="50">
                    <v-img :src="`/images/users/${item.image}`" :alt="item.image" width="50" />
                  </v-avatar>
                </v-list-item-avatar>
              </template>
            </v-list-item>
            <v-btn flat color="primary" class="mt-4" variant="tonal" block>
              See all Messages
            </v-btn>
          </v-list>
        </v-menu>
      </v-btn>
      <!-- ---------------------------------------------- -->
      <!-- Notification -->
      <!-- ---------------------------------------------- -->
      <v-btn icon class="ms-3" color="lighten-2">
        <v-badge color="error" dot>
          <!-- Nuxt icon -->
          <Icon name="mdi:bell" />
        </v-badge>

        <v-menu activator="parent" max-width="300">
          <v-list class="pa-6" elevation="10" rounded="lg">
            <h4 class="d-flex">
              Notifications
              <v-chip class="ml-auto" label small color="error">
                5 new
              </v-chip>
            </h4>
            <v-list-item
              v-for="(item, i) in notifications" :key="i" class="mt-2 pa-3" :value="item" rounded="lg"
              :title="item.title" :subtitle="item.desc" @click="href"
            >
              <template #prepend>
                <v-list-item-avatar start>
                  <v-btn :color="item.color" icon variant="tonal" elevation="0">
                    <vue-feather :type="item.icon" size="18" />
                  </v-btn>
                </v-list-item-avatar>
              </template>
            </v-list-item>
            <v-btn block variant="elevated" color="secondary" class="mt-4 py-4">
              See all Notifications
            </v-btn>
          </v-list>
        </v-menu>
      </v-btn>
      <!-- ---------------------------------------------- -->
      <!-- Notification -->
      <!-- ---------------------------------------------- -->

      <!-- ---------------------------------------------- -->
      <!-- User Profile -->
      <!-- ---------------------------------------------- -->
      <v-btn icon class="ms-3">
        <v-avatar size="35">
          <img src="/images/users/user2.jpg" width="35" alt="Julia">
        </v-avatar>

        <v-menu activator="parent">
          <v-list class="pa-6" elevation="10" rounded="lg">
            <h4 class="font-weight-medium fs-18">
              User Profile
            </h4>
            <div class="my-4 d-flex align-center">
              <img src="/images/users/user2.jpg" alt="Julia" class="rounded-circle" width="90">
              <div class="ml-4">
                <h4 class="font-weight-medium fs-18">
                  Julia Roberts
                </h4>
                <span class="font-weight-light subtitle-2">Administrator</span>
                <div class="d-flex align-center">
                  <vue-feather type="mail" size="16" class="d-flex grey--text" />
                  <span class="font-weight-light ml-1 subtitle-2">info@flexy.com</span>
                </div>
              </div>
            </div>
            <v-list-item
              v-for="(item, index) in userprofile" :key="index" class="mb-2 pa-3" :value="index"
              :title="item.title" :subtitle="item.desc"
            >
              <template #prepend>
                <v-list-item-avatar start>
                  <v-btn :color="item.color" variant="tonal" icon elevation="0">
                    <vue-feather :type="item.icon" size="18" />
                  </v-btn>
                </v-list-item-avatar>
              </template>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </div>
  </v-app-bar>
</template>
