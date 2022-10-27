import axios from "axios";

import {Key} from './Key'


export async function apiCast(movieId) {
  const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Key}&language=en-US`);
  return response.data.cast;
}

export async function apiReviews(movieId) {
  const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Key}&language=en-US&page=1`);
  return response.data.results;
}
export async function apiHome() {
  const response = await axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=${Key}`);
  return response.data.results;
}
export async function apiSearch(query) {
  const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${query}`);
  return response.data;
}
export async function apiDetails(movieId) {
  const response = await axios(`/movie/${movieId}?api_key=${Key}`);
  return response.data;
}