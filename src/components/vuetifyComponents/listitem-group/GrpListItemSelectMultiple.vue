<script>
export default {
  name: 'GrpListItemSelectMultiple',

  data: () => ({
    items: [
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
    ],
    model: [1],
  }),
}
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- GrpListItemSelectMultiple -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      You can select multiple items at one time.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-list>
        <v-list-item v-model="model" multiple color="info">
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
