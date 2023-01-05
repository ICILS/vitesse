<script setup lang="ts">
import SelectsDisabled from '~/components/vuetifyComponents/selects/SelectsDisabled.vue'
import SelectsReadonly from '~/components/vuetifyComponents/selects/SelectsReadonly.vue'
import SelectsLightTheme from '~/components/vuetifyComponents/selects/SelectsLightTheme.vue'
import SelectsIcons from '~/components/vuetifyComponents/selects/SelectsIcons.vue'
import SelectsMultiple from '~/components/vuetifyComponents/selects/SelectsMultiple.vue'
import SelectsDence from '~/components/vuetifyComponents/selects/SelectsDence.vue'
import SelectsCustomizedTextValue from '~/components/vuetifyComponents/selects/SelectsCustomizedTextValue.vue'
import SelectsCustomMenuprops from '~/components/vuetifyComponents/selects/SelectsCustomMenuprops.vue'
import SelectsPrependAppendSlots from '~/components/vuetifyComponents/selects/SelectsPrependAppendSlots.vue'
import SelectsSelectionAppearance from '~/components/vuetifyComponents/selects/SelectsSelectionAppearance.vue'

const page = ref({ title: 'Selects' })
const breadcrumbs = ref([
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Selects',
    disabled: true,
    href: '#',
  },
])
</script>

<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Selects - Disabled">
          <SelectsDisabled />
        </BaseCard>

        <BaseCard heading="Selects - Read-only">
          <SelectsReadonly />
        </BaseCard>

        <BaseCard heading="Selects - Light theme">
          <SelectsLightTheme />
        </BaseCard>

        <BaseCard heading="Selects - Icons">
          <SelectsIcons />
        </BaseCard>

        <BaseCard heading="Selects - Multiple">
          <SelectsMultiple />
        </BaseCard>

        <BaseCard heading="Selects - Dense">
          <SelectsDence />
        </BaseCard>

        <BaseCard heading="Selects - Customized item text and value">
          <SelectsCustomizedTextValue />
        </BaseCard>

        <BaseCard heading="Selects - Custom menu props">
          <SelectsCustomMenuprops />
        </BaseCard>

        <BaseCard heading="Selects - Prepend/Append item slots">
          <SelectsPrependAppendSlots />
        </BaseCard>

        <BaseCard heading="Selects - Change selection appearance">
          <SelectsSelectionAppearance />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
