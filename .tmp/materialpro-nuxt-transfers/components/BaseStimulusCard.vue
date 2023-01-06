<script setup lang="ts">
import TaskBar from './TaskBar.vue'

const props = withDefaults(defineProps<Props>(), {
  showTaskBar: true,
  activeTaskBar: '',
})

// TODO: Add defaults for activeTaskBar props and make it possible to add buttons to the task bar.

export interface Props {
  showTaskBar?: boolean
  activeTaskBar?: string
}
</script>

<template>
  <v-hover v-slot="{ isHovering, props }" close-delay="25">
    <!-- Stimulus card -->
    <v-card
      :elevation="isHovering ? 3 : 1"
      v-bind="props"
      class="pa-0 v-card"
    >
      <slot />

      <!-- Taskbar -->

      <TaskBar v-if="showTaskBar" :value="activeTaskBar" />
    </v-card>
  </v-hover>
</template>

<style scoped>
.v-card {
  border-radius: 12px;
  height: calc(100vh - 90px);
  width: 100%;
}
</style>
