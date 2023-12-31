<template>
  <home-component />
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
/* eslint-disable vue/no-unused-components */
import HelloWorld from './components/HelloWorld.vue';
import HomeComponent from './components/home-component.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    HomeComponent,
  }
});
</script>

<style lang="sass" scoped>
.logo
  border: 2px solid green
</style>
