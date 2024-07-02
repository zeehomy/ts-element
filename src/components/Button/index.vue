<!--
 * @Description: 
 * @FilePath: \ts-element\src\components\Button\index.vue
-->
<script setup lang="ts">
// import { ref } from 'vue';
import type { ButtonProps } from './types';
defineOptions({
  name: 'TsButton',
});

defineProps<ButtonProps>();

</script>

<template>
  <button class="ts-button"
    :class="{
      [`ts-button--${type}`]: type,
      [`ts-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<style scoped lang="scss">
</style>