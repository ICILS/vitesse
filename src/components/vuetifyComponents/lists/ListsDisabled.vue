<script setup lang="ts">
const items = ref([
  { text: 'Real-Time', icon: 'mdi-clock' },
  { text: 'Audience', icon: 'mdi-account' },
  { text: 'Conversions', icon: 'mdi-flag' },
])
</script>

<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-list disabled>
      <v-list-subheader>REPORTS</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <template #prepend>
          <v-icon :icon="item.icon" />
        </template>

        <v-list-item-title>
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
