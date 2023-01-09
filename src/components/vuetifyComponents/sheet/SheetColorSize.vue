<script>
import { h } from 'vue'

export default {
  components: {
    // A simple helper component
    SheetFooter: {
      setup (_, { slots }) {
        return () => h('v-sheet', {
          staticClass: 'mt-auto align-center justify-center d-flex px-2',
          props: {
            color: 'rgba(0, 0, 0, .36)',
            dark: true,
            height: 50,
          },
        }, slots.default())
      },
    },
  },
}
</script>

<template>
  <v-container>
    <v-row class="flex-child">
      <v-col
        class="d-flex"
        cols="12"
        md="4"
      >
        <v-sheet
          class="d-flex"
          color="grey-lighten-3"
          height="424"
        >
          <SheetFooter>
            #1: (3r x 2c)
          </SheetFooter>
        </v-sheet>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
        md="4"
      >
        <v-row class="ma-n3">
          <v-col cols="6">
            <v-sheet
              class="d-flex"
              color="green-lighten-3"
              height="150"
            >
              <SheetFooter>
                #2: (1r x 1c)
              </SheetFooter>
            </v-sheet>
          </v-col>

          <v-col cols="6">
            <v-sheet
              class="d-flex"
              color="yellow-lighten-3"
              height="150"
            >
              <SheetFooter>
                #3: (1r x 1c)
              </SheetFooter>
            </v-sheet>
          </v-col>

          <v-col cols="12">
            <v-sheet
              class="d-flex"
              color="red-lighten-3"
              height="250"
            >
              <SheetFooter>
                #5: (2r x 2c)
              </SheetFooter>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="6"
        md="2"
      >
        <v-sheet
          class="d-flex"
          color="teal-lighten-3"
          height="300"
        >
          <SheetFooter>
            #4: (2r x 1c)
          </SheetFooter>
        </v-sheet>
      </v-col>

      <v-col
        class="d-flex"
        cols="6"
        md="2"
      >
        <v-sheet
          class="d-flex mt-auto"
          color="purple-lighten-3"
          height="300"
        >
          <SheetFooter>
            #6: (2r x 1c)
          </SheetFooter>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
