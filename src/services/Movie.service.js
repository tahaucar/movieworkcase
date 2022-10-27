import axios from "axios";

class MovieService {
    // addPlan(data) {
    //     return axios.post(
    //         `${process.env.VUE_APP_USER_API_URL}cbeylemplan/plan/ekle`,
    //         {
    //             planAdi: data.planName,
    //             baslangicTarihi: data.startDate,
    //             bitisTarihi: data.endDate
    //         },
    //         {
    //             headers: authHeader()
    //         }
    //     );
    // }

    getMovieList(page) {
        return axios.get(
            `${process.env.VUE_APP_API_URL}discover/movie`,
            {
                params: {
                    page: page,
                    api_key: "08a71e9b1b230c8fb77d1bc5f9526f19",
                    sort_by: "popularity.desc"
                },
                //     headers: authHeader()
            }
        );
    }

}

export default new MovieService();
