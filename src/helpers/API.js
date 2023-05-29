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
  return await axios.get(`${BASEURL}movie/${id}/credits?api_key=${API_KEY}`)
}

// export const getMovieByQuery = async ({ query }) => {
//   return await axios(`search?query=${query}`);
// };
