<template>
  <app-default></app-default>
  <div id="app">
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
  height: 100%;
  /*color: #2c3e50;*/
}
</style>
