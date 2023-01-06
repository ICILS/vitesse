<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import { useTimer } from 'vue-timer-hook'

const timeLimit = ref(300)
const time = new Date()
const secondsNow = time.setSeconds(time.getSeconds() + timeLimit.value) // timeLimit timer
const timer = useTimer(secondsNow)
const restartFive = () => {
  // Restarts to 5 minutes timer
  const time2 = new Date()
  const secondsNow2 = time2.setSeconds(time2.getSeconds() + timeLimit.value)
  timer.restart(secondsNow2)
}

const remainingTime = () => {
  // Calculates remaining time from timer
  const secondsRemaining = timer.seconds.value
  const minutesRemaining = timer.minutes.value
  const hoursRemaining = timer.hours.value
  // Format time to use 00:00:00 format
  const seconds
    = secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining
  const minutes
    = minutesRemaining < 10 ? `0${minutesRemaining}` : minutesRemaining
  const hours = hoursRemaining < 10 ? `0${hoursRemaining}` : hoursRemaining
  const HHMMSS = `${hours}:${minutes}:${seconds}`
  const MMSS = `${minutes}:${seconds}`
  return { HHMMSS, MMSS }
}

const isRunning = timer.isRunning
const isExpired = timer.isExpired

const props = {
  timeLimit,
  timer,
  restartFive,
  remainingTime,
  isRunning,
  isExpired,
}

onMounted(() => {
  watchEffect(async () => {
    if (timer.isExpired.value)
      console.warn('IsExpired')
  })
})
</script>

<script lang="ts"></script>

<template>
  <div>
    <v-tooltip color="primary">
      <template #activator="{ props }">
        <v-chip
          class="my-0 text-truncate d-flex"
          color="warning"
          v-bind="props"
          @dblclick="restartFive()"
        >
          <v-icon left class="pr-1 mr-2">
            mdi:timer
          </v-icon>
          <v-list-item-title class="text-body-2 font-medium">
            <!-- Minutes:Seconds -->
            <span class="label-font-mono">{{ remainingTime().MMSS }} remaining</span>
          </v-list-item-title>
          <v-spacer />
          <!--
        Button to pause if timer is running, resume if timer is paused.
        -->
          <v-btn
            variant="text"
            icon
            color="warning"
            density="compact"
            @click="isRunning ? timer.pause() : timer.resume()"
          >
            <v-icon right :icon="isRunning ? 'mdi:pause' : 'mdi-play'" />
          </v-btn>
        </v-chip>
      </template>
      <span>Double click to reset the timer.</span>
    </v-tooltip>
  </div>
</template>

<style lang="scss" scoped>
$tooltip-background-color: white !important;
.icons-timer-rounded-24px {
  margin-right: 8px;
  width: 16px;
  height: 16px;
}

.label-font-mono {
  font-family: "Roboto Mono", monospace;
}

.timer-tooltip {
  background-color: white;
  color: yellow;
}
</style>

