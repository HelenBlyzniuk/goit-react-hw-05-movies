import axios from 'axios';

const API_KEY = '0cfcdf1e4fa301f56ea0fab1777678b6';

const ID_URL='https://api.themoviedb.org/3/movie/'
const BASEURL = 'https://api.themoviedb.org/3/';
const TRANDINGMOVIE = 'trending/movie/week'

export const getTrendingMovies = async () => {
  return await axios.get(`${BASEURL}${TRANDINGMOVIE}?api_key=${API_KEY}`);
};


// export const getTrendingMovies = async () => {
//   fetch('https://api.themoviedb.org/3/trending/movie/week')
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('something went wrong');
//   })
// }

// https://api.themoviedb.org/3/movie/{movie_id}

export const getMovieById = async ( id ) => {
  return await axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);
};

// export const getMovieByQuery = async ({ query }) => {
//   return await axios(`search?query=${query}`);
// };
