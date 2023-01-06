<script setup lang="ts">
defineProps({
  heading: String,
})
</script>

<template>
  <v-card
    elevation="0"
  >
    <v-toolbar color="transparent">
      <v-toolbar-title class="font-weight-medium">
        {{ heading }}
      </v-toolbar-title>

      <v-spacer />
    </v-toolbar>
    <v-divider />
    <div class="pa-5">
      <slot />
    </div>
  </v-card>
</template>
