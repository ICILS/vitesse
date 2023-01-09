<script setup lang="ts">
const page = ref({ title: 'Skeleton Loaders' })
const breadcrumbs = ref([
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Skeleton Loaders',
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
        <BaseCard heading="SkeletonLoaders - Implementation methods">
          <SkeletonLoadersImplementationMethods />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
