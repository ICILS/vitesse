<script setup lang="ts">

</script>



<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12" lg="12">
        <BaseCard heading="Autocompletes - Searching an API">
          <AutocompletesSearchAPI />
        </BaseCard>

        <BaseCard heading="Autocompletes - Custom filter on autocomplete">
          <AutocompletesCustomFilter />
        </BaseCard>

        <BaseCard heading="Autocompletes - Dense">
          <AutocompletesDence />
        </BaseCard>

        <BaseCard heading="Autocompletes - Slots">
          <AutocompletesSlots />
        </BaseCard>

        <BaseCard heading="Autocompletes - Asynchronous items">
          <AutocompletesAsynchronousItems />
        </BaseCard>

        <BaseCard heading="Autocompletes - Advanced slots">
          <AutocompletesAdvancedSlots />
        </BaseCard>

        <BaseCard heading="Autocompletes - State selector">
          <AutocompletesStateSelector />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
