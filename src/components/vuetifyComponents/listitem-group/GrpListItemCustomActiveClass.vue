<script>
export default {
  name: 'GrpListItemCustomActiveClass',

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
    model: 1,
  }),
}
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- GrpListItemCustomActiveClass -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      You can set a class which will be added when an item is selected.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-list>
        <v-list-item v-model="model" active-class="border" color="info">
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

<style scoped>
.border {
  border: 2px dashed orange;
}
</style>
