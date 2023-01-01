<script>
export default {
  name: 'Textareas',
  components: {
    TextareasIcon: () => import('~/components/vuetifyComponents/textareas/TextareasIcon'),
    TextareasAutoGrow: () => import('~/components/vuetifyComponents/textareas/TextareasAutoGrow'),
    TextareasBackgroundColor: () => import('~/components/vuetifyComponents/textareas/TextareasBackgroundColor'),
    TextareasBrowserAutocomplete: () => import('~/components/vuetifyComponents/textareas/TextareasBrowserAutocomplete'),
    TextareasClearable: () => import('~/components/vuetifyComponents/textareas/TextareasClearable'),
    TextareasCounter: () => import('~/components/vuetifyComponents/textareas/TextareasCounter'),
    TextareasNoresize: () => import('~/components/vuetifyComponents/textareas/TextareasNoresize'),
    TextareasRows: () => import('~/components/vuetifyComponents/textareas/TextareasRows'),
    TextareasBeautifulForms: () => import('~/components/vuetifyComponents/textareas/TextareasBeautifulForms'),
  },

  data: () => ({
  }),
}
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
