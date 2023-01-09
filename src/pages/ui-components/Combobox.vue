<script setup lang="ts">


</script>



<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Combobox - Multiple combobox">
          <ComboboxMultiple />
        </BaseCard>

        <BaseCard heading="Combobox - Dense">
          <ComboboxDense />
        </BaseCard>

        <BaseCard heading="Combobox - No data with chips">
          <ComboboxNodatachips />
        </BaseCard>

        <BaseCard heading="Combobox - Advanced custom options">
          <ComboboxAdvancedOptions />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
