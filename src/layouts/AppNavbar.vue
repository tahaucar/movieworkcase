<template>
  <b-navbar
    class="customNavbar fixed-top"
    toggleable="lg"
    variant="dark"
    type="dark"
  >
    <b-navbar-brand href="/">
      <img src="@/assets/logo.png" alt="" style="width: 50px; height: 30px" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="customNavbar">
        <b-nav-item href="/">Anasayfa</b-nav-item>
        <b-nav-item href="/favorite">Favoriler</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ms-auto">
        <b-nav-form style="margin-right: 10px">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Film Ara"
            v-model="movie"
            max-lengt="50"
          ></b-form-input>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "NavbarDefault",
  data() {
    return {
      movie: "",
    };
  },
  methods: {
    ...mapActions("movie", ["searchMovie", "getMovieList"]),
  },
  watch: {
    movie(nw) {
      if (nw !== "") {
        this.searchMovie(nw);
      } else {
        this.getMovieList(1);
      }
    },
  },
};
</script>

<style scoped>
.customNavbar /deep/ > li > a {
  color: #6c757d;
}
.customNavbar /deep/ > div > a {
  color: #6c757d;
}

.customNavbar /deep/ > div.active > a,
.customNavbar /deep/ > div > a:hover {
  color: #000000;
}
.customNavbar /deep/ > li.active > a,
.customNavbar /deep/ > li > a:hover {
  color: #000000;
}
</style>
