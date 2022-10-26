import axios from "axios";
const API_KEY = '518d624082d6ba170a75ad4d399f89a3';



export async function apiCast(movieId) {
  const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return response.data.cast;
}

export async function apiReviews(movieId) {
  const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data.results;
}