<script setup lang="ts">
import { ref } from 'vue'
import CardProjectAssign from './form-data/CardProjectAssign.vue'
import CardEmployeeProfile from './form-data/CardEmployeeProfile.vue'
import CardDonation from './form-data/CardDonation.vue'
import CardComplaintForm from './form-data/CardComplaintForm.vue'
import CardEmployeeTiming from './form-data/CardEmployeeTiming.vue'
import CardIssueTracking from './form-data/CardIssueTracking.vue'
import CardEventRegistration from './form-data/CardEventRegistration.vue'
import BaseCard from '~/components/BaseCard.vue'
import BaseBreadcrumb from '~/components/BaseBreadcrumb.vue'
const page = ref({ title: 'Form Action' })
const breadcrumbs = ref([
  {
    text: 'Form Elements',
    disabled: false,
    href: '#',
  },
  {
    text: 'Autocompletes',
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
    <v-col cols="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Project Assign">
        <CardProjectAssign />
      </BaseCard>
    </v-col>
    <v-col cols="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Employee Profile">
        <CardEmployeeProfile />
      </BaseCard>
    </v-col>
    <v-col cols="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Donation Form">
        <CardDonation />
      </BaseCard>
    </v-col>
    <v-col cols="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Compaint Form">
        <CardComplaintForm />
      </BaseCard>
    </v-col>
    <v-col cols="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Employee Training">
        <CardEmployeeTiming />
      </BaseCard>
    </v-col>
    <v-col cols="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Card Issue Tracking">
        <CardIssueTracking />
      </BaseCard>
    </v-col>
    <v-col cols="12">
      <BaseCard heading="Event Registration">
        <CardEventRegistration />
      </BaseCard>
    </v-col>
  </v-row>
</template>
