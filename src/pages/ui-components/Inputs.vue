<script setup lang="ts">
// Rely on auto-imports for components
// import InputLoading from '~/components/vuetifyComponents/inputs/InputLoading.vue'
// import InputHint from '~/components/vuetifyComponents/inputs/InputHint.vue'
// import InputSuccess from '~/components/vuetifyComponents/inputs/InputSuccess.vue'
// import InputError from '~/components/vuetifyComponents/inputs/InputError.vue'
// import InputMultipleErrors from '~/components/vuetifyComponents/inputs/InputMultipleErrors.vue'
// import InputRules from '~/components/vuetifyComponents/inputs/InputRules.vue'
// import InputSlots from '~/components/vuetifyComponents/inputs/InputSlots.vue'
// import InputSlotEvents from '~/components/vuetifyComponents/inputs/InputSlotEvents.vue'
</script>


<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Inputs - Loading">
          <InputLoading />
        </BaseCard>

        <BaseCard heading="Inputs - Hint">
          <InputHint />
        </BaseCard>

        <BaseCard heading="Inputs - Success">
          <InputSuccess />
        </BaseCard>

        <BaseCard heading="Inputs - Error">
          <InputError />
        </BaseCard>

        <BaseCard heading="Inputs - Multiple errors">
          <InputMultipleErrors />
        </BaseCard>

        <BaseCard heading="Inputs - Rules">
          <InputRules />
        </BaseCard>

        <BaseCard heading="Inputs - Slots">
          <InputSlots />
        </BaseCard>

        <BaseCard heading="Inputs - Slot events">
          <InputSlotEvents />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
