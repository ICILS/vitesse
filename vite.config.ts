import path from 'path'
import { URL, fileURLToPath } from 'url'
import wasm from 'vite-plugin-wasm-esm'
import { defineConfig } from 'vite'
import Preview from 'vite-plugin-vue-component-preview'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-vue-markdown'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Inspect from 'vite-plugin-inspect'
import Inspector from 'vite-plugin-vue-inspector'
import LinkAttributes from 'markdown-it-link-attributes'
import Unocss from 'unocss/vite'
import Shiki from 'markdown-it-shiki'
import VueMacros from 'unplugin-vue-macros/vite'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineConfig({
  // Adding build targets to try fix the issue
  build: {
    target: ['esnext', 'chrome89', 'safari15', 'firefox89'],
  },
  esbuild: {
    target: ['chrome89', 'safari15', 'firefox89'],
  },

  define: { 'process.env': {} },

  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      // Resolve `@` to `src` directory from materialpro project
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  publicDir: 'public, src/assets',

  plugins: [
    Preview(),

    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
          reactivityTransform: true,
          template: {
            transformAssetUrls,
            /* compilerOptions: {
              isCustomElement: (tag: string) => tag.includes("*-*") || tag.includes("v-list-item-content"),
            }, */
          },
        }),
      },
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
        // 'src/assets', // Added
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/antfu/vite-plugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Shiki, {
          theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        })
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      // Added
      // mode: 'development',
      // devOptions: {
      //   type: 'module',
      // },
      // base: '/',
      // strategies: 'injectManifest',
      // srcDir: 'src',
      // filename: 'sw.ts',
      // selfDestroying: true,
      // useCredentials: false,
      // workbox: {
      //   globPatterns: ['**/*.{js,css,html,woff2,woff,svg,png,jpg,jpeg,gif,ico,webp}'],
      //   globDirectory: 'dist',
      //   globIgnores: ['**/node_modules/**/*'],
      //   swDest: 'dist/sw.js',
      //   mode: 'development',
      //   sourcemap: true,
      //   skipWaiting: true,
      //   modifyURLPrefix: {
      //     '': '/',
      //   },
      //   navigationPreload: true,
      //   runtimeCaching: [
      //     {
      //       urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'google-fonts-stylesheets',
      //       },
      //     },
      //     {
      //       urlPattern: /^https:\/\/fonts\.gstatic\.com/,
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'google-fonts-webfonts',
      //         cacheableResponse: {
      //           statuses: [0, 200],
      //         },

      //         expiration: {
      //           maxEntries: 30,
      //           maxAgeSeconds: 60 * 60 * 24 * 365,
      //         },
      //       },
      //     },
      //     { urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico|webp)$/, handler: 'CacheFirst' },
      //     { urlPattern: /\.(?:js|css)$/, handler: 'CacheFirst' },
      //     { urlPattern: /\.(?:html)$/, handler: 'NetworkFirst' },
      //   ],
      // },
      // disable: false,
      // Original
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'ICILS 2077',
        short_name: '2077',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),

    // https://github.com/webfansplz/vite-plugin-vue-inspector
    Inspector({
      toggleButtonVisibility: 'never',
    }),
    vuetify({
      autoImport: true,
      // styles: { configFile: 'src/scss/settings.scss' }, // Customizinng variables. See https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin#customising-variables
      // styles: 'sass',
      // styles: 'none',
    }),
  ],
  // Added from materialpro
  css: {
    preprocessorOptions: {
      scss: { charset: false },
      css: { charset: false },
    },
  },
  // Added from materialpro. Makes pages with vuetify components load faster.
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: [
      './src/**/*.vue',
      './src/pages/**/*.vue',
    ],
  },

  // https://github.com/vitest-dev/vitest
  // test: {
  //   setupFiles: "vuetify.config.js",
  //   include: ['test/**/*.test.ts'],
  //   environment: 'jsdom',
  //   deps: {
  //     inline: ['@vue', '@vueuse', 'vue-demi', 'vuetify'],
  //   },
  //   globals: true,
  // },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() { generateSitemap() },
  },

  /* ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/, 'vuetify'], // 'vuetify'
    optimizeDeps: {
      include: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', 'vuetify', 'apexcharts', 'vue3-apexcharts', 'svgmap'],
    },
  }, */

  ssr: {
    format: 'cjs',
    external: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', 'vuetify', 'apexcharts', 'vue3-apexcharts'],
    noExternal: ['workbox-window', /vue-i18n/, 'vuetify'], // 'vuetify'
    optimizeDeps: {
      include: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', 'vuetify', 'apexcharts', 'vue3-apexcharts'],
    },
  },

})
