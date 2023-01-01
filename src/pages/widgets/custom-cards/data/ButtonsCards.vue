<script setup lang="ts">
import { ref } from 'vue'

const cards = ref([
  {
    color: 'secondary',
    icon: 'i-feather-grid',
    title: '460',
    subtitle: 'New Products',
  },
  {
    color: 'error',
    icon: 'i-feather-archive',
    title: '50',
    subtitle: 'Pending Apps',
  },
  {
    color: 'primary',
    icon: 'i-feather-users',
    title: '80',
    subtitle: 'Customers',
  },
  {
    color: 'success',
    icon: 'i-feather-gift',
    title: '15',
    subtitle: 'Birthday Gifts',
  },
  {
    color: 'warning',
    icon: 'i-feather-credit-card',
    title: '1800',
    subtitle: 'Total Budgets',
  },
  {
    color: 'blue',
    icon: 'i-feather-github',
    title: '90',
    subtitle: 'Best Designers',
  },
])
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Blog Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-row>
    <v-col v-for="(item, i) in cards" :key="i" cols="12" lg="4">
      <v-card>
        <v-card-text class="pa-6">
          <h5 class="text-h6 title">
            Special title treatment
          </h5>
          <p class="text-grey-darken-1 text-subtitle-1 mt-3">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <v-btn class="mt-4 text-white" :color="item.color">
            Go Somewhere
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
