<script setup lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { useDisplay } from 'vuetify'
import ContextMenu from './ContextMenu.vue'
import TaskStim from './TaskStim.vue'
import TaskBar from './TaskBar.vue'
// TODO: Add timelineview back to projcet
// import TimelineViewVue from "@/views/dashboards/dashboardComponents/analyticaldash/activity-timeline/TimelineView.vue";
import InputText from './InputText.vue'
import ScreenShotLandingPageVue from './microsites/screenshotLandingPage/ScreenShotLandingPage.vue'
import MinimalBlog from './microsites/minimalBlog/MinimalBlog.vue'
import VidHub from './microsites/vidHub/VidHub.vue'
import Chat from './apps/chat/Chat.vue'

const props = withDefaults(defineProps<Props>(), {
  itemName: 'item01',
  tabItems: () => [
    {
      label: 'Vid Hub',
      key: 'VidHub',
      icon: 'mdi:youtube',
    },
    {
      label: 'Webmail Inbox',
      key: 'WebmailInbox',
      icon: 'mdi:email',
    },
    {
      label: 'School Connect',
      key: 'SchoolConnect',
      icon: 'mdi:notebook',
    },
    {
      label: 'Everything you need to know about everything',
      key: 'Everything',
      icon: 'mdi:wikipedia',
    },
  ],
  // activeTab: "School Connect",
  // activeTab: null,
  url: 'test url',
})

export interface Props {
  itemName?: string
  activeTab?: string | null
  defaultTabLabel?: string
  tabItems?: Array<{ label: string; key: string; icon: string }>
  url?: string | null
}

const { name } = useDisplay()

// Conditional expression
const { mdAndUp, smAndDown } = useDisplay()

const testHeight = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs':
      return 220
    case 'sm':
      return 400
    case 'md':
      return 500
    case 'lg':
      return 600
    case 'xl':
      return 800
    case 'xxl':
      return 1200
  }
})

const tabItems = reactive(props.tabItems)

const addTab = () => {
  tabItems.push({
    label: 'New tab',
    key: `newTab_${tabItems.length + 1}`,
    icon: '',
  })
}

const text = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
)
</script>

<script lang="ts">
export default defineComponent({
  activeTab: null,
  components: {
    ScreenShotLandingPageVue,
    ContextMenu,
    TaskStim,
    TaskBar,
    InputEvent,
  },
})
</script>

<template>
  <v-hover v-slot="{ isHovering, props }" close-delay="25">
    <!-- Stimulus card -->
    <!-- class app-height or prop :height -->

    <v-card
      height="100%"
      :elevation="isHovering ? 3 : 1"
      class="overflow-hidden"
      v-bind="props"
    >
      <!-- App bar -->
      <v-toolbar height="55" density="compact" color="#2a3441">
        <!-- Browser tabs -->
        <v-tabs
          v-model="activeTab"
          background-color="#2a3441"
          density="compact"
          height="1"
          class="text-truncate text-white text-body-2 mt-2"
          next-icon="mdi:chevron-right"
          prev-icon="mdi:chevron-left"
          show-arrows
          @change="$emit('tab-change', activeTab)"
        >
          <v-tab
            v-for="(tab, index) in tabItems"
            :key="tab.key"
            :value="index"
            :prepend-icon="tab.icon"
            selected-class="active-tab"
            class="rounded-t-lg justify-space-between mr-3 text-truncate text-grey-darken-1"
            style="min-width: 50px; max-width: 150px"
            direction="horizontal"
          >
            <!-- Tab label -->
            <span
              class="text-truncate text-body-2 text-left pr-1"
              style="min-width: 50px; max-width: 100px"
            >
              {{ tab.label }}
            </span>

            <!-- Close tab button -->

            <v-btn
              flat
              class="tab-close"
              color="light"
              size="x-small"
              @click="addTab()"
            >
              <v-icon>mdi:close</v-icon>
            </v-btn>
          </v-tab>
        </v-tabs>
        <!-- New tab button -->
        <v-btn color="white" rounded="1" size="small" @click="addTab()">
          <v-icon>mdi:plus</v-icon>
        </v-btn>
        <!-- App window controls -->
        <v-spacer />
        <v-btn color="white" rounded="1" size="small">
          <v-icon color="white-darken-4">
            mdi:window-minimize
          </v-icon>
        </v-btn>

        <v-btn color="white" rounded="1" size="small">
          <v-icon color="white">
            mdi:window-close
          </v-icon>
        </v-btn>
      </v-toolbar>

      <!-- browser controls -->
      <v-toolbar
        height="65"
        color="#445469"
        density="compact"
        class="text-grey-lighten-5 align-center"
      >
        <v-btn color="white" rounded="1" size="x-small">
          <v-icon size="x-large" color="white">
            mdi:arrow-left
          </v-icon>
        </v-btn>
        <v-btn color="white" rounded="1" size="x-small">
          <v-icon size="x-large" color="white">
            mdi:arrow-right
          </v-icon>
        </v-btn>
        <v-btn color="white" rounded="1" size="x-small">
          <v-icon size="x-large" color="white">
            mdi:refresh
          </v-icon>
        </v-btn>
        <!-- URL bar -->
        <div class="flex-fill">
          <InputText placeholder="Search or type a URL" />
        </div>
        <v-spacer />
      </v-toolbar>

      <perfect-scrollbar class="scroll-area overflow-x-hidden">
        <!-- Browser viewport -->
        <v-window v-model="activeTab">
          <v-window-item :value="0">
            <v-card flat>
              <v-card-text>
                <ScreenShotLandingPageVue />
              </v-card-text>
            </v-card>
          </v-window-item>

          <v-window-item :value="1">
            <v-card flat>
              <v-card-text>
                <MinimalBlog />
              </v-card-text>
            </v-card>
          </v-window-item>

          <v-window-item :value="2">
            <v-card flat>
              <v-card-text>
                <VidHub />
              </v-card-text>
            </v-card>
          </v-window-item>

          <v-window-item :value="3">
            <v-card flat>
              <v-card-text>
                <Chat />
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </perfect-scrollbar>

      <!-- Taskbar -->
      <TaskBar />
    </v-card>
  </v-hover>
</template>

<style lang="scss" scoped>
.tab-close.v-btn.v-btn--density-default.v-btn--size-x-small {
  height: 18px;
  --v-btn-size: 0.625rem;
  --v-btn-height: 20px;
  font-size: 0.625rem;
  //min-width: 36px;
  min-width: 18px;
  padding: 0 0px;
}

.scroll-area {
  height: calc(100% - 140px);
}

.active-tab {
  background-color: #445469;
  color: rgb(244, 245, 250) !important;
}
</style>
