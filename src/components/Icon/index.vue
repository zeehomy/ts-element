<!--
 * @Description: 
 * @FilePath: \ts-element\src\components\Icon\index.vue
-->
<script setup lang="ts">
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { omit } from 'lodash-es';
import type { IconProps } from './types';
defineOptions({
  name: 'TsIcon',
  inheritAttrs: false
});
const props = defineProps<IconProps>();
const fontIconProps = computed(() => {

  return omit(props, ['type', 'color']);
});
</script>

<template>
  <i class="ts-icon"
    :class="{
      [`ts-icon--${type}`]: type
    }"
    :style="{
      color
    }"
  >
    <FontAwesomeIcon v-bind="fontIconProps"/>
  </i>
</template>
<style scoped>
</style>