<!--
 * @Description: 
 * @FilePath: \ts-element\src\components\Collapse\index.vue
-->
<script setup lang="ts">
import { ref, provide } from 'vue';
import type { collapseItemNameType } from './types';
import { collapseCotextKey } from './types';

defineOptions({
  name: 'TsCollapse',
});

// defineProps<CollapseProps>();
const activeNamesArr = ref<collapseItemNameType[]>([]);


const handleClickCollapseItem = (collapseItemName: collapseItemNameType) => {

  const activeItemIndex = activeNamesArr.value.indexOf(collapseItemName);

  if (activeItemIndex > -1) {
    // 存在，删除对应项
    activeNamesArr.value.splice(activeItemIndex, 1);
  } else {
    // 不存在，添加一项
    activeNamesArr.value.push(collapseItemName);
  }
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