<!--
 * @Description: 
 * @FilePath: \ts-element\src\components\Collapse\CollapseItem.vue
-->
<script setup lang="ts">
import { ref } from 'vue';
import type { CollapseItemProps } from './types';

defineOptions({
  name: 'TsCollapseItem',
});
withDefaults(defineProps<CollapseItemProps>(), {
  title: ''
});
</script>

<template>
  <div class="ts-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div class="ts-collapse-item__header"
      :id="`item-header-${name}`"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="ts-collapse-item__content"
      :id="`item-content-${name}`"
    >
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
</style>