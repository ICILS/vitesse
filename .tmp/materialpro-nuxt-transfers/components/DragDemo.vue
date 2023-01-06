<script setup lang="ts">
import { ref } from 'vue'
import { isClient } from '@vueuse/shared'
import { useDraggable } from '@vueuse/core'
import BeakerIcon from './heroIcons/BeakerIcon.vue'

const el = ref<HTMLElement | null>(null)
const innerWidth = isClient ? window.innerWidth : 200
const { x, y, style } = useDraggable(el, {
  initialValue: { x: innerWidth / 1.2, y: 200 },
  preventDefault: true,
})
</script>

<template>
  <div>
    <div
      ref="el"
      class="fixed bg-secondary rounded-md px-6 mx-5 py-5 select-none cursor-move z-10 shadow-md"
      style="touch-action: none; min-width: inherit; text-align: center"
      :style="style"
    >
      👋 Drag me!
      <div class="text-sm opacity-80">
        I am at {{ Math.round(x) }}, {{ Math.round(y) }}
      </div>
    </div>
  </div>
</template>
