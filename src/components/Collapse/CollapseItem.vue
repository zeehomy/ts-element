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

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  // beforeEnter(el) {
  //   el.style.height = '0';
  // },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;   // 导致有内联样式
    // el.style.overflow = 'hidden';
  },
  // onLeave(el) {
    
  // }
  beforeLeave(el) {                             // 具有弥补默认阶段（默认展开）的作用
    el.style.height = `${el.scrollHeight}px`;
  },
  leave(el) {
    el.style.height = '0';    // 有内联样式，需要内联改变
  }
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
    <Transition name="slide"
      v-on="transitionEvents"
    >
      <div class="ts-collapse-item__content-wrapper"
        v-show="isActiveCollapseItem"
      >
        <div class="ts-collapse-item__content"
          :id="`item-content-${name}`"
        >
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
<style scoped>
.ts-collapse-item__header {
  font-size: 30px;
}

</style>