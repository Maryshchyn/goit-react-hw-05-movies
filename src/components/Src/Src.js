import axios from "axios";
const KEY = '518d624082d6ba170a75ad4d399f89a3';



export async function apiCast(movieId) {
  const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
  return response.data.cast;
}

export async function apiReviews(movieId) {
  const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`);
  return response.data.results;
}
export async function apiHome() {
  const response = await axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`);
  return response.data.results;
}
export async function apiSearch(query) {
  const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`);
  return response.data;
}
export async function apiDetails(movieId) {
  const response = await axios(`/movie/${movieId}?api_key=${KEY}`);
  return response.data;
}