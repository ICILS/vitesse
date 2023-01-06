<script setup lang="ts">
// TODO: Make the buttons configrable as props
// import "v-calendar/dist/style.css";
import { ref } from 'vue'
import moment from 'moment'
import { useCustomizerStore } from '@/stores/customizer'

const props = withDefaults(defineProps<Props>(), {
  value: 'browser',
})
export interface Props {
  value?: string
}
// import { Icon } from "@iconify/vue";

const calDate = ref(new Date().toDateString())
const timezone = ref('')
const customizer = useCustomizerStore()
const range = ref({
  start: new Date(2020, 0, 1),
  end: new Date(2020, 0, 5),
})

// moment
const time = ref(moment().format('h:mm a'))
const dateNow = ref(moment().format('MMMM Do YYYY'))
const day = ref(moment().format('dddd, D MMMM'))
// const calDate = ref(moment().format("YYYY/MM/DD"));
setInterval(() => {
  time.value = moment().format('h:mm a')
}, 10000)
</script>

<template>
  <v-bottom-navigation
    v-model="value"
    absolute
    elevation="1"
    color="white"
    class="mx-0 bg-blue-darken-4 dark justify-between"
    style="width: 100%; opacity 1; height: 50px;"
  >
    <v-row class="align-center justify-space-between">
      <!-- Weather widget -->
      <v-hover v-slot="{ isHovering, props }">
        <div class="ml-10">
          <Icon
            v-bind="props"
            :icon="isHovering ? 'emojione:sun-with-face' : 'emojione:sun'"
            width="24"
            height="24"
          />
        </div>
      </v-hover>
      <v-chip-group>
        <!-- Taskbar buttons -->
        <v-btn :active="value === 'taskbarStart'">
          <v-icon>mdi:microsoft-windows</v-icon>
        </v-btn>

        <v-btn :active="value === 'taskbarSearch'">
          <v-icon>mdi:magnify</v-icon>
        </v-btn>

        <v-btn :active="value === 'taskbarBrowser'">
          <v-icon>mdi:web</v-icon>
        </v-btn>
        <v-btn :active="value === 'taskbarDesignEditor'">
          <v-icon>mdi:draw</v-icon>
        </v-btn>
      </v-chip-group>
      <!-- System tray -->
      <div class="text-right px-2 mr-5">
        <v-menu
          origin="auto"
          top
          right
          nudge-left="100"
          max-width="300"
          :close-on-content-click="false"
        >
          <!-- TODO: Fix disappearing taskbar when start button is clicked -->
          <template #activator="{ props }">
            <div>
              <span v-bind="props" style="cursor: pointer">
                {{ time }}<br>{{ dateNow }}
              </span>
            </div>
          </template>
          <v-card>
            <v-card-title class="h4 pa-6 pb-0">
              {{ day }}
            </v-card-title>
            <v-card-text>
              <v-date-picker
                v-model="calDate"
                :is-dark="$colorMode.preference === 'dark' ? 'dark' : 'light' && customizer.darktheme ? 'dark' : 'light'"
                is-expanded
              />
            </v-card-text>
          </v-card>
        </v-menu>
      </div>
    </v-row>
  </v-bottom-navigation>
</template>

<style lang="scss" scoped>
.task-bar {
  height: 40px;
  background: linear-gradient(
      0deg,
      rgba(44, 44, 44, 0.15),
      rgba(44, 44, 44, 0.15)
    ),
    rgba(44, 44, 44, 0.96);
  //background: linear-gradient(0deg, rgba(0, 70, 141, 0.15), rgba(0, 70, 141, 0.15)), rgba(0, 70, 141, 0.96);
  background-blend-mode: normal, color, luminosity;
  backdrop-filter: blur(60px);
}
</style>
