<template>
  <div>
    <p>{{ detailMovie.title }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "MovieDetail",
  methods: {
    ...mapActions("movie", ["movieDetail"]),
  },
  computed: {
    ...mapState("movie", ["detailMovie"]),
  },
  created() {
    this.movieDetail(this.$route.params.id);
  },
};
</script>

<style scoped></style>