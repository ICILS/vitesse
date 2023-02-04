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
    :color="customizer.darktheme ? 'on-surface-dark' : customizer.SidebarColor" :rail="true"
    :expand-on-hover="false" rail-width="90" permanent order="0"
  >
    <!-- ---------------------------------------------- -->
    <!--- Navigation Rail with icon and header as title -->
    <!-- ---------------------------------------------- -->
    <PerfectScrollbar class="scrollnavbar">
      <v-list class="py-4 pl-1 pr-1 ">
        <!-- ---------------------------------------------- -->
        <!--- Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item) in sidebarMenu" :key="item">
          <!-- ---------------------------------------------- -->
          <!--- If Has Child -->
          <!-- ---------------------------------------------- -->
          <v-list-group v-if="item.children">
            <!-- ---------------------------------------------- -->
            <!--- Dropdown  -->
            <!-- ---------------------------------------------- -->
            <template #activator="{ props }">
              <!--- Icon with Subtitle below the icon -->
              <!-- Navigates to the first child item `to` property -->
              <VListItem
                v-bind="props"
                :active="item.children[0].to ? $route.path === item.children[0].to : false"
                :value="item.children[0].to"
                :to="item.children[0].to"
                :prepend-icon="item.icon"
                prepend-icon-class="v-list-item--active"
                class="mb-0 pb-1 mx-4 px-0 justify-items-center rounded-xl"
                active-class="v-list-item--active"
                active-color="primary"

                :style="{ 'background-color': $route.path === item.children[0].to ? 'rgb(var(--v-theme-primary-container))' : 'inherit' }"
              />

              <v-list-item-subtitle class="text-center text-xs mx-0 px-0 mt-0 pt-0 mb-2">
                {{ item.header }}
              </v-list-item-subtitle>
            </template>
          </v-list-group>
        </template>
      </v-list>
    </PerfectScrollbar>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
/* .v-list-item-subtitle-under-icon {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    opacity: var(--v-medium-emphasis-opacity);
    overflow: visible;
    padding: 0;
    text-overflow: clip;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    line-height: 1rem;
    text-transform: none;
} */
.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__content {
  background-color: transparent;
}
.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__content .v-list-item__title {
  color: #5c6ac4;
}

.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__content .v-list-item__subtitle {
  color: #5c6ac4;
}

.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__content .v-list-item__icon {
  color: #5c6ac4;
}

.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__content .v-list-item__action {
  color: #5c6ac4;
}

.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__content .v-list-item__action .v-icon {
  color: #5c6ac4;
}
</style>
