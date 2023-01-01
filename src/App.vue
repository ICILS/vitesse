<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Showcase UI | ICILS 2077',
  meta: [
    { name: 'description', content: 'Showcase app for the ICILS 2077 design system and component library.' },
    // {
    //   name: 'theme-color',
    //   // content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    // },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
