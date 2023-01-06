<script setup lang="ts">
import BaseBreadcrumb from '~/components/BaseBreadcrumb.vue'
import BaseCard from '~/components/BaseCard.vue'
import ListsDisabled from '~/components/vuetifyComponents/lists/ListsDisabled.vue'
// import ListsShaped from '~/components/vuetifyComponents/lists/ListsShaped.vue'
import ListsDensity from '~/components/vuetifyComponents/lists/ListsDensity.vue'
// import ListsFlat from '~/components/vuetifyComponents/lists/ListsFlat.vue'
// import ListsRounded from '~/components/vuetifyComponents/lists/ListsRounded.vue'
// import ListsAvatarTitleAction from '~/components/vuetifyComponents/lists/ListsAvatarTitleAction.vue'
// import ListsIcon2lineAction from '~/components/vuetifyComponents/lists/ListsIcon2lineAction.vue'
// import ListsAvatar3Lines from '~/components/vuetifyComponents/lists/ListsAvatar3Lines.vue'
// import ListsAvatarwithTitleAction from '~/components/vuetifyComponents/lists/ListsAvatarwithTitleAction.vue'
// import ListsNested from '~/components/vuetifyComponents/lists/ListsNested.vue'
// import ListsSubheadingsDividers from '~/components/vuetifyComponents/lists/ListsSubheadingsDividers.vue'
// import ListsImagewithToolbar from '~/components/vuetifyComponents/lists/ListsImagewithToolbar.vue'
// import ListsTitlewithSubtitleActiontext from '~/components/vuetifyComponents/lists/ListsTitlewithSubtitleActiontext.vue'
// import ListsActionwithTitleSubtitle from '~/components/vuetifyComponents/lists/ListsActionwithTitleSubtitle.vue'
// import ListsExpansion from '~/components/vuetifyComponents/lists/ListsExpansion.vue'
// import ListsNavigation from '~/components/vuetifyComponents/lists/ListsNavigation.vue'

const page = ref({ title: 'Lists', icon: 'mdi-format-list-bulleted' })
const breadcrumbs = ref([
  {
    text: 'Widgets',
    disabled: false,
    href: '#',
  },
  {
    text: 'Lists',
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
        <BaseCard heading="Lists - Disabled lists">
          <ListsDisabled />
        </BaseCard>

        <BaseCard heading="Lists - Density">
          <ListsDensity />
        </BaseCard>

        <!-- <BaseCard heading="Lists - Shaped lists">
          <ListsShaped />
        </BaseCard>

        <BaseCard heading="Lists - Flat">
          <ListsFlat />
        </BaseCard>

        <BaseCard heading="Lists - Rounded">
          <ListsRounded />
        </BaseCard>

        <BaseCard heading="Lists - Avatar with title and action">
          <ListsAvatarTitleAction />
        </BaseCard>

        <BaseCard heading="Lists - Icon with 2 lines and action">
          <ListsIcon2lineAction />
        </BaseCard>

        <BaseCard heading="Lists - Avatar with 3 lines">
          <ListsAvatar3Lines />
        </BaseCard>

        <BaseCard heading="Lists - Avatar with title and action">
          <ListsAvatarwithTitleAction />
        </BaseCard>

        <BaseCard heading="Lists - Nested lists">
          <ListsNested />
        </BaseCard>

        <BaseCard heading="Lists - Subheadings and dividers">
          <ListsSubheadingsDividers />
        </BaseCard>

        <BaseCard heading="Lists - Card image with toolbar and list">
          <ListsImagewithToolbar />
        </BaseCard>

        <BaseCard heading="Lists - Title with sub-title, actions and action-text">
          <ListsTitlewithSubtitleActiontext />
        </BaseCard>

        <BaseCard heading="Lists - Action with title and sub-title">
          <ListsActionwithTitleSubtitle />
        </BaseCard>

        <BaseCard heading="Lists - Expansion Lists">
          <ListsExpansion />
        </BaseCard>

        <BaseCard heading="Lists - Navigation lists">
          <ListsNavigation />
        </BaseCard> -->
      </v-col>
    </v-row>
  </v-container>
</template>
