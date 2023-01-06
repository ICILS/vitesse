<script setup lang="ts">
import { ref, watch } from 'vue'
import sidebarItems from './sidebarItem'
import { useCustomizerStore } from '@/stores/customizer'

const customizer = useCustomizerStore()
const sidebarMenu = ref(sidebarItems)

const items = [
  // If complete is true, appendIcon will be 'mdi:check-circle'
  { header: 'SMALL TASKS' },
  {
    title: 'Introduction',
    value: 1,
    props: {
      to: '/modules/C3F/intro',
      prependIcon: 'mdi:file-document',
      appendIcon: 'mdi:check-circle',
      isComplete: ref(false),
      translationKey: 'introduction',
    },
  },
  {
    title: 'Task 1',
    value: 2,
    props: {
      to: '/modules/C3F/task-1',
      prependIcon: 'mdi:checkbox-blank-outline',
      appendIcon: 'mdi:check-circle',
      isComplete: ref(false),
      translationKey: 'task-1',
    },
  },
  {
    title: 'Task 2',
    value: 3,
    props: {
      to: '/modules/C3F/task-2',
      prependIcon: 'mdi:checkbox-blank-outline',
      appendIcon: 'mdi:check-circle',
      isComplete: ref(false),
      translationKey: 'task-2',
    },
  },
  {
    title: 'Task 3',
    value: 4,
    props: {
      to: '/modules/C3F/task-3',
      prependIcon: 'mdi:checkbox-blank-outline',
      appendIcon: 'mdi:check-circle',
      isComplete: ref(false),
      translationKey: 'task-3',
    },
  },
  {
    title: 'Task 4',
    value: 5,
    props: {
      to: '/modules/C3F/task-4',
      prependIcon: 'mdi:checkbox-blank-outline',
      appendIcon: 'mdi:check-circle',
      isComplete: ref(false),
      translationKey: 'task-4',
    },
  },
  {
    title: 'Task 5',
    value: 6,
    props: {
      to: '/modules/C3F/task-5',
      prependIcon: 'mdi:checkbox-blank-outline',
      appendIcon: 'mdi:check-circle',
      isComplete: ref(false),
      translationKey: 'task-5',
    },
  },
  { header: 'LARGE TASK' },
  {
    group: '/modules/C3F/large-task/',
    model: false,
    title: 'Large task',
    value: 7,
    children: [
      {
        title: 'Task details',
        value: 1,
        props: {
          to: 'task-details',
          prependIcon: 'document',
          appendIcon: 'mdi:clipboard-text',
          isComplete: ref(false),
          translationKey: 'task-details',
        },
      },
      {
        title: 'Demo video',
        value: 2,
        props: {
          to: 'demo-video',
          prependIcon: 'mdi:youtube',
          appendIcon: 'mdi:youtube',
          isComplete: ref(false),
          translationKey: 'demo-video',
        },
      },
      {
        title: 'Task',
        value: 3,
        props: {
          to: 'task',
          prependIcon: 'mdi:application-edit',
          appendIcon: 'mdi:check-circle',
          isComplete: ref(false),
          translationKey: 'task',
        },
      },
    ],
  },
]

const sidebarMenuLargeTask = items?.at(6)?.children
const openStateLargeTask = items?.at(6)
</script>

