<script setup lang="ts">
import BaseCard from '~/components/BaseCard.vue'
import ParallexBasic from '~/components/vuetifyComponents/parallex/ParallexBasic.vue'
import ParallexContent from '~/components/vuetifyComponents/parallex/ParallexContent.vue'
import ParallexCustomHeight from '~/components/vuetifyComponents/parallex/ParallexCustomHeight.vue'
import ReadyForMore from '~/components/ReadyForMore.vue'

const page = ref({ title: 'Parallex' })
const breadcrumbs = ref([
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Parallex',
    disabled: true,
    href: '#',
  },
])
</script>

<template>
  <v-container>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
    <!-- NOTE: Parallex effect is not working correctly. -->
    <!-- TODO: Report bug in vuetify repo -->
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Parallex - Basic">
          <ParallexBasic />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Parallex - With content">
          <ParallexContent />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Parallex - Custom height">
          <ParallexCustomHeight />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard>
          <ReadyForMore />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
