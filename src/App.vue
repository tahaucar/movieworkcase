<template>
  <div id="app">
    <app-default></app-default>
    <router-view />
  </div>
</template>

<script>
import AppDefault from "@/layouts/AppDefault";
export default {
  name: "App",
  components: { AppDefault },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  overflow-x: hidden;
  /*color: #2c3e50;*/
}
</style>