<template>
  <v-navigation-drawer
    v-model="customizer.Sidebar_drawer" left :permanent="$vuetify.display.mdAndUp" elevation="10"
    :class="customizer.SidebarColor === 'white' ? '' : 'text-white'"
    :color="$colorMode.preference === 'dark' ? 'dark' : 'light' && customizer.darktheme ? '' : customizer.SidebarColor"
    rail-width="75" mobile-breakpoint="960" app :rail="customizer.mini_sidebar" expand-on-hover
  >
    <!-- ---------------------------------------------- -->
    <!--- Navigation -->
    <!-- ---------------------------------------------- -->
    <PerfectScrollbar class="scrollnavbar">
      <div class="profile">
        <div class="profile-pic">
          <v-avatar size="45">
            <img src="/images/users/user2.jpg" width="50" alt="Julia">
          </v-avatar>
        </div>
        <div class="font-extrabold bg-dark-900 bg-opacity-60 p-2 text-light-100 #profile-name">
          <h5>Floppy disks vs hard drives</h5>
        </div>
      </div>

      <vList class="p-3" bg-color="transparent">
        <!-- ---------------------------------------------- -->
        <!--- Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item, i) in sidebarMenu" :key="item.title">
          <!-- ---------------------------------------------- -->
          <!--- Item Sub Header -->
          <!-- ---------------------------------------------- -->
          <v-list-subheader v-if="item.header" class="uppercase subheader">
            {{ $t(`sidenav.headers.${item.translationKey}`) }}
          </v-list-subheader>
          <!-- ---------------------------------------------- -->
          <!--- If Has Child -->
          <!-- ---------------------------------------------- -->
          <v-list-group v-else-if="item.children" class="">
            <!-- ---------------------------------------------- -->
            <!--- Dropdown  -->
            <!-- ---------------------------------------------- -->
            <template #activator="{ props }">
              <v-list-item v-bind="props" :value="item.title" rounded="lg" class="mb-1">
                <!--- Icon  -->
                <v-list-item-avatar start class="ico-color">
                  <vue-feather :type="item.icon" class="feather-sm" />
                </v-list-item-avatar>
                <!--- Title  -->
                <v-list-item-title class="mr-auto" />
                {{ item.title }}
              </v-list-item>
            </template>
            <!-- ---------------------------------------------- -->
            <!--- Sub Item -->
            <!-- ---------------------------------------------- -->
            <v-list-item
              v-for="(subitem, i) in item.children" :key="i" :value="subitem.to" :to="subitem.to"
              rounded="lg" class="mb-1 first-level-item"
            >
              <v-list-item-avatar start class="ico-color">
                <vue-feather type="disc" class="feather-sm" />
              </v-list-item-avatar>
              <v-list-item-title />
              {{ subitem.title }}
            </v-list-item>
          </v-list-group>
          <!-- ---------------------------------------------- -->
          <!--- Single Item -->
          <!-- ---------------------------------------------- -->
          <v-list-item
            v-else :key="i" :to="item.to" :value="item.value" rounded="lg" class="mb-1 ico-color"
            :prepend-icon="item.icon" :title="$t(`sidenav.titles.${item.translationKey}`)"
          />
          <!-- ---------------------------------------------- -->
          <!--- End Single Item -->
          <!-- ---------------------------------------------- -->
        </template>
      </vList>

      <!-- ---------------------------------------------- -->
      <!--- Custom list -->
      <!-- ---------------------------------------------- -->
      <v-divider />
      <v-list-subheader>TEST PAGES</v-list-subheader>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi:folder" title="My Files" value="myfiles" />
        <v-list-item prepend-icon="mdi:account-multiple" title="Shared with me" value="shared" />
        <v-list-item prepend-icon="mdi:star" title="Starred" value="starred" />
      </v-list>
      <!-- ---------------------------------------------- -->
      <!--- End custom list -->
      <!-- ---------------------------------------------- -->

      <!-- ---------------------------------------------- -->
      <!--- Props list -->
      <!-- ---------------------------------------------- -->
      <v-divider />
      <v-list nav density="compact">
        <v-list-subheader>SMALL TASKS</v-list-subheader>

        <v-list-item v-for="(item, i) in items" :key="i" :value="item.value" rounded="lg">
          <template #prepend>
            <v-icon :icon="item.props?.prependIcon ? item.props.prependIcon : `mdi:help`" />
          </template>

          <v-list-item-title />
          {{ item.title }}
        </v-list-item>
      </v-list>

      <v-divider />

      <!-- Large task group -->
      <v-list v-model:opened="sidebarMenuLargeTask" nav density="compact">
        <v-list-group value="largeTask">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="LARGE TASK" density="compact" />
          </template>

          <v-list-item
            v-for="(item, i) in sidebarMenuLargeTask" :key="i" :value="item.value" :title="item.title"
            rounded="lg"
          >
            <template #prepend>
              <v-icon :icon="item.props?.prependIcon ? item.props.prependIcon : `mdi:help`" />
            </template>
          </v-list-item>
        </v-list-group>
      </v-list>
      <!-- ---------------------------------------------- -->
      <!--- End props list -->
      <!-- ---------------------------------------------- -->
    </PerfectScrollbar>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.profile {
  background: url('/images/background/C3F-cover-sm.png') no-repeat;
  background-size: cover;

  .profile-pic {
    padding: 30px 15px;
  }
}

.profile-name {
  background: rgba(0, 0, 0, 0.5);

  h5 {
    padding: 10px;
    color: white;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

.subheader {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.54);
  margin: 1rem 0 0.5rem 0;
  letter-spacing: -0.03rem;
}
</style>
