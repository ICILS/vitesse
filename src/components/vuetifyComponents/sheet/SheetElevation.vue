<script setup lang="ts">
const data = ref({
  elevations: [6, 12, 18],
})
</script>

<template>
  <v-container>
    <v-row justify="space-around">
      <v-col
        v-for="elevation in data.elevations"
        :key="elevation"
        cols="12"
        md="4"
      >
        <v-sheet
          class="pa-12"
          color="grey-lighten-3"
        >
          <v-sheet
            :elevation="elevation"
            class="mx-auto"
            height="100"
            width="100"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
