<template>
  <v-card>
    <v-card-text class="pa-0">
      <img
        src="@/assets/images/background/weatherbg.jpg"
        class="w-100"
        height="90"
      >
      <div class="pa-5">
        <v-row>
          <v-col cols="8" sm="8" lg="6">
            <div class="d-flex align-center justify-center">
              <!-- <v-icon size="45" color="primary">
                mdi-weather-partly-cloudy
              </v-icon> -->

              <div i-mdi-weather-partly-cloudy class="text-5xl text-primary" />

              <div class="ml-3">
                <h1 class="text-3xl">
                  32<sup>0</sup>
                </h1>
                <small class>Sunny Rainy day</small>
              </div>
            </div>
          </v-col>
          <!-- <v-divider vertical></v-divider> -->
          <v-col cols="4" sm="4" lg="6">
            <div class="d-flex align-center justify-center">
              <!-- <v-icon size="45" color="secondary">
                mdi-weather-night-partly-cloudy
              </v-icon> -->
              <div i-mdi-weather-night-partly-cloudy class="text-5xl text-secondary" />
              <div class="ml-3">
                <h1 class="text-3xl">
                  25
                  <sup>0</sup>
                </h1>
                <small class>Tonight</small>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>
