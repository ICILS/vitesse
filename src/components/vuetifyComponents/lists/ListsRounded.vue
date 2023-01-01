<script>
export default {
  name: 'ListsRounded',

  data: () => ({
    item: 1,
    items: [
      { text: 'Real-Time', icon: 'i-feather-mdi-clock' },
      { text: 'Audience', icon: 'i-feather-mdi-account' },
      { text: 'Conversions', icon: 'i-feather-mdi-flag' },
    ],
  }),
}
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- ListsRounded -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      You can make <code>v-list</code> items rounded.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-list rounded>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group v-model="item" color="primary">
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
