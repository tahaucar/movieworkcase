import axios from "axios";

class MovieService {
  getMovieList(data) {
    return axios.get(`${process.env.VUE_APP_API_URL}discover/movie`, {
      params: {
        page: data,
        api_key: "08a71e9b1b230c8fb77d1bc5f9526f19",
        sort_by: "popularity.desc",
      },
    });
  }
  searchMovie(data) {
    return axios.get(`${process.env.VUE_APP_API_URL}search/movie`, {
      params: {
        page: 1,
        query: data,
        api_key: "08a71e9b1b230c8fb77d1bc5f9526f19",
      },
    });
  }
  movieDetail(data) {
    return axios.get(`${process.env.VUE_APP_API_URL}movie/${data}`, {
      params: {
        api_key: "08a71e9b1b230c8fb77d1bc5f9526f19",
      },
    });
  }
  addMovieToList(data) {
    return axios.post(
      `${process.env.VUE_APP_API_URL}list/8224443/add_item?api_key=08a71e9b1b230c8fb77d1bc5f9526f19&session_id=5e69100fe258d177a4162c662c23996bdb836a6f`,
      {
        media_id: data,
      }
    );
  }

  removeMovieToList(data) {
    return axios.post(
      `${process.env.VUE_APP_API_URL}list/8224443/remove_item?api_key=08a71e9b1b230c8fb77d1bc5f9526f19&session_id=5e69100fe258d177a4162c662c23996bdb836a6f`,
      {
        media_id: data,
      }
    );
  }
  getFavoriteList() {
    return axios.get(`${process.env.VUE_APP_API_URL}list/8224443`, {
      params: {
        api_key: "08a71e9b1b230c8fb77d1bc5f9526f19",
      },
    });
  }
}

export default new MovieService();
