import MovieService from "../services/Movie.service";

const initialState = {
  movieList: [],
  searchMovie: [],
  detailMovie: [],
  movieToList: [],
  favoriteList: [],
};

export const movie = {
  namespaced: true,
  state: initialState,
  actions: {
    getMovieList({ commit }, payload) {
      return MovieService.getMovieList(payload).then((res) => {
        if (res.data) commit("setMovieList", res.data);
        return Promise.resolve(res.data);
      });
    },

    searchMovie({ commit }, payload) {
      return MovieService.searchMovie(payload).then((res) => {
        if (res.data) commit("setSearchMovie", res.data);
        return Promise.resolve(res.data);
      });
    },

    movieDetail({ commit }, payload) {
      return MovieService.movieDetail(payload).then((res) => {
        if (res.data) commit("setMovieDetail", res.data);
        return Promise.resolve(res.data);
      });
    },
    addMovieToList({ commit }, payload) {
      return MovieService.addMovieToList(payload).then((res) => {
        if (res.data) commit("setMovieToList", res.data);
        return Promise.resolve(res.data);
      });
    },
    removeMovieToList({ commit }, payload) {
      return MovieService.removeMovieToList(payload).then((res) => {
        if (res.data) commit("setMovieToList", res.data);
        return Promise.resolve(res.data);
      });
    },
    getFavoriteList({ commit }) {
      return MovieService.getFavoriteList().then((res) => {
        if (res.data) commit("setFavoriteList", res.data);
        return Promise.resolve(res.data);
      });
    },
  },
  mutations: {
    deneme(state) {
      state.movieList = Object.assign([], state.searchMovie);
    },
    setMovieList(state, payload) {
      state.movieList = Object.assign([], payload);
    },
    setSearchMovie(state, payload) {
      state.searchMovie = Object.assign([], payload);
    },
    setMovieDetail(state, payload) {
      state.detailMovie = Object.assign([], payload);
    },
    setMovieToList(state, payload) {
      state.movieToList = Object.assign([], payload);
    },
    setFavoriteList(state, payload) {
      state.favoriteList = Object.assign([], payload);
    },
  },
};
