<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { availableLocales } from '~/utils/lang'

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

// state
const currentStyle = toRef(props, 'type')
const localeSetting = useState<string>('locale.setting')
</script>

<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'" v-model="localeSetting" as="div"
      class="flex relative items-center"
    >
      <ListboxLabel class="sr-only">
        Theme
      </ListboxLabel>
      <ListboxButton type="button" title="Change Language" class="transition-colors duration-300">
        <span class="flex justify-center items-center">
          <v-icon icon="mdi:translate-variant" />
        </span>
      </ListboxButton>
      <ListboxOptions
        class="bg-white rounded-lg font-semibold outline-none top-full shadow-lg text-sm p-1 py-1 right-0 ring-1 ring-gray-900/10 text-gray-700 w-36 z-50 absolute overflow-hidden dark:bg-gray-800 dark:ring-0 dark:text-gray-300 dark:highlight-white/5"
      >
        <ListboxOption
          v-for="lang in availableLocales" :key="lang.iso" :value="lang.iso" class="py-2 px-2 flex items-center cursor-pointer" :class="{
            'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
              localeSetting === lang.iso,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30':
              localeSetting !== lang.iso,
          }"
        >
          <span class="text-sm mr-2">
            {{ lang.flag }}
          </span>
          <span class="flex-1 truncate">
            {{ lang.name }}
            <span class="text-xs">({{ lang.iso }})</span>
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'" v-model="localeSetting"
      class="bg-transparent border rounded outline-none border-gray-900/10 w-full py-1 px-2 pr-3 text-gray-700 dark:border-gray-50/[0.2] dark:text-gray-300"
    >
      <option v-for="lang in availableLocales" :key="lang.iso" :value="lang.iso" class="flex space-x-2 items-center">
        {{ lang.flag }} {{ lang.name }} ({{ lang.iso }})
      </option>
    </select>
  </div>
</template>

