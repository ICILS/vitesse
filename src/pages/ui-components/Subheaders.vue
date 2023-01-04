<script setup lang="ts">
import BaseBreadcrumb from '~/components/base/BaseBreadcrumb.vue'
import BaseCard from '~/components/base/BaseCard.vue'
import SubheadersInset from '~/components/vuetifyComponents/subheaders/SubheadersInset.vue'
import SubheadersGrid from '~/components/vuetifyComponents/subheaders/SubheadersGrid.vue'
import SubheadersMenu from '~/components/vuetifyComponents/subheaders/SubheadersMenu.vue'
import SubheadersSocialMedia from '~/components/vuetifyComponents/subheaders/SubheadersSocialMedia.vue'

const page = {
  title: 'Subheaders',
}

const breadcrumbs = [
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Subheaders',
    disabled: true,
    href: '#',
  },
]
</script>

<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Subheaders - Inset subheaders">
          <SubheadersInset />
        </BaseCard>

        <BaseCard heading="Subheaders - Grid subheaders">
          <SubheadersGrid />
        </BaseCard>

        <BaseCard heading="Subheaders - Menu subheaders">
          <SubheadersMenu />
        </BaseCard>

        <BaseCard heading="Subheaders - Subheaders with social media">
          <SubheadersSocialMedia />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
