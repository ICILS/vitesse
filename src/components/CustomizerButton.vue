<script setup lang="ts">
import { useCustomizerStore } from '~/stores/customizer'
defineProps<{
  modelValue?: boolean
}>()

const icon = 'i-mdi-cog'

const customizer = useCustomizerStore()
</script>

<template>
  <v-btn
    class="customizer-btn" icon variant="flat" size="large" flat @click.stop="
      customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)
    "
  >
    <div :class="icon" text-2xl />
  </v-btn>
</template>

<style lang="scss" scoped>
.customizer-btn {
  position: fixed;
  bottom: 30px;
  right: 20px;
}
</style>
