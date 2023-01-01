<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsSwitchStates -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div class="mt-4">
      <v-row>
        <v-col cols="6">
          <v-switch
            color="primary"
            :model-value="true"
            label="on"
          />
        </v-col>
        <v-col cols="6">
          <v-switch
            color="primary"
            :model-value="false"
            label="off"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-switch
            color="primary"
            :model-value="true"
            disabled
            label="on disabled"
          />
        </v-col>
        <v-col cols="6">
          <v-switch
            color="primary"
            :model-value="false"
            disabled
            label="off disabled"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-switch
            loading="warning"
            :model-value="true"
            label="on loading"
          />
        </v-col>
        <v-col cols="6">
          <v-switch
            :model-value="false"
            loading="warning"
            label="off loading"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
