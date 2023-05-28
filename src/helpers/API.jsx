import axios from 'axios';

const API_KEY = 'sV3yq4soqRLxBTb1rpsX90iahrskzM24JqG4PX2EwYHGhfaGozUhqoj6';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';

export const getMovies = async ({ query }) => {
  return await axios(`search?query=${query}`);
};
