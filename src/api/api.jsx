import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = '024cc5f09908565df80effcaf2ef8e5e';

export const fetchAll = async () => {
  const response = await axios.get(
    `trending/all/day?language=en-US&api_key=${key}`
  );
  return response.data;
};

export const fetchWord = async query => {
  const response = await axios.get(
    `search/movie?api_key=${key}&query=${query}`
  );
  return response.data;
};

export const fetchId = async id => {
  const response = await axios.get(`movie/${id}?api_key=${key}`);
  return response.data;
};

export const fetchCredits = async id => {
  const response = await axios.get(`movie/${id}/credits?api_key=${key}`);
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${key}`);
  return response.data;
};
