<!--
 * @Description: 
 * @FilePath: \ts-element\src\components\Icon\index.vue
-->
<script setup lang="ts">
// import { ref } from 'vue';
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
// import type { ButtonProps } from './types';
defineOptions({
  name: 'TsIcon',
  inheritAttrs: false
});
defineProps<FontAwesomeIconProps>();

</script>

<template>
  <i class="ts-icon">
    <FontAwesomeIcon v-bind="$props"/>
  </i>
</template>
<style scoped>
</style>