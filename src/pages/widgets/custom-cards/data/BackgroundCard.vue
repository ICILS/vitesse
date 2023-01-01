<script setup lang="ts">
import { ref } from 'vue'

const cards = ref([
  {
    color: 'bg-secondary',
    icon: 'i-feather-grid',
    title: '460',
    subtitle: 'New Products',
  },
  {
    color: 'bg-error',
    icon: 'i-feather-archive',
    title: '50',
    subtitle: 'Pending Apps',
  },
  {
    color: 'bg-primary',
    icon: 'i-feather-users',
    title: '80',
    subtitle: 'Customers',
  },
  {
    color: 'bg-success',
    icon: 'i-feather-gift',
    title: '15',
    subtitle: 'Birthday Gifts',
  },
  {
    color: 'bg-warning',
    icon: 'i-feather-credit-card',
    title: '1800',
    subtitle: 'Total Budgets',
  },
  {
    color: 'bg-blue',
    icon: 'i-feather-github',
    title: '90',
    subtitle: 'Best Designers',
  },
])
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Background Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-row>
    <v-col v-for="(item, i) in cards" :key="i" cols="12" lg="2">
      <v-card :class="item.color">
        <v-card-text class="pa-6">
          <vue-feather :type="item.icon" class="text-white" />
          <h5 class="text-h5 mt-2 text-white">
            {{ item.title }}
          </h5>
          <span class="text-white">{{
            item.subtitle
          }}</span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
