<!--
 * @Description: 
 * @FilePath: \ts-element\src\components\Button\index.vue
-->
<script setup lang="ts">
// import { ref } from 'vue';
import { ref } from 'vue';
import type { ButtonProps } from './types';
defineOptions({
  name: 'TsButton',
});

const buttonVariable = ref<string>('buttonVariable');
const buttonRef = ref<HTMLButtonElement | null>(null);

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
});

defineExpose({
  buttonVariable,
  ref: buttonRef
});

</script>

<template>
  <button class="ts-button"
    ref="buttonRef"
    :class="{
      [`ts-button--${type}`]: type,
      [`ts-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<style scoped>
.ts-button {
  --main-bg-color: yellow;
  background-color: var(--main-bg-color);
}
</style>