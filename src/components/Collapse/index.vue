<!--
 * @Description: 
 * @FilePath: \ts-element\src\components\Collapse\index.vue
-->
<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import type { collapseItemNameType, CollapseProps, CollapseEmits } from './types';
import { collapseCotextKey } from './types';

defineOptions({
  name: 'TsCollapse',
});

const props = defineProps<CollapseProps>();

const {
  modelValue,
  accordion
} = props;

// const model = defineModel();
const emits = defineEmits<CollapseEmits>();

// 侦听器
watch(() => props.modelValue, () => {
  activeNamesArr.value = props.modelValue;
});

const activeNamesArr = ref<collapseItemNameType[]>(modelValue);

// accordion模式提示
if (accordion && activeNamesArr.value.length > 1) {
  console.warn('axxordion mode should only have one active item');
}

const handleClickCollapseItem = (collapseItemName: collapseItemNameType) => {

  if (accordion) {

    // 方式多种
    activeNamesArr.value = [activeNamesArr.value[0] === collapseItemName ? '' : collapseItemName];
  } else {

    const activeItemIndex = activeNamesArr.value.indexOf(collapseItemName);
  
    if (activeItemIndex > -1) {
      // 存在，删除对应项
      activeNamesArr.value.splice(activeItemIndex, 1);
    } else {
      // 不存在，添加一项
      activeNamesArr.value.push(collapseItemName);
    }
  }

  emits('update:modelValue', activeNamesArr.value);
  emits('change', activeNamesArr.value);
};

provide(collapseCotextKey, {
  activeNames: activeNamesArr,
  handleClickCollapseItem
});

</script>

<template>
  <div class="ts-collapse">
    <slot></slot>
  </div>
</template>
<style>

</style>