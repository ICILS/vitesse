<script setup lang="ts">
import { ref } from 'vue'
import BaseBreadcrumb from '~/components/BaseBreadcrumb.vue'
import BaseCard from '~/components/BaseCard.vue'
import InputLoading from '~/components/vuetifyComponents/inputs/InputLoading.vue'
import InputHint from '~/components/vuetifyComponents/inputs/InputHint.vue'
import InputSuccess from '~/components/vuetifyComponents/inputs/InputSuccess.vue'
import InputError from '~/components/vuetifyComponents/inputs/InputError.vue'
import InputMultipleErrors from '~/components/vuetifyComponents/inputs/InputMultipleErrors.vue'
import InputRules from '~/components/vuetifyComponents/inputs/InputRules.vue'
import InputSlots from '~/components/vuetifyComponents/inputs/InputSlots.vue'
import InputSlotEvents from '~/components/vuetifyComponents/inputs/InputSlotEvents.vue'

const page = ref({ title: 'Inputs' })
const breadcrumbs = ref([
  {
    text: 'Form Elements',
    disabled: false,
    to: '#',
  },
  {
    text: 'Inputs',
    disabled: true,
  },
])
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  />
  <v-row>
    <v-col cols="12" sm="12">
      <BaseCard heading="Inputs - Loading">
        <InputLoading />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Inputs - Hint">
        <InputHint />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Inputs - Success">
        <InputSuccess />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Inputs - Error">
        <InputError />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Inputs - Multiple errors">
        <InputMultipleErrors />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Inputs - Rules">
        <InputRules />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Inputs - Slots">
        <InputSlots />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Inputs - Slot events">
        <InputSlotEvents />
      </BaseCard>
    </v-col>
  </v-row>
</template>
