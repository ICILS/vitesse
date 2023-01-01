<script>
export default {
  name: 'Inputs',
  components: {
    InputLoading: () => import('~/components/vuetifyComponents/inputs/InputLoading'),
    InputHint: () => import('~/components/vuetifyComponents/inputs/InputHint'),
    InputSuccess: () => import('~/components/vuetifyComponents/inputs/InputSuccess'),
    InputError: () => import('~/components/vuetifyComponents/inputs/InputError'),
    InputMultipleErrors: () => import('~/components/vuetifyComponents/inputs/InputMultipleErrors'),
    InputRules: () => import('~/components/vuetifyComponents/inputs/InputRules'),
    InputSlots: () => import('~/components/vuetifyComponents/inputs/InputSlots'),
    InputSlotEvents: () => import('~/components/vuetifyComponents/inputs/InputSlotEvents'),
  },

  data: () => ({
  }),
}
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
