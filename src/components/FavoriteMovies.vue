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
        img-alt="Image"
        img-height="300"
        img-top
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
  background-color: black;
  padding: 20px;
}
.customPagination /deep/ > li > button {
  color: #6c757d;
  background-color: #212529 !important;
  border-color: #212529;
}
.customPagination /deep/ > li > span {
  color: #6c757d;
  background-color: #212529 !important;
  border-color: #212529;
}

.customPagination /deep/ > li.active > button,
.customPagination /deep/ > li > button:hover {
  color: #000000;
  background-color: #6c757d !important;
  border-color: #212529;
}
.customPagination /deep/ > li.active > span,
.customPagination /deep/ > li > span:hover {
  color: #6c757d;
  background-color: #212529 !important;
  border-color: #212529;
}
</style>
