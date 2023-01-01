<script setup lang="ts">
import { ref } from 'vue'

const toggle = ref(null)
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Outlined -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    You can switch the button variant by using variant prop on v-btn-toggle.
  </p>
  <div class="d-flex align-center flex-column mt-6 bg-grey-lighten-4 pa-6">
    <v-btn-toggle v-model="toggle" color="primary" variant="outlined">
      <v-btn icon="i-mdi-format-align-left" />
      <v-btn icon="i-mdi-format-align-center" />
      <v-btn icon="i-mdi-format-align-right" />
      <v-btn icon="i-mdi-format-align-justify" />
    </v-btn-toggle>
  </div>
</template>
