<template>
  <div class="d-flex flex-column">
    <AppNavbar />
    <div>
      <slot />
    </div>
  </div>
</template>
<script>
import AppNavbar from "@/layouts/AppNavbar";
export default {
  components: { AppNavbar },
};
</script>
