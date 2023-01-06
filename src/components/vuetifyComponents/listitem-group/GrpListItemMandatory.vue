<script>
export default {
  name: 'GrpListItemMandatory',

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
    model: 1,
  }),
}
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- GrpListItemMandatory -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      At least one item must be selected.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-list>
        <v-list-item v-model="model" mandatory color="info">
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
