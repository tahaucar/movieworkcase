<template>
  <div class="d-flex flex-column">
    <NavbarDefault />
    <div>
      <slot />
    </div>
  </div>
</template>
<script>
import NavbarDefault from "@/layouts/NavbarDefault";
export default {
  components: { NavbarDefault },
};
</script>
