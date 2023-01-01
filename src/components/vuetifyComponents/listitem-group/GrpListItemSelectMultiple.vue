<script>
export default {
  name: 'GrpListItemSelectMultiple',

  data: () => ({
    items: [
      {
        icon: 'i-feather-mdi-wifi',
        text: 'Wifi',
      },
      {
        icon: 'i-feather-mdi-bluetooth',
        text: 'Bluetooth',
      },
      {
        icon: 'i-feather-mdi-chart-donut',
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
        <v-list-item-group v-model="model" multiple color="info">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>
