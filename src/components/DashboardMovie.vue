<template>
  <div id="dasboard" class="row">
    <div
      v-for="(item, index) in movieList.results"
      :key="index"
      class="col-3 d-flex justify-content-center mt-4"
    >
      <b-card
        :title="item.title"
        :img-src="'https://image.tmdb.org/t/p/w500' + item.backdrop_path"
        bg-variant="dark"
        title-tag="h5"
        text-variant="secondary"
        img-alt="Image"
        img-top
        style="max-width: 18rem"
        class="mb-2"
      >
        <b-card-text>
          {{ item.vote_average }}
        </b-card-text>
        <!--        <template #footer>-->
        <!--          <small class="text-secondary">{{ item.release_date }}</small>-->
        <!--        </template>-->
        <b-button href="#" variant="outline-secondary" class="mb-3"
          >Favorilere Ekle
        </b-button>
        <b-card-text>
          {{ item.release_date }}
        </b-card-text>
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
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    ...mapActions("movie", ["getMovieList"]),
    getMovie(id) {
      this.getMovieList(id);
    },
  },
  computed: {
    ...mapState("movie", ["movieList"]),
    rows() {
      return this.movieList.total_pages;
    },
  },
  created() {
    this.getMovieList(1);
  },
};
</script>

<style scoped>
#dasboard {
  background-color: black;
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
