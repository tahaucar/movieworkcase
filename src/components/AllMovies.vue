<template>
  <div id="all-movies" class="row">
    <div
      v-for="(item, index) in movieList.results"
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
        @click="movieDetail(item.id)"
        class="mb-2"
      >
        <b-button
          href="#"
          variant="outline-secondary"
          class="mb-3 mt-3"
          @click="addMovieList(item.id)"
          >Favorilere Ekle
        </b-button>
        <b-card-text>
          {{ item.release_date }}
        </b-card-text>
        <b-badge pill>{{ item.vote_average.toFixed(1) }} </b-badge>
      </b-card>
    </div>
    <div class="mt-3 d-flex justify-content-center">
      <b-pagination
        v-model="currentPage"
        pills
        class="customPagination"
        @click="getMovie(currentPage)"
        :total-rows="rows"
      ></b-pagination>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
import router from "@/router";

export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    ...mapActions("movie", ["getMovieList", "addMovieToList"]),
    getMovie(id) {
      this.getMovieList(id);
    },
    movieDetail(id) {
      router.push(`/detail/${id}`);
    },
    addMovieList(id) {
      this.addMovieToList(id).then(() => {
        this.getMovieList(1);
      });
    },
  },
  computed: {
    ...mapState("movie", ["movieList", "searchMovie"]),
    ...mapMutations("movie", ["reloadMovieList"]),
    rows() {
      return 10000;
      // return this.movieList.total_pages; Api tarafından page 500 den fazla gelmediği için page'i 500 le sınırlamak için 10000 yazıldı.
    },
  },
  created() {
    this.getMovieList(1);
  },
  watch: {
    searchMovie(nw) {
      if (nw) {
        this.reloadMovieList;
      }
    },
  },
};
</script>

<style scoped>
#all-movies {
  padding: 20px;
}
</style>
