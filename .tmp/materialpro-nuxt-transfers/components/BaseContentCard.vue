<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const props = withDefaults(defineProps<Props>(), {
  header: true,
  headerTile: 'Default heading',
  headerHelp: true,
  headerBookmark: true,
  actionBar: true,
  actionBarGoBack: true,
  actionBarContinue: true,
})

// import VuesticModal from "./modals/VuesticModal.vue";

export interface Props {
  header?: boolean
  headerTile?: string
  headerHelp?: boolean
  headerBookmark?: boolean
  actionBar?: boolean
  actionBarGoBack?: boolean
  actionBarContinue?: boolean
  navNext?: string
}

const bookmarkToggle = ref(false)
const { t } = useI18n() // use as global scope
</script>

<template>
  <v-hover v-slot="{ isHovering, props }" close-delay="0" open-delay="0">
    <!-- Item card -->
    <v-card :elevation="isHovering ? 2 : 1" v-bind="props" class="justify-space-between v-card">
      <!-- Card header -->
      <v-toolbar
        v-if="header === true" density="compact" flat
        class="border-b rounded-t-lg" color="surface-darken-1"
      >
        <!-- Title -->
        <v-toolbar-title class="dark:text-white">
          <h3 v-if="headerTile !== ''" class="text-h6 dark:text-gray-300">
            {{ headerTile }}
          </h3>
        </v-toolbar-title>
        <v-spacer />
        <!-- Header actions -->
        <!-- Bookmark -->
        <v-btn
          v-if="headerBookmark === true" class="mr-1 ql-hidden" density="compact" icon variant="outlined"
          color="surface-variant" @click="bookmarkToggle = !bookmarkToggle"
        >
          <v-icon
            size="x-small" :icon="
              bookmarkToggle ? 'mdi:bookmark-check' : 'mdi-bookmark-outline'
            "
          />
        </v-btn>
        <!--
        <vuestic-modal />
        -->
      </v-toolbar>
      <!-- Content slot -->
      <perfect-scrollbar class="scroll-area">
        <div class="pt-1">
          <slot />
        </div>
      </perfect-scrollbar>
      <v-bottom-navigation
        v-if="actionBar === true" absolute elevation="1" class="mx-0"
        style="width: 100%; opacity 1; height: 50px;" bg-color="surface darken-4"
      >
        <v-row class="align-center justify-space-between">
          <!-- Backward nav button -->
          <div class="text-left ml-3 accentpx-2">
            <v-btn v-if="actionBarGoBack === true" color="primary" @click="$router.back()">
              <span class="text-none">
                <v-icon> mdi:chevron-left </v-icon> {{ t("button_labels.go_back") }}
              </span>
            </v-btn>
          </div>

          <!-- Forward nav button -->
          <div class="text-right mr-1 px-2">
            <v-btn
              v-if="actionBarContinue === true" color="primary" variant="text"
              @click="$router.push(`/modules/C3F/${navNext}`)"
            >
              <span class="text-none">{{ t("button_labels.continue") }} <v-icon> mdi:chevron-right </v-icon></span>
            </v-btn>
          </div>
        </v-row>
      </v-bottom-navigation>
    </v-card>
  </v-hover>
</template>

<style lang="scss" scoped>
.scroll-area {
  height: calc(100% - 90px);
}

.v-card {
  border-radius: 12px;
  height: calc(100vh - 90px);
  width: 100%;
}
</style>
