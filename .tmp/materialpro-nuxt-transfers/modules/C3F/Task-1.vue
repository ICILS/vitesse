<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseQuestionContentCard from '../../../components/BaseQuestionContentCard.vue'
import BaseStimulusContentCard from '../../../components/BaseStimulusContentCard.vue'
import WebBrowser from '../../../components/WebBrowser.vue'
import ItemMCQ from '@/components/itemComponents/itemMCQ/itemMCQ.vue'

const { t } = useI18n() // use as global scope
const task = ref({ title: t('sidenav.titles.task_1') })
// Item ID
const contentID = 'ModFloppyItemT1'
const nextTask = 'task-2'

// MCQ content
const supportContent
  = 'Look at the things on the screen and think about them carefully. Open the application with the funny name and do the thing.'
const stemContent
  = 'How many software developers does it take to change a light bulb?'
const optionsContent = [
  'All of them.',
  'It depends on how many flexboxes they have.',
  'None, it\'s a hardware problem.',
  '1111101000 1111101000 1111101000111 1101000111110 10001111101000 1111101000',
]
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
        <BaseQuestionContentCard :header-tile="task.title" :nav-next="nextTask">
          <v-card>
            <ItemMCQ
              :item-name="contentID"
              :support-content="supportContent"
              :stem-content="stemContent"
              :options-content="optionsContent"
            />
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
      <BaseStimulusContentCard active-task-bar="taskbarBrowser">
        <WebBrowser />
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
