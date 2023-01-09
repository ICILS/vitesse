<script setup lang="ts">
const page = {
  title: 'Bottomsheet',
  icon: 'mdi-format-list-bulleted',
}

const breadcrumbs = [
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Bottomsheet',
    disabled: true,
    href: '#',
  },
]

</script>



<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Bottomsheet - Persistent">
          <BottomsheetPersistent />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Bottomsheet - v-model control">
          <BottomsheetVmodelControl />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Bottomsheet - Music Player">
          <BottomsheetMusicplayer />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Bottomsheet - Open in list">
          <BottomsheetOpenList />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Bottomsheet - Inset">
          <BottomsheetInset />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
