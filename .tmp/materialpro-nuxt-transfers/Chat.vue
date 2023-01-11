<script setup lang="ts">
import { computed, ref } from 'vue'
import userslist from './userslist'
import BaseLeftRightPartVue from '@/components/baseComponents/BaseLeftRightPart.vue'

const handleSearchInput = ref('')
const allUsers = ref(userslist)
const isActive = ref(false)
const conversation = ref()

// Methods

function openMessages(con: any) {
  conversation.value = con
}

function addMessage(e: any) {
  if (e.key === 'Enter' && e.target.value) {
    const value = {
      text: e.target.value,
      fromMe: true,
    }
    Object.assign(conversation.value, {
      messages: [...conversation.value.messages, value],
    })
    e.target.value = ''
    console.log(conversation.value.messages)
  }
}

// Computed Property
const filteredList = computed(() => {
  return allUsers.value.filter((user: any) => {
    return user.name
      .toLowerCase()
      .includes(handleSearchInput.value.toLowerCase())
  })
})
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12">
      <v-card>
        <!---/Main Box chat list -->
        <BaseLeftRightPartVue>
          <!---/Left chat list -->
          <template #leftpart>
            <div class="border-bottom pa-5">
              <v-text-field
                v-model="handleSearchInput"
                label="Search contact"
                variant="outlined"
                density="compact"
                hide-details
              />
            </div>
            <v-list>
              <!---/chat list -->
              <v-list-item
                v-for="(conversation, i) in filteredList"
                :key="i"
                class="mb-2"
                :class="isActive ? 'active' : 's'"
                :value="conversation"
                two-line
                @click="() => openMessages(conversation)"
              >
                <!---/Icon -->
                <template #prepend>
                  <v-list-item-avatar start class="v-list-item-avatar--start">
                    <v-avatar size="45">
                      <v-img
                        :src="`/src/assets/images/users/${conversation.image}`"
                        :alt="conversation.image"
                        width="45"
                      />
                    </v-avatar>
                  </v-list-item-avatar>
                </template>
                <!---/Icon -->
                <v-list-item-header>
                  <!---/Title -->
                  <v-list-item-title class="font-weight-medium">
                    {{ conversation.name }}
                  </v-list-item-title>
                  <!---/Subtitle -->
                  <v-list-item-subtitle class="text-truncate d-block">
                    {{ conversation.lastMessage }}
                  </v-list-item-subtitle>
                  <!---/Title -->
                </v-list-item-header>
              </v-list-item>
            </v-list>
          </template>
          <!---/Right chat list -->
          <template #rightpart>
            <template v-if="conversation">
              <!---conversation header -->
              <div class="d-flex align-center pa-4">
                <v-avatar size="45" class="mr-3">
                  <img
                    :src="`/src/assets/images/users/${conversation.image}`"
                    width="45"
                  >
                </v-avatar>
                <div class="user-about">
                  <h4>{{ conversation.name }}</h4>
                </div>
              </div>
              <v-divider />
              <!---conversation Room -->
              <div class="chat-room pa-4">
                <perfect-scrollbar class="chat-room-box-height">
                  <div
                    v-for="message in conversation.messages"
                    :key="message.id"
                    class="mb-4 d-flex align-center messageItem"
                    light
                    :class="{ fromMe: message.fromMe }"
                  >
                    <div class="thumb">
                      <v-avatar v-if="message.fromMe" size="35" class="mx-2">
                        <img
                          src="@/assets/images/users/6.jpg"
                          width="35"
                          alt="..."
                        >
                      </v-avatar>
                      <v-avatar v-else size="35" class="mx-2">
                        <img
                          :src="`/src/assets/images/users/${conversation.image}`"
                          alt="..."
                          width="35"
                        >
                      </v-avatar>
                    </div>
                    <v-chip :color="message.fromMe ? 'primary' : ''">
                      {{ message.text }}
                    </v-chip>
                  </div>
                </perfect-scrollbar>
              </div>

              <!---Send Message Footer -->
              <div class="pa-4">
                <v-textarea
                  name="input-4-1"
                  rows="2"
                  variant="outlined"
                  hide-details
                  no-resize
                  label="Type and hit Enter"
                  @keydown="addMessage"
                />
              </div>
            </template>
            <template v-else>
              <div class="h-100 d-flex justify-center align-center">
                <h4>Start conversation</h4>
              </div>
            </template>
          </template>
        </BaseLeftRightPartVue>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.fromMe {
  flex-direction: row-reverse;
}
.chat-room-box-height {
  height: calc(100vh - 440px);
}
</style>
