<script setup lang="ts">
import { ref } from 'vue'
// import { faker } from "@faker-js/faker";
import { useI18n } from 'vue-i18n'
import BaseQuestionContentCard from '../../../components/BaseQuestionContentCard.vue'
import BaseStimulusContentCard from '../../../components/BaseStimulusContentCard.vue'
import Spreadsheets from '../../../components/apps/spreadsheets/Spreadsheets.vue'

const { t } = useI18n() // use as global scope
const task = ref({ title: t('task_3') })
// Item ID
const contentID = 'ModFloppyItemT3'
const nextTask = 'task-4'

// Use faker to generate random paragraphs
// const faker = require("faker/locale/en");
// const lorem = faker.lorem.paragraphs(2);
</script>

<template>
  <v-row dense>
    <!-- sm and lg are the break points which define the number of columns for a small viewport
     -->
    <v-col
      cols="12"
      sm="12"
      md="4"
      lg="4"
      xl="4"
      :class="$vuetify.display.mdAndUp ? 'col1-horizontal' : 'col1-vertical'"
    >
      <div class="pa-0">
        <!-- Item content card  -->
        <BaseQuestionContentCard :task-heading="task.title" :nav-next="nextTask">
          <v-card>
            <v-card-text class="pb-1 text-body-2">
              PLACEHOLDER
              <div v-for="n in 4" :key="n" class="mb-4">
                lorem
              </div>
            </v-card-text>
          </v-card>
        </BaseQuestionContentCard>
      </div>
    </v-col>
    <v-col
      cols="12"
      sm="12"
      md="8"
      lg="8"
      xl="8"
      :class="$vuetify.display.mdAndUp ? 'col2-horizontal' : 'col2-vertical'"
    >
      <BaseStimulusContentCard
        active-task-bar="taskbarBrowser"
        :nav-next="nextTask"
      >
        <Spreadsheets />
      </BaseStimulusContentCard>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
// $col1-vertical-max-height: 350px;

// Task instructions
.col1-horizontal {
  max-height: calc(100vh - 35px);
}

.col1-vertical {
  min-height: 250px;
  max-height: 350px;
}

// Stimulus
.col2-horizontal {
  max-height: calc(100vh - 35px);
}

.col2-vertical {
  height: calc(100vh - 350px - 20px);
}
</style>
