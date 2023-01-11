import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  nowPlaying: 'now_playing',
  popular: 'popular',
  topRates: 'top_rated',
  upcoming: 'upcoming',
};

export const tvType = {
  airingToday: 'airing_today',
  onTheAir: 'on_the_air',
  popular: 'popular',
  topRates: 'top_rated',
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = 'movie/' + type;
    return axiosClient(url, params);
  },
  getTvList: (type, params) => {
    const url = 'tv/' + type;
    return axiosClient(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + '/' + id + 'videos';
    return axiosClient(url, { params: {} });
  },
  detail: (cate, id, params) => {
    const url = category[cate] + '/' + id;
    return axiosClient(url, params);
  },
  similar: (cate, id) => {
    const url = category[cate] + '/' + id + '/similar';
    return axiosClient(url, { params: {} });
  },
  search: (cate, params) => {
    const url = 'search/' + category[cate];
    return axiosClient(url, params);
  },
};

export default tmdbApi;
