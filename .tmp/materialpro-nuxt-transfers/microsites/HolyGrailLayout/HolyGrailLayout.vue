<script setup lang="ts">
// https://dev.to/codeply/helpful-page-layouts-using-tailwind-css-1a3k
</script>

<template>
  <div class="full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
    <!-- fixed-width -->
    <div class="fixed full flex-shrink flex-gro0 px-4">
      <div class="sticky top-0 p-4 full h-full">
        <!-- nav goes here -->
      </div>
    </div>
    <main role="main" class="full flex-grow pt-1 px-3">
      <!-- fluid-width: main content goes here -->
    </main>
    <div class="fixed full flex-shrink flex-gro0 px-2">
      <!-- fixed-width -->
      <div class="flex sm:flex-col px-2">
        <!-- sidebar goes here -->
      </div>
    </div>
  </div>
  <footer class="bg-black mt-auto">
    ...
  </footer>
</template>

<style lang="scss" scoped>
@media (min-width: 640px) {
  .w-fixed {
    flex: 0 1 230px;
    min-width: 230px;
  }
}
</style>
