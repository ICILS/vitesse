<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsChkStates -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div class="mt-4">
      <v-row class="light--text">
        <v-col cols="4">
          on
        </v-col>
        <v-col cols="4">
          off
        </v-col>
        <v-col cols="4">
          indeterminate
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-checkbox input-value="true" value />
        </v-col>
        <v-col cols="4">
          <v-checkbox value />
        </v-col>
        <v-col cols="4">
          <v-checkbox value indeterminate />
        </v-col>
      </v-row>
      <v-row class="light--text">
        <v-col cols="4">
          on disabled
        </v-col>
        <v-col cols="4">
          off disabled
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-checkbox input-value="true" value disabled />
        </v-col>
        <v-col cols="4">
          <v-checkbox value disabled />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
