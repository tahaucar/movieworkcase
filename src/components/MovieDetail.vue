<template>
  <div id="movie-detail">
    <div class="card-dark">
      <div class="card-header">
        <h2 style="margin: 0; font-weight: 700">{{ detailMovie.title }}</h2>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-4 mx-auto mx-sm-0 mb-3 mb-sm-0">
            <img
              :src="
                'https://image.tmdb.org/t/p/w500' + detailMovie.backdrop_path
              "
              :alt="detailMovie.title"
              class="img-fluid"
              style="height: 600px !important; width: 100% !important"
            />
          </div>
          <div class="col-sm-8">
            <article class="text-white-50">
              <div class="lh-lg text-sm-start">
                <div class="pb-2">
                  <strong class="text-white-50">Açıklama: </strong>
                  <span class="text-white" style="font-weight: 700">
                    {{ detailMovie.overview }}
                  </span>
                </div>
                <div class="pb-2">
                  <strong class="text-white-50">IMDb: </strong>
                  <span class="badge text-bg-secondary">{{
                    detailMovie.vote_average.toFixed(1) +
                    " ( " +
                    detailMovie.vote_count +
                    " Oy" +
                    " )"
                  }}</span>
                </div>
                <div class="pb-2">
                  <strong class="text-white-50">Süre: </strong>
                  <span class="badge text-bg-secondary">{{
                    detailMovie.runtime + " dk."
                  }}</span>
                </div>

                <div class="pb-2">
                  <strong class="text-white-50">Bütçe: </strong>
                  <span
                    class="badge text-bg-secondary"
                    :options="{ currency: 'EUR' }"
                    >{{ formatPrice(detailMovie.budget) + " $" }}</span
                  >
                </div>

                <div class="pb-2">
                  <strong class="text-white-50">Yayınlanma Tarihi: </strong>
                  <span class="badge text-bg-secondary">{{
                    detailMovie.release_date
                  }}</span>
                </div>
                <div class="pb-2">
                  <strong class="text-white-50">Dil: </strong>
                  <span class="badge text-bg-secondary">{{
                    detailMovie.spoken_languages[0].name
                  }}</span>
                </div>
                <div class="pb-2">
                  <strong class="text-white-50">Tür: </strong>
                  <span
                    class="badge text-bg-secondary"
                    v-for="(item, index) in detailMovie.genres"
                    :key="index"
                    style="margin-right: 10px !important"
                  >
                    {{ item.name }}</span
                  >
                </div>
                <div class="pb-2 mt-2">
                  <span class="badge text-bg-warning">
                    {{
                      detailMovie.adult
                        ? "Yetişkinler İçin Uygundur!"
                        : "Genel İzleyici İçin Uygundur"
                    }}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "MovieDetail",
  methods: {
    ...mapActions("movie", ["movieDetail"]),
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  computed: {
    ...mapState("movie", ["detailMovie"]),
  },
  created() {
    this.movieDetail(this.$route.params.id);
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1090px) {
  #movie-detail {
    padding: 10px !important;
  }
}
#movie-detail {
  padding: 40px 100px 20px 100px;
}
</style>
