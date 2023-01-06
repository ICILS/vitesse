<script lang="ts">
export default {
  name: 'ContextMenu',
  data: () => ({
    showMenu: false,
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
}
</script>

<template>
  <v-menu
    v-model="showMenu"
    absolute
    name="ContextMenu"
    offset-y
    style="min-width: 100px"
    touch-position
    context-menu
    auto-close
    :no-refocus="false"
    :no-focus="true"
    transition="scale-transition-enter slide-y-transition"
    open-on-click
  >
    <v-list dense>
      <v-list-item clickable no-focus>
        <v-list-item-content>Cut</v-list-item-content>
      </v-list-item>
      <v-list-item clickable>
        <v-list-item-content>Copy</v-list-item-content>
      </v-list-item>
      <v-list-item clickable>
        <v-list-item-content>Paste</v-list-item-content>
      </v-list-item>
      <q-separator />
      <v-list-item clickable>
        <v-list-item-content>Select All</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
