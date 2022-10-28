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