<template>
  <div id="favorite-movies" class="row">
    <div
      v-for="(item, index) in favoriteList.items"
      :key="index"
      class="col-sm-3 d-flex justify-content-center mt-4"
    >
      <b-card
        :title="item.title"
        :img-src="'https://image.tmdb.org/t/p/w500' + item.backdrop_path"
        bg-variant="dark"
        title-tag="h5"
        text-variant="secondary"
        img-height="300"
        class="mb-2"
        @click="movieDetail(item.id)"
      >
        <b-button
          href="#"
          variant="outline-secondary"
          class="mb-3 mt-3"
          @click="removeMovieList(item.id)"
          >Favorilerden Kaldır
        </b-button>
        <b-card-text>
          {{ item.release_date }}
        </b-card-text>
        <b-badge pill>{{ item.vote_average }} </b-badge>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "@/router";

export default {
  name: "FavariteMovies",
  methods: {
    ...mapActions("movie", ["getFavoriteList", "removeMovieToList"]),
    removeMovieList(id) {
      this.removeMovieToList(id).then(() => {
        this.getFavoriteList();
      });
    },
    movieDetail(id) {
      router.push(`/detail/${id}`);
    },
  },
  computed: {
    ...mapState("movie", ["favoriteList"]),
  },
  created() {
    this.getFavoriteList();
  },
};
</script>

<style scoped>
#favorite-movies {
  padding: 20px;
}
</style>
