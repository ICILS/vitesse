<script setup lang="ts">
import { ref } from 'vue'
import sidebarItems from './sidebarItem'
import { useCustomizerStore } from '~/stores/customizer'

const customizer = useCustomizerStore()
const sidebarMenu = ref(sidebarItems)
</script>

<template>
  <v-navigation-drawer
    v-model="customizer.Sidebar_drawer" class="border-r" left
    :class="customizer.SidebarColor === 'white' ? 'on-surface-light' : 'on-surface-dark'"
    :color="customizer.darktheme ? 'on-surface-dark' : customizer.SidebarColor" rail-width="88" mobile-breakpoint="960"
    app :rail="customizer.mini_sidebar" :expand-on-hover="false"
  >
    <!-- ---------------------------------------------- -->
    <!--- Navigation 1 -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
      <v-list class="pa-4">
        <!-- ---------------------------------------------- -->
        <!--- Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item, i) in sidebarMenu" :key="item.title">
          <!-- ---------------------------------------------- -->
          <!--- Item Sub Header -->
          <!-- ---------------------------------------------- -->
          <v-list-subheader v-if="item.header">
            {{
              item.header
            }}
          </v-list-subheader>
          <!-- ---------------------------------------------- -->
          <!--- If Has Child -->
          <!-- ---------------------------------------------- -->
          <v-list-group v-else-if="item.children">
            <!-- ---------------------------------------------- -->
            <!--- Dropdown  -->
            <!-- ---------------------------------------------- -->
            <template #activator="{ props }">
              <v-list-item
                v-bind="props" :value="item.title" rounded="xl"
                class="mb-1 ml-2 text-no-wrap overflow-hidden"
              >
                <!--- Icon  -->
                <template #prepend>
                  <v-icon :icon="item.icon" class="feather-sm v-icon" />
                </template>
                <!--- Title  -->
                <v-list-item-title class="mr-auto text-no-wrap overflow-hidden" />
                {{ item.title }}
              </v-list-item>
            </template>
            <!-- ---------------------------------------------- -->
            <!--- Sub Item -->
            <!-- ---------------------------------------------- -->
            <v-list-item
              v-for="(subitem, i) in item.children" :key="i" :value="subitem.to" :to="subitem.to"
              rounded="xl" class="first-level-item mb-1 ml-2"
            >
              <template #prepend>
                <v-icon icon="i-feather-disc" class="feather-sm v-icon" />
              </template>
              <v-list-item-title />
              {{ subitem.title }}
            </v-list-item>
          </v-list-group>
          <!-- ---------------------------------------------- -->
          <!--- Single Item -->
          <!-- ---------------------------------------------- -->
          <v-list-item v-else :key="i" :to="item.to" rounded="xl" class="mb-1 ml-2">
            <template #prepend>
              <v-icon :icon="item.icon" class="feather-sm v-icon" />
            </template>
            <v-list-item-title class="overflow-hidden" />
            {{ item.title }}
          </v-list-item>
          <!-- ---------------------------------------------- -->
          <!--- End Single Item -->
          <!-- ---------------------------------------------- -->
        </template>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>

  <v-navigation-drawer
    v-model="customizer.Sidebar_drawer"
    :color="customizer.darktheme ? 'on-surface-dark' : customizer.SidebarColor" :border="0" class="rounded-e-xl"
    elevation="2" left :permanent="$vuetify.display.xlAndUp" rail-width="88" mobile-breakpoint="960" app
    expand-on-hover
  >
    <!-- ---------------------------------------------- -->
    <!--- Navigation 2 -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
      <v-list class="pa-4" nav rounded="xl">
        <!-- ---------------------------------------------- -->
        <!--- Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item, i) in sidebarMenu" :key="item.title">
          <!-- ---------------------------------------------- -->
          <!--- Item Sub Header -->
          <!-- ---------------------------------------------- -->
          <v-list-subheader v-if="item.header">
            {{
              item.header
            }}
          </v-list-subheader>
          <!-- ---------------------------------------------- -->
          <!--- If Has Child -->
          <!-- ---------------------------------------------- -->
          <v-list-group v-else-if="item.children">
            <!-- ---------------------------------------------- -->
            <!--- Dropdown  -->
            <!-- ---------------------------------------------- -->
            <template #activator="{ props }">
              <v-list-item
                v-bind="props" :value="item.title" rounded="xl"
                class="mb-1 ml-2 text-no-wrap overflow-hidden" active-color="on-surface-variant"
                active-class="bg-surface-variant"
              >
                <!--- Icon  -->
                <template #prepend>
                  <!-- <v-icon :icon="item.icon" class="feather-sm v-icon" /> -->
                </template>
                <!--- Title  -->
                <v-list-item-title class="mr-auto text-no-wrap overflow-hidden" />
                {{ item.title }}
              </v-list-item>
            </template>
            <!-- ---------------------------------------------- -->
            <!--- Sub Item -->
            <!-- ---------------------------------------------- -->
            <v-list-item
              v-for="(subitem, i) in item.children" :key="i" :value="subitem.to" :to="subitem.to"
              rounded="xl" class="first-level-item mb-1 ml-2" subgroup
            >
              <template #prepend>
                <!-- <v-icon icon="i-feather-disc" class="feather-sm v-icon" /> -->
              </template>
              <v-list-item-title />
              {{ subitem.title }}
            </v-list-item>
          </v-list-group>
          <!-- ---------------------------------------------- -->
          <!--- Single Item -->
          <!-- ---------------------------------------------- -->
          <v-list-item v-else :key="i" :to="item.to" rounded="xl" class="mb-1 ml-2">
            <template #prepend>
              <!-- <v-icon :icon="item.icon" class="feather-sm v-icon" /> -->
            </template>
            <v-list-item-title class="overflow-hidden" />
            {{ item.title }}
          </v-list-item>
          <!-- ---------------------------------------------- -->
          <!--- End Single Item -->
          <!-- ---------------------------------------------- -->
        </template>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>

</style>
