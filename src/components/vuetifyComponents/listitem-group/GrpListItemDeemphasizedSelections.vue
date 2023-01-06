<script setup lang="ts">
const items = ref([
  {
    icon: 'mdi-wifi',
    text: 'Wifi',
  },
  {
    icon: 'mdi-bluetooth',
    text: 'Bluetooth',
  },
  {
    icon: 'mdi-chart-donut',
    text: 'Data Usage',
  },
])

const model = ref(1)
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- GrpListItemDeemphasizedSelections -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      You can easily disable the default highlighting of selected <code>v-list-item</code>s. This creates a lower profile for a user's choices.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-list flat>
        <v-list-item v-model="model" color="info">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item>
              <v-icon :icon="item.icon" />
            </v-list-item>

            <v-list-item>
              <v-list-item-title :icon="item.text" />
            </v-list-item>
          </v-list-item>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
