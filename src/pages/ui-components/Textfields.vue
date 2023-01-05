<script setup lang="ts">
import BaseCard from '~/components/BaseCard.vue'
import TextfieldSingleline from '~/components/vuetifyComponents/textfields/TextfieldSingleline.vue'
import TextfieldShaped from '~/components/vuetifyComponents/textfields/TextfieldShaped.vue'
import TextfieldDisabledReadonly from '~/components/vuetifyComponents/textfields/TextfieldDisabledReadonly.vue'
import TextfieldDense from '~/components/vuetifyComponents/textfields/TextfieldDense.vue'
import TextfieldIcons from '~/components/vuetifyComponents/textfields/TextfieldIcons.vue'
import TextfieldPasswordInput from '~/components/vuetifyComponents/textfields/TextfieldPasswordInput.vue'
import TextfieldClearable from '~/components/vuetifyComponents/textfields/TextfieldClearable.vue'
import TextfieldCharacterCounter from '~/components/vuetifyComponents/textfields/TextfieldCharacterCounter.vue'
import TextfieldAutohideDetails from '~/components/vuetifyComponents/textfields/TextfieldAutohideDetails.vue'
import TextfieldCustomColors from '~/components/vuetifyComponents/textfields/TextfieldCustomColors.vue'
import TextfieldMask from '~/components/vuetifyComponents/textfields/TextfieldMask.vue'
import TextfieldHintText from '~/components/vuetifyComponents/textfields/TextfieldHintText.vue'
import TextfieldPrefixesSuffixes from '~/components/vuetifyComponents/textfields/TextfieldPrefixesSuffixes.vue'
import TextfieldIconEvents from '~/components/vuetifyComponents/textfields/TextfieldIconEvents.vue'
import TextfieldIconSlots from '~/components/vuetifyComponents/textfields/TextfieldIconSlots.vue'
import TextfieldLabelSlots from '~/components/vuetifyComponents/textfields/TextfieldLabelSlots.vue'
import TextfieldValidation from '~/components/vuetifyComponents/textfields/TextfieldValidation.vue'
import TextfieldFullwidthCharahterCounter from '~/components/vuetifyComponents/textfields/TextfieldFullwidthCharahterCounter.vue'
import TextfieldProgressbar from '~/components/vuetifyComponents/textfields/TextfieldProgressbar.vue'
import TextfieldCustomValidation from '~/components/vuetifyComponents/textfields/TextfieldCustomValidation.vue'
import TextfieldVariant from '~/components/vuetifyComponents/textfields/TextfieldVariant.vue'
</script>

<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Textfields - Single line">
          <TextfieldSingleline />
        </BaseCard>

        <BaseCard heading="Textfields - Shaped">
          <TextfieldShaped />
        </BaseCard>

        <BaseCard heading="Textfields - Disabled and readonly">
          <TextfieldDisabledReadonly />
        </BaseCard>

        <BaseCard heading="Textfields - Dense">
          <TextfieldDense />
        </BaseCard>

        <BaseCard heading="Textfields - Icons">
          <TextfieldIcons />
        </BaseCard>

        <BaseCard heading="Textfields - Clearable">
          <TextfieldClearable />
        </BaseCard>

        <BaseCard heading="Textfields - Character counter">
          <TextfieldCharacterCounter />
        </BaseCard>

        <BaseCard heading="Textfields - Auto hiding details">
          <TextfieldAutohideDetails />
        </BaseCard>

        <BaseCard heading="Textfields - Password input">
          <TextfieldPasswordInput />
        </BaseCard>

        <BaseCard heading="Textfields - Variant">
          <TextfieldVariant />
        </BaseCard>

        <BaseCard heading="Textfields - Custom colors">
          <TextfieldCustomColors />
        </BaseCard>

        <BaseCard heading="Textfields - Masks (using vue-the-mask)">
          <TextfieldMask />
        </BaseCard>

        <BaseCard heading="Textfields - Hint text">
          <TextfieldHintText />
        </BaseCard>

        <BaseCard heading="Textfields - Prefixes & suffixes">
          <TextfieldPrefixesSuffixes />
        </BaseCard>

        <BaseCard heading="Textfields - Icon events">
          <TextfieldIconEvents />
        </BaseCard>

        <BaseCard heading="Textfields - Icon slots">
          <TextfieldIconSlots />
        </BaseCard>

        <BaseCard heading="Textfields - Label slot">
          <TextfieldLabelSlots />
        </BaseCard>

        <BaseCard heading="Textfields - Validation">
          <TextfieldValidation />
        </BaseCard>

        <BaseCard heading="Textfields - Full-width text field with character counter">
          <TextfieldFullwidthCharahterCounter />
        </BaseCard>

        <BaseCard heading="Textfields - Progress bar">
          <TextfieldProgressbar />
        </BaseCard>

        <BaseCard heading="Textfields - Custom validation">
          <TextfieldCustomValidation />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
