import axios from 'axios';

const API_KEY = '0cfcdf1e4fa301f56ea0fab1777678b6';

const ID_URL = 'https://api.themoviedb.org/3/movie/';
const BASEURL = 'https://api.themoviedb.org/3/';
const TRANDINGMOVIE = 'trending/movie/week';
// const CAST = 'movie/{movie_id}/credits';

export const getTrendingMovies = async () => {
  return await axios.get(`${BASEURL}${TRANDINGMOVIE}?api_key=${API_KEY}`);
};


export const getMovieById = async ( id ) => {
  return await axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);
};

export const getCast = async (id) => {
  return await axios.get(`${BASEURL}movie/${id}/credits?api_key=${API_KEY}&page=1&12per_page`)
}

export const getReview = async (id) => {
  return await axios.get(`${BASEURL}movie/${id}/reviews?api_key=${API_KEY}`)
}


export const getMovieByQuery = async ( query ) => {
  return await axios.get(`${BASEURL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}&`);
};
