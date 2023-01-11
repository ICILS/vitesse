<script setup>
/* Code generated with AutoHTML Plugin for Figma */
import { defineProps } from "vue";

defineProps({});
</script>

<template>
  <v-card image="./mio-hero.jpg" height="500" max-width="1500">

    <!-- TODO: Make text scalable -->

    <v-card-title color="dark" class="prose title my-10 ">Material Design</v-card-title>

    <v-card-title class="prose text-2xl text-wrap mx-20 px-20 text-center" color="dark">
      Material 3 is the latest version of Google’s open-source design system.
      Design and build beautiful, usable products with Material 3.
    </v-card-title>

    <v-btn class="button---tse my-20" rounded="pill" color="primary" depressed>
      <span class="label-text">Start</span>
    </v-btn>

  </v-card>
</template>

<style scoped>
.mio-hero,
.mio-hero * {
  box-sizing: border-box;
}

.mio-hero {
  background: linear-gradient(to left, #f8fafd, #f8fafd);
  border-radius: 1.5rem;
  padding: 55.99px 331.09px 55.99px 331.09px;
  width: 1502.17px;
  height: 451.95px;
  position: relative;
  overflow: hidden;
}

.mio-hero-img {
  width: 93.875rem;
  height: 54.25rem;
  position: absolute;
  left: 0rem;
  top: -11.8125rem;
}

.container {
  padding: 0rem 0.5625rem 0rem 0.5625rem;
  display: flex;
  flex-direction: column;
  gap: 0rem;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  left: calc(50% - 420.35px);
  top: calc(50% - 178.77px);
}

.title {
  color: var(--mio-sys-light-on-background);
  text-align: center;
  font: var(--mio-display-xxl, 500 6.6875rem/112px "Inter", sans-serif);
  position: relative;
  /* width: 800.95px; */
  /* width: 100%; */
  /* height: 140.35px; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.subtitle {
  color: var(--mio-sys-light-on-background);
  text-align: center;
  font: var(--mio-headline-small, 400 1.5rem/32px "Inter", sans-serif);
  position: relative;
  /* width: 822.69px; */
  max-width: 820px;
  /* height: 57.18px; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.button---tse {
  background: var(--mio-sys-light-primary);
  /* border-radius: 6.25rem; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 223.57px;
  height: 5rem;
  position: absolute;
  left: calc(50% - 112.08px);
  top: 19.75rem;
  overflow: hidden;
}

.state-layer {
  padding: 0.625rem 1.5rem 0.625rem 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.label-text {
  color: var(--mio-sys-dark-on-primary-container, #dbe2ff);
  text-align: center;
  font: var(--mio-label-xl, 500 1.4375rem/32px "Inter", sans-serif);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
