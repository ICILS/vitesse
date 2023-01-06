<script setup lang="ts">
import { ref } from 'vue'
// import { faker } from "@faker-js/faker";
import { useI18n } from 'vue-i18n'
import BaseQuestionContentCard from '../../../../components/BaseQuestionContentCard.vue'
import BaseStimulusContentCard from '../../../../components/BaseStimulusContentCard.vue'
import Desktop from '../../../../components/apps/desktop/Desktop.vue'

const { t } = useI18n() // use as global scope
const task = ref({ title: t('LT.activity') })
// Item ID
const contentID = 'ModFloppyLargeTaskActivity'
const nextTask = 'intro'
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
            <v-card-text class="text-body-2 pb-1">
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
      <BaseStimulusContentCard :show-task-bar="false">
        <Desktop />
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
