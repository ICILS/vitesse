<script lang="ts">
import { defineComponent } from 'vue'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aliquid, voluptatibus, quibusdam, eius, quidem,
    laborum, rem, architecto, velit, autem, quae,
    accusamus, voluptates, itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aliquid, voluptatibus, quibusdam, eius, quidem,
    laborum, rem, architecto, velit, autem, quae,
    accusamus, voluptates, itaque.`

export default defineComponent({
  name: 'TaskStim',
  data() {
    return {
      lorem,
    }
  },
})
</script>

<template>
  <v-card flat class="q-px-sm q-pt-sm q-pb-none overflow-hidden">
    <v-card-text class="q-pa-sm">
      <div class="text-h6">
        Stimulus content
      </div>
    </v-card-text>

    <v-card-text>
      <p v-for="n in 100" :key="n">
        {{ lorem }}
      </p>
      <p>LAST LINE</p>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped></style>
