<script setup lang="ts">
const overlay = ref(false)

watch(overlay, (val) => {
  if (val) {
    setTimeout(() => {
      overlay.value = false
    }, 3000)
  }
})
</script>

<template>
  <div class="text-center">
    <v-btn color="deep-purple-accent-4" @click="overlay = !overlay">
      Launch Application
      <v-icon end>
        mdi-open-in-new
      </v-icon>
    </v-btn>

    <v-overlay :model-value="overlay" class="align-center justify-center">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary"
      />
    </v-overlay>
  </div>
</template>
