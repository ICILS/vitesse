<script setup lang="ts">
import { ref } from 'vue'
import CardProjectAssign from './form-data/CardProjectAssign.vue'
import CardEmployeeProfile from './form-data/CardEmployeeProfile.vue'
import CardEmployeeTiming from './form-data/CardEmployeeTiming.vue'
import CardEventRegistration from './form-data/CardEventRegistration.vue'
import BaseCard from '~/components/BaseCard.vue'
import BaseBreadcrumb from '~/components/BaseBreadcrumb.vue'
const page = ref({ title: 'Form Horizontal' })
const breadcrumbs = ref([
  {
    text: 'Form Elements',
    disabled: false,
    href: '#',
  },
  {
    text: 'Form Horizontal',
    disabled: true,
    href: '#',
  },
])
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  />
  <v-row>
    <v-col cols="12">
      <CardProjectAssign />
      <CardEmployeeProfile />
      <CardEmployeeTiming />
      <CardEventRegistration />
    </v-col>
  </v-row>
</template>
