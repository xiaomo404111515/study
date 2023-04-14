<template>
<div class="app">
  <router-view/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
}
</script>

<style>
.app{ 
  width: 100%;
  height: 500px;
  /* background: red; */
}
</style>
