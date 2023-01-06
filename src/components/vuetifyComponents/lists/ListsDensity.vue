<script setup lang="ts">
const items = ref([
  { text: 'Real-Time', icon: 'mdi-clock' },
  { text: 'Audience', icon: 'mdi-account' },
  { text: 'Conversions', icon: 'mdi-flag' },
])
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- ListsDence -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      <code>v-list</code> can be lowered with <code>dense</code> property.
    </v-list-item-subtitle>
    <v-card
      class="mx-auto"
      max-width="300"
    >
      <v-list density="compact">
        <v-list-subheader>REPORTS</v-list-subheader>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
        >
          <template #prepend>
            <v-icon :icon="item.icon" />
          </template>

          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
