<script setup lang="ts">
import TextareasIcon from '~/components/vuetifyComponents/textareas/TextareasIcon.vue'
import TextareasAutoGrow from '~/components/vuetifyComponents/textareas/TextareasAutoGrow.vue'
import TextareasBackgroundColor from '~/components/vuetifyComponents/textareas/TextareasBackgroundColor.vue'
import TextareasBrowserAutocomplete from '~/components/vuetifyComponents/textareas/TextareasBrowserAutocomplete.vue'
import TextareasClearable from '~/components/vuetifyComponents/textareas/TextareasClearable.vue'
import TextareasCounter from '~/components/vuetifyComponents/textareas/TextareasCounter.vue'
import TextareasNoresize from '~/components/vuetifyComponents/textareas/TextareasNoresize.vue'
import TextareasRows from '~/components/vuetifyComponents/textareas/TextareasRows.vue'
import TextareasBeautifulForms from '~/components/vuetifyComponents/textareas/TextareasBeautifulForms.vue'
</script>

<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Textareas - Icons">
          <TextareasIcon />
        </BaseCard>

        <BaseCard heading="Textareas - Auto grow">
          <TextareasAutoGrow />
        </BaseCard>

        <BaseCard heading="Textareas - Background color">
          <TextareasBackgroundColor />
        </BaseCard>

        <BaseCard heading="Textareas - Browser autocomplete">
          <TextareasBrowserAutocomplete />
        </BaseCard>

        <BaseCard heading="Textareas - Clearable">
          <TextareasClearable />
        </BaseCard>

        <BaseCard heading="Textareas - Counter">
          <TextareasCounter />
        </BaseCard>

        <BaseCard heading="Textareas - No resize">
          <TextareasNoresize />
        </BaseCard>

        <BaseCard heading="Textareas - Rows">
          <TextareasRows />
        </BaseCard>

        <BaseCard heading="Textareas - Beautiful Forms">
          <TextareasBeautifulForms />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
