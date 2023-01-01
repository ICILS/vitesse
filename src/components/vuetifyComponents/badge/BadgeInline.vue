<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Inline -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Inline badges can be placed anywhere with content and can render without a
      default slot.
    </p>
    <div class="mt-6">
      <v-list border class="mx-auto" max-width="256">
        <v-list-item link prepend-icon="i-mdi-inbox-arrow-down" title="Inbox">
          <template #append>
            <v-badge color="error" content="6" inline />
          </template>
        </v-list-item>

        <v-list-item
          link
          prepend-icon="i-mdi-send"
          title="Sent Mail"
        />

        <v-list-item link prepend-icon="i-mdi-delete" title="Trash">
          <template #append>
            <v-badge color="info" content="12" inline />
          </template>
        </v-list-item>

        <v-list-item
          link
          prepend-icon="i-mdi-alert-circle"
          title="Spam"
        />
      </v-list>
    </div>
  </div>
</template>
