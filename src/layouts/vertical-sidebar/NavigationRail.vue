<script setup lang="ts">
import { ref } from 'vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import sidebarItems from './sidebarItem'
import { useCustomizerStore } from '~/stores/customizer'

const customizer = useCustomizerStore()
const sidebarMenu = ref(sidebarItems)
</script>

<template>
  <v-navigation-drawer
    v-model="customizer.Sidebar_drawer" class="border-r" location="left"
    :class="customizer.SidebarColor === 'white' ? 'on-surface-light' : 'on-surface-dark'"
    :color="customizer.darktheme ? 'on-surface-dark' : customizer.SidebarColor" :rail="customizer.mini_sidebar"
    :expand-on-hover="false" rail-width="88" mobile-breakpoint="960" permanent order="0"
  >
    <!-- ---------------------------------------------- -->
    <!--- Navigation Rail with icon and header as title -->
    <!-- ---------------------------------------------- -->
    <PerfectScrollbar class="scrollnavbar">
      <v-list class="pa-4">
        <!-- ---------------------------------------------- -->
        <!--- Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item) in sidebarMenu" :key="item.header">
          <!-- ---------------------------------------------- -->
          <!--- If Has Child -->
          <!-- ---------------------------------------------- -->
          <v-list-group v-if="item.children">
            <!-- ---------------------------------------------- -->
            <!--- Dropdown  -->
            <!-- ---------------------------------------------- -->
            <template #activator="{ props }">
              <v-list-item
                v-bind="props" :title="item.header" :subtitle="item.header" :prepend-icon="item.icon"
                :value="item.header" rounded="xl" class="mb-1 ml-2"
              >
                <!--- Icon  -->
                <!-- <template #prepend>
                  <v-icon :icon="item.icon" class="feather-sm v-icon" />
                </template> -->
                <!--- Title  -->
                <!--  <v-list-item-title class="mr-auto text-no-wrap " />
                {{ item.header }} -->
              </v-list-item>
            </template>
          </v-list-group>
        </template>
      </v-list>
    </PerfectScrollbar>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.v-navigation-drawer {
  -webkit-overflow-scrolling: touch;
  background: rgb(var(--v-theme-surface));
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  pointer-events: auto;
  transition-duration: 0.2s;
  transition-property: box-shadow, transform, visibility, width, height, left, right, top, bottom;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  position: absolute;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  background: rgb(var(--v-theme-surface));
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}

.v-navigation-drawer--border {
  border-width: thin;
  box-shadow: none;
}

.v-navigation-drawer--rounded {
  border-radius: 16px !important;
}

.v-navigation-drawer--bottom {
  left: 0;
  border-top-width: thin;
}

.v-navigation-drawer--left {
  top: 0;
  left: 0;
  right: auto;
  border-right-width: thin;
}

.v-navigation-drawer--right {
  top: 0;
  left: auto;
  right: 0;
  border-left-width: thin;
}

.v-navigation-drawer--floating {
  border: none;
}

.v-navigation-drawer--temporary {
  box-shadow: 0px 8px 10px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 16px 24px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 6px 30px 5px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}

.v-navigation-drawer--sticky {
  height: auto;
  transition: box-shadow, transform, visibility, width, height, left, right;
}

.v-navigation-drawer .v-list {
  overflow: hidden;
}

.v-navigation-drawer__content {
  flex: 0 1 auto;
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.v-navigation-drawer__img {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}

.v-navigation-drawer__img img {
  height: inherit;
  object-fit: cover;
  width: inherit;
}

.v-navigation-drawer__scrim {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.2;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}
</style>
