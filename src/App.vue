<!--
 * @Description: 
 * @FilePath: \ts-element\src\App.vue
-->
<script setup lang="ts">
import { ref,onMounted } from 'vue';
import Button from './components/Button/index.vue';
import type { ButtonInstance } from './components/Button/types';

const buttonReference = ref<ButtonInstance | null>(null);

onMounted(() => {
  if (buttonReference.value) {
    console.log('buttonReference buttonVariable', buttonReference.value.buttonVariable);
    console.log('buttonReference ref', buttonReference.value.ref);
  }
})
</script>

<template>
  <header>
    <Button type="primary"
      plain
      ref="buttonReference"
    >
      anniu
    </Button>
  </header>
  <main>

  </main>
</template>

<style scoped>

</style>
