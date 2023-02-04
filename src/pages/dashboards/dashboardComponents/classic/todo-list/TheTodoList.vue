<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
defineProps<{
  modelValue?: boolean
}>()
</script>

<script lang="ts">
export default {
  name: 'TheTodoList',
  data: () => ({
    tasks: [
      {
        done: false,
        text: 'Schedule meeting with',
        assigntoperson: 'display-block',
        tagbtns: [
          {
            userimg: '1.jpg',
            username: 'Steave',
          },
          {
            userimg: '2.jpg',
            username: 'Jessica',
          },
        ],
        badgedisplay: 'display-none',
        badgebg: '',
        badgetext: '',
      },
      {
        done: false,
        text: 'Give Purchase report to',
        badgedisplay: 'display-block',
        badgebg: 'error',
        badgetext: 'Today',
        assigntoperson: 'display-block',
        tagbtns: [
          {
            userimg: '4.jpg',
            username: 'John',
          },
        ],
      },
      {
        done: false,
        text: 'Book flight for holiday',
        badgedisplay: 'display-none',
        assigntoperson: 'display-none',
        date: 'display-block',
        datetext: '26 jun 2017',
      },
      {
        done: false,
        text: 'Forward all tasks',
        badgedisplay: 'display-block',
        badgebg: 'warning',
        badgetext: '2 Weeks',
        assigntoperson: 'display-none',
        date: 'display-block',
        datetext: '26 jun 2017',
      },
      {
        done: false,
        text: 'Send payment today',
        badgedisplay: 'display-none',
        assigntoperson: 'display-block',
        tagbtns: [
          {
            userimg: '1.jpg',
            username: 'Steave',
          },
          {
            userimg: '2.jpg',
            username: 'Jessica',
          },
        ],
        date: 'display-none',
      },
    ],
    task: null,
  }),
  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.done).length
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks
    },
  },
  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task,
      })

      this.task = null
    },
  },
}

const avatarPath = computed(() => {
  return '/src/assets/images/users/'
})
</script>

<template>
  <v-card flat class="mb-7">
    <v-card-text class="pa-5">
      <div class="d-sm-flex align-center">
        <div>
          <h2 class="title text-h6 font-weight-medium">
            To do List
          </h2>
          <h5 class="subtitle">
            Task to complete
          </h5>
        </div>
        <v-spacer />
        <div class="ml-auto">
          <v-chip color="secondary">
            <span class="mr-2">Total Tasks:</span>
            <v-fade-transition leave-absolute>
              <span :key="`tasks-${tasks.length}`">{{ tasks.length }}</span>
            </v-fade-transition>
          </v-chip>
        </div>
      </div>
    </v-card-text>
    <div class="px-5">
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="task" variant="outlined" label="Add new tasks from here" @keydown.enter="create">
            <template #append>
              <v-fade-transition>
                <i v-if="task" class="ti-plus" @click="create" />
              </v-fade-transition>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="pb-4">
        <strong class="mx-4 info--text font-weight-medium">Remaining: {{ remainingTasks }}</strong>

        <v-divider vertical />

        <strong class="mx-4 success--text font-weight-medium">Completed: {{ completedTasks }}</strong>

        <v-spacer />

        <v-progress-circular :model-value="progress" color="primary" class="mx-2" />
      </v-row>
    </div>

    <v-card-text class="pa-0">
      <PerfectScrollbar style="height: 425px">
        <div v-for="(task, i) in tasks" :key="`${i}-${task.text}`">
          <v-list-item class="d-block">
            <div class="d-flex align-center w-100">
              <v-list-item-action class="d-flex align-center w-100">
                <v-checkbox v-model="task.done" :color="task.done ? 'success' : ''" :label="task.text" hide-details />
                <span class="mx-2">{{ task.datetext }}</span>
                <v-chip v-if="task.badgebg" size="x-small" class="ml-auto" :color="task.badgebg">
                  {{ task.badgetext }}
                </v-chip>
              </v-list-item-action>

              <v-spacer />

              <v-scroll-x-transition>
                <v-icon v-if="task.done" color="success">
                  mdi-check
                </v-icon>
              </v-scroll-x-transition>
            </div>

            <div :class="[task.assigntoperson]">
              <div class="assignedto d-flex ml-7 mb-3 pl-2">
                <div v-for="tagbtn in task.tagbtns" :key="tagbtn.tagbtntitle" class="mr-2" :tagbtn="tagbtn">
                  <v-chip color="primary">
                    <v-avatar>
                      <v-img
                        :src="avatarPath + tagbtn.userimg" class="mr-2"
                      />
                    </v-avatar>
                    {{ tagbtn.username }}
                  </v-chip>
                </div>
              </div>
            </div>
          </v-list-item>
          <v-divider />
        </div>
      </PerfectScrollbar>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.display-none {
  display: none;
}

.display-block {
  display: block;
}
</style>
