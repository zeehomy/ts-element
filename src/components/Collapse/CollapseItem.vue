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
    el.style.height = `${el.scrollHeight}px`;
  },
  // onLeave(el) {
    
  // }
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
  },
  leave(el) {
    el.style.height = '0';
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