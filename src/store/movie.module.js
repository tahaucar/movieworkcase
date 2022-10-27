import MovieService from "../services/Movie.service";

const initialState = {
  movieList: [],
};

export const movie = {
  namespaced: true,
  state: initialState,
  actions: {
    // changeDetailTab({ commit }, payload) {
    //     commit("changeDetailTab", payload);
    // },
    //
    getMovieList({ commit }, payload) {
      return MovieService.getMovieList(payload).then((res) => {
        if (res.data) commit("setMovieList", res.data);
        return Promise.resolve(res.data);
      });
    },

    // updatePlan({ commit }, payload) {
    //     return CbEylemService.updatePlan(payload).then(res => {
    //         if (res.data.data) commit("setPlan", res.data.data);
    //         return Promise.resolve(res.data);
    //     });
    // },

    // addState({ commit }, payload) {
    //     return CbEylemService.addState(payload).then(res => {
    //         if (res.data.data) commit("setStates", res.data.data);
    //         return Promise.resolve(res.data);
    //     });
    // },
  },
  mutations: {
    // setPlanList(state, payload) {
    //     state.planList = Object.assign([], payload.liste);
    //     state.planPagination = Object.assign([], payload.sayfalama);
    // },
    setMovieList(state, payload) {
      state.movieList = Object.assign([], payload);
    },
  },
};
