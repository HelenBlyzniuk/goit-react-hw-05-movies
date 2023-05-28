import axios from 'axios';

const API_KEY = '0cfcdf1e4fa301f56ea0fab1777678b6';


const BASEURL = 'https://api.themoviedb.org/3/';
const TRANDINGMOVIE = 'trending//movie/week'

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


// export const getMovieById = async ({ id }) => {
//   return await axios(`search?id=${id}`);
// };

// export const getMovieByQuery = async ({ query }) => {
//   return await axios(`search?query=${query}`);
// };
