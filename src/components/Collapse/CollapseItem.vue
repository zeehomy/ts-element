<!--
 * @Description: 
 * @FilePath: \ts-element\src\components\Collapse\CollapseItem.vue
-->
<script setup lang="ts">
import { ref, inject, computed } from 'vue';
import type { CollapseItemProps, collapseItemNameType, CollapseCotext } from './types';
import { collapseCotextKey  } from './types';

defineOptions({
  name: 'TsCollapseItem',
});
const {
  name,
  disabled
} = withDefaults(defineProps<CollapseItemProps>(), {
  title: ''
});

const {
  activeNames,
  handleClickCollapseItem
} = inject(collapseCotextKey) || {};


const isActiveCollapseItem = computed(() => {
  return activeNames && activeNames.value.includes(name);
});

const handleClickCollapseItemHeader = (collapseItemName: collapseItemNameType) => {
  if (disabled)
    return;

    handleClickCollapseItem && handleClickCollapseItem(collapseItemName);
};
</script>

<template>
  <div class="ts-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div class="ts-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActiveCollapseItem
      }"
      :id="`item-header-${name}`"
      @click="handleClickCollapseItemHeader(name)"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <Transition name="fade">
      <div class="ts-collapse-item__content"
        :id="`item-content-${name}`"
        v-show="isActiveCollapseItem"
      >
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>
<style scoped>
.ts-collapse-item__header {
  font-size: 30px;
}

</style>