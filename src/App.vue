<!--
 * @Description: 
 * @FilePath: \ts-element\src\App.vue
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from './components/Button/index.vue';
import Collapse from './components/Collapse/index.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import type { ButtonInstance } from './components/Button/types';

const buttonReference = ref<ButtonInstance | null>(null);

const activeNames = ref(['a', 'b']);

onMounted(() => {
  if (buttonReference.value) {
    console.log('buttonReference buttonVariable', buttonReference.value.buttonVariable);
    console.log('buttonReference ref', buttonReference.value.ref);
  }

  setTimeout(() => {

    activeNames.value = ['a'];

  }, 2000);
})
</script>

<template>
  <header>
    <!-- <Button type="primary"
      plain
      ref="buttonReference"
    >
      anniu
    </Button> -->
  </header>
  <main>
    <a href="#">link</a>
    <Button ref="buttonRef">Test Button</Button>
    <Button plain>Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>TS</Button>
    <Button disabled>Disabled Button</Button>
    <br/>

    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br/><br/>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br/><br/>

    <Collapse v-model="activeNames"
      accordion
    >
      <CollapseItem name="a"
        title="nice title a"
      >
        <div>
          this is a test content
        </div>
      </CollapseItem>
      <CollapseItem name="b">
        <template #title>
          <h2>slot title b</h2>
        </template>
        <h1>content h1</h1>
        <div>
          this is a test content b
        </div>
      </CollapseItem>
      <CollapseItem name="c"
        title="title c disabled"
        disabled
      >
        <div>
          this is a disabled content c
        </div>
      </CollapseItem>
      {{ activeNames }}
    </Collapse>
  </main>
</template>

<style scoped>

</style>
