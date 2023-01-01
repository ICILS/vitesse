<script setup lang="ts">
// NOTE: Consider using the vue3 component https://fengyuanchen.github.io/vue-feather/
import { ref } from 'vue'
import BaseBreadcrumb from '~/components/BaseBreadcrumb.vue'

const page = ref({ title: 'Feather' })
const breadcrumbs = ref([
  {
    text: 'Icons',
    disabled: false,
    href: '#',
  },
  {
    text: 'Feather',
    disabled: true,
    href: '#',
  },
])

const icons = ref([
  {
    title: 'i-feather-activity',
  },
  {
    title: 'i-feather-airplay',
  },
  {
    title: 'i-feather-alert-circle',
  },
  {
    title: 'i-feather-alert-octagon',
  },
  {
    title: 'i-feather-alert-triangle',
  },
  {
    title: 'i-feather-align-center',
  },
  {
    title: 'i-feather-align-justify',
  },
  {
    title: 'i-feather-align-left',
  },
  {
    title: 'i-feather-align-right',
  },
  {
    title: 'i-feather-anchor',
  },
  {
    title: 'i-feather-aperture',
  },
  {
    title: 'i-feather-archive',
  },
  {
    title: 'i-feather-arrow-down',
  },
  {
    title: 'i-feather-arrow-down-circle',
  },
  {
    title: 'i-feather-arrow-down-left',
  },
  {
    title: 'i-feather-arrow-down-right',
  },
  {
    title: 'i-feather-arrow-left',
  },
  {
    title: 'i-feather-arrow-left-circle',
  },
  {
    title: 'i-feather-arrow-right',
  },
  {
    title: 'i-feather-arrow-right-circle',
  },
  {
    title: 'i-feather-arrow-up',
  },
  {
    title: 'i-feather-arrow-up-circle',
  },
  {
    title: 'i-feather-arrow-up-left',
  },
  {
    title: 'i-feather-arrow-up-right',
  },
  {
    title: 'i-feather-at-sign',
  },
  {
    title: 'i-feather-award',
  },
  {
    title: 'i-feather-bar-chart',
  },
  {
    title: 'i-feather-bar-chart-2',
  },
  {
    title: 'i-feather-battery',
  },
  {
    title: 'i-feather-battery-charging',
  },
  {
    title: 'i-feather-bell',
  },
  {
    title: 'i-feather-bell-off',
  },
  {
    title: 'i-feather-bluetooth',
  },
  {
    title: 'i-feather-bold',
  },
  {
    title: 'i-feather-book',
  },
  {
    title: 'i-feather-book-open',
  },
  {
    title: 'i-feather-bookmark',
  },
  {
    title: 'i-feather-box',
  },
  {
    title: 'i-feather-briefcase',
  },
  {
    title: 'i-feather-calendar',
  },
  {
    title: 'i-feather-camera',
  },
  {
    title: 'i-feather-camera-off',
  },
  {
    title: 'i-feather-cast',
  },
  {
    title: 'i-feather-check',
  },
  {
    title: 'i-feather-check-circle',
  },
  {
    title: 'i-feather-check-square',
  },
  {
    title: 'i-feather-chevron-down',
  },
  {
    title: 'i-feather-chevron-left',
  },
  {
    title: 'i-feather-chevron-right',
  },
  {
    title: 'i-feather-chevron-up',
  },
  {
    title: 'i-feather-chevrons-down',
  },
  {
    title: 'i-feather-chevrons-left',
  },
  {
    title: 'i-feather-chevrons-right',
  },
  {
    title: 'i-feather-chevrons-up',
  },
  {
    title: 'i-feather-chrome',
  },
  {
    title: 'i-feather-circle',
  },
  {
    title: 'i-feather-clipboard',
  },
  {
    title: 'i-feather-clock',
  },
  {
    title: 'i-feather-cloud',
  },
  {
    title: 'i-feather-cloud-drizzle',
  },
  {
    title: 'i-feather-cloud-lightning',
  },
  {
    title: 'i-feather-cloud-off',
  },
  {
    title: 'i-feather-cloud-rain',
  },
  {
    title: 'i-feather-cloud-snow',
  },
  {
    title: 'i-feather-code',
  },
  {
    title: 'i-feather-codepen',
  },
  {
    title: 'i-feather-command',
  },
  {
    title: 'i-feather-compass',
  },
  {
    title: 'i-feather-copy',
  },
  {
    title: 'i-feather-corner-down-left',
  },
  {
    title: 'i-feather-corner-down-right',
  },
  {
    title: 'i-feather-corner-left-down',
  },
  {
    title: 'i-feather-corner-left-up',
  },
  {
    title: 'i-feather-corner-right-down',
  },
  {
    title: 'i-feather-corner-right-up',
  },
  {
    title: 'i-feather-corner-up-left',
  },
  {
    title: 'i-feather-corner-up-right',
  },
  {
    title: 'i-feather-cpu',
  },
  {
    title: 'i-feather-credit-card',
  },
  {
    title: 'i-feather-crop',
  },
  {
    title: 'i-feather-crosshair',
  },
  {
    title: 'i-feather-database',
  },
  {
    title: 'i-feather-delete',
  },
  {
    title: 'i-feather-disc',
  },
  {
    title: 'i-feather-dollar-sign',
  },
  {
    title: 'i-feather-download',
  },
  {
    title: 'i-feather-download-cloud',
  },
  {
    title: 'i-feather-droplet',
  },
  {
    title: 'i-feather-edit',
  },
  {
    title: 'i-feather-edit-2',
  },
  {
    title: 'i-feather-edit-3',
  },
  {
    title: 'i-feather-external-link',
  },
  {
    title: 'i-feather-eye',
  },
  {
    title: 'i-feather-eye-off',
  },
  {
    title: 'i-feather-facebook',
  },
  {
    title: 'i-feather-fast-forward',
  },
  {
    title: 'i-feather-feather',
  },
  {
    title: 'i-feather-file',
  },
  {
    title: 'i-feather-file-minus',
  },
  {
    title: 'i-feather-file-plus',
  },
  {
    title: 'i-feather-file-text',
  },
  {
    title: 'i-feather-film',
  },
  {
    title: 'i-feather-filter',
  },
  {
    title: 'i-feather-flag',
  },
  {
    title: 'i-feather-folder',
  },
  {
    title: 'i-feather-folder-minus',
  },
  {
    title: 'i-feather-folder-plus',
  },
  {
    title: 'i-feather-gift',
  },
  {
    title: 'i-feather-git-branch',
  },
  {
    title: 'i-feather-git-commit',
  },
  {
    title: 'i-feather-git-merge',
  },
  {
    title: 'i-feather-git-pull-request',
  },
  {
    title: 'i-feather-github',
  },
  {
    title: 'i-feather-gitlab',
  },
  {
    title: 'i-feather-globe',
  },
  {
    title: 'i-feather-grid',
  },
  {
    title: 'i-feather-hard-drive',
  },
  {
    title: 'i-feather-hash',
  },
  {
    title: 'i-feather-headphones',
  },
  {
    title: 'i-feather-heart',
  },
  {
    title: 'i-feather-help-circle',
  },
  {
    title: 'i-feather-home',
  },
  {
    title: 'i-feather-image',
  },
  {
    title: 'i-feather-inbox',
  },
  {
    title: 'i-feather-info',
  },
  {
    title: 'i-feather-instagram',
  },
  {
    title: 'i-feather-italic',
  },
  {
    title: 'i-feather-layers',
  },
  {
    title: 'i-feather-layout',
  },
  {
    title: 'i-feather-life-buoy',
  },
  {
    title: 'i-feather-link',
  },
  {
    title: 'i-feather-link-2',
  },
  {
    title: 'i-feather-linkedin',
  },
  {
    title: 'i-feather-list',
  },
  {
    title: 'i-feather-loader',
  },
  {
    title: 'i-feather-lock',
  },
  {
    title: 'i-feather-log-in',
  },
  {
    title: 'i-feather-log-out',
  },
  {
    title: 'i-feather-mail',
  },
  {
    title: 'i-feather-map',
  },
  {
    title: 'i-feather-map-pin',
  },
  {
    title: 'i-feather-maximize',
  },
  {
    title: 'i-feather-maximize-2',
  },
  {
    title: 'i-feather-menu',
  },
  {
    title: 'i-feather-message-circle',
  },
  {
    title: 'i-feather-message-square',
  },
  {
    title: 'i-feather-mic',
  },
  {
    title: 'i-feather-mic-off',
  },
  {
    title: 'i-feather-minimize',
  },
  {
    title: 'i-feather-minimize-2',
  },
  {
    title: 'i-feather-minus',
  },
  {
    title: 'i-feather-minus-circle',
  },
  {
    title: 'i-feather-minus-square',
  },
  {
    title: 'i-feather-monitor',
  },
  {
    title: 'i-feather-moon',
  },
  {
    title: 'i-feather-more-horizontal',
  },
  {
    title: 'i-feather-more-vertical',
  },
  {
    title: 'i-feather-move',
  },
  {
    title: 'i-feather-music',
  },
  {
    title: 'i-feather-navigation',
  },
  {
    title: 'i-feather-navigation-2',
  },
  {
    title: 'i-feather-octagon',
  },
  {
    title: 'i-feather-package',
  },
  {
    title: 'i-feather-paperclip',
  },
  {
    title: 'i-feather-pause',
  },
  {
    title: 'i-feather-pause-circle',
  },
  {
    title: 'i-feather-percent',
  },
  {
    title: 'i-feather-phone',
  },
  {
    title: 'i-feather-phone-call',
  },
  {
    title: 'i-feather-phone-forwarded',
  },
  {
    title: 'i-feather-phone-incoming',
  },
  {
    title: 'i-feather-phone-missed',
  },
  {
    title: 'i-feather-phone-off',
  },
  {
    title: 'i-feather-phone-outgoing',
  },
  {
    title: 'i-feather-pie-chart',
  },
  {
    title: 'i-feather-play',
  },
  {
    title: 'i-feather-play-circle',
  },
  {
    title: 'i-feather-plus',
  },
  {
    title: 'i-feather-plus-circle',
  },
  {
    title: 'i-feather-plus-square',
  },
  {
    title: 'i-feather-pocket',
  },
  {
    title: 'i-feather-power',
  },
  {
    title: 'i-feather-printer',
  },
  {
    title: 'i-feather-radio',
  },
  {
    title: 'i-feather-refresh-ccw',
  },
  {
    title: 'i-feather-refresh-cw',
  },
  {
    title: 'i-feather-repeat',
  },
  {
    title: 'i-feather-rewind',
  },
  {
    title: 'i-feather-rotate-ccw',
  },
  {
    title: 'i-feather-rotate-cw',
  },
  {
    title: 'i-feather-rss',
  },
  {
    title: 'i-feather-save',
  },
  {
    title: 'i-feather-scissors',
  },
  {
    title: 'i-feather-search',
  },
  {
    title: 'i-feather-send',
  },
  {
    title: 'i-feather-server',
  },
  {
    title: 'i-feather-settings',
  },
  {
    title: 'i-feather-share',
  },
  {
    title: 'i-feather-share-2',
  },
  {
    title: 'i-feather-shield',
  },
  {
    title: 'i-feather-shield-off',
  },
  {
    title: 'i-feather-shopping-bag',
  },
  {
    title: 'i-feather-shopping-cart',
  },
  {
    title: 'i-feather-shuffle',
  },
  {
    title: 'i-feather-sidebar',
  },
  {
    title: 'i-feather-skip-back',
  },
  {
    title: 'i-feather-skip-forward',
  },
  {
    title: 'i-feather-slack',
  },
  {
    title: 'i-feather-slash',
  },
  {
    title: 'i-feather-sliders',
  },
  {
    title: 'i-feather-smartphone',
  },
  {
    title: 'i-feather-speaker',
  },
  {
    title: 'i-feather-square',
  },
  {
    title: 'i-feather-star',
  },
  {
    title: 'i-feather-stop-circle',
  },
  {
    title: 'i-feather-sun',
  },
  {
    title: 'i-feather-sunrise',
  },
  {
    title: 'i-feather-sunset',
  },
  {
    title: 'i-feather-tablet',
  },
  {
    title: 'i-feather-tag',
  },
  {
    title: 'i-feather-target',
  },
  {
    title: 'i-feather-terminal',
  },
  {
    title: 'i-feather-thermometer',
  },
  {
    title: 'i-feather-thumbs-down',
  },
  {
    title: 'i-feather-thumbs-up',
  },
  {
    title: 'i-feather-toggle-left',
  },
  {
    title: 'i-feather-toggle-right',
  },
  {
    title: 'i-feather-trash',
  },
  {
    title: 'i-feather-trash-2',
  },
  {
    title: 'i-feather-trending-down',
  },
  {
    title: 'i-feather-trending-up',
  },
  {
    title: 'i-feather-triangle',
  },
  {
    title: 'i-feather-truck',
  },
  {
    title: 'i-feather-tv',
  },
  {
    title: 'i-feather-twitter',
  },
  {
    title: 'i-feather-type',
  },
  {
    title: 'i-feather-umbrella',
  },
  {
    title: 'i-feather-underline',
  },
  {
    title: 'i-feather-unlock',
  },
  {
    title: 'i-feather-upload',
  },
  {
    title: 'i-feather-upload-cloud',
  },
  {
    title: 'i-feather-user',
  },
  {
    title: 'i-feather-user-check',
  },
  {
    title: 'i-feather-user-minus',
  },
  {
    title: 'i-feather-user-plus',
  },
  {
    title: 'i-feather-user-x',
  },
  {
    title: 'i-feather-users',
  },
  {
    title: 'i-feather-video',
  },
  {
    title: 'i-feather-video-off',
  },
  {
    title: 'i-feather-voicemail',
  },
  {
    title: 'i-feather-volume',
  },
  {
    title: 'i-feather-volume-1',
  },
  {
    title: 'i-feather-volume-2',
  },
  {
    title: 'i-feather-volume-x',
  },
  {
    title: 'i-feather-watch',
  },
  {
    title: 'i-feather-wifi',
  },
  {
    title: 'i-feather-wifi-off',
  },
  {
    title: 'i-feather-wind',
  },
  {
    title: 'i-feather-x',
  },
  {
    title: 'i-feather-x-circle',
  },
  {
    title: 'i-feather-x-square',
  },
  {
    title: 'i-feather-youtube',
  },
  {
    title: 'i-feather-zap',
  },
  {
    title: 'i-feather-zap-off',
  },
  {
    title: 'i-feather-zoom-in',
  },
  {
    title: 'i-feather-zoom-out',
  },
])
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  />
  <v-row vs-justify="center">
    <v-col v-for="(item, i) in icons" :key="i" lg="3" md="4">
      <v-card>
        <v-card-text class="pa-5 text-center">
          <!-- <vue-feather :type="item.title" class="mt-4" /> -->
          <div :class="item.title" inline-block class="mt-4 text-2xl" />

          <!-- <div :class="item.title" inline-block /> -->
          <p class="text-subtitle-1 text-no-wrap text-truncate text-grey-darken-1 mb-4">
            {{ item.title }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
