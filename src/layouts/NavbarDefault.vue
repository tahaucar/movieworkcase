<template>
  <b-navbar toggleable="lg" variant="dark" type="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Anasayfa</b-nav-item>
        <b-nav-item href="/favorite">Favoriler</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ms-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Bul"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Bul</b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "NavbarDefault",
  data() {
    return {};
  },
};
</script>

