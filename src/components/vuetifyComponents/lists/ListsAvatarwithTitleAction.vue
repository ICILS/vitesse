<script>
export default {
  name: 'ListsAvatarwithTitleAction',

  data: () => ({
    items: [
      {
        active: true,
        title: 'Jason Oner',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
      {
        active: true,
        title: 'Ranee Carlson',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      },
      {
        title: 'Cindy Baker',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      },
      {
        title: 'Ali Connors',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      },
    ],
    items2: [
      {
        title: 'Travis Howard',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      },
    ],
  }),
}
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- ListsAvatarwithTitleAction -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      Here we combine v-list-item and v-list-item-icon in a single-line
      list.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-toolbar color="primary" dark>
        <v-app-bar-nav-icon />

        <v-toolbar-title>New Chat</v-toolbar-title>

        <v-spacer />

        <v-btn icon>
          <v-icon>i-mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list subheader>
        <v-subheader>Recent chat</v-subheader>

        <v-list-item v-for="item in items" :key="item.title" @click.stop>
          <v-list-item>
            <v-img :src="item.avatar" />
          </v-list-item>

          <v-list-item>
            <v-list-item-title v-text="item.title" />
          </v-list-item>

          <v-list-item-icon>
            <v-icon :color="item.active ? 'info' : 'grey'">
              mdi-comment-text-outline
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list subheader>
        <v-subheader>Previous chats</v-subheader>

        <v-list-item v-for="item in items2" :key="item.title" @click.stop>
          <v-list-item>
            <v-img :src="item.avatar" />
          </v-list-item>

          <v-list-item>
            <v-list-item-title v-text="item.title" />
          </v-list-item>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
