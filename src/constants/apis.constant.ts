// TODO: This var should be moved in rnv file
export const API_KEY = '5b5a0b26edb02f216f6e0cb0b8c5c228'
export const BASE_URL = 'https://api.themoviedb.org/3'
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

// Movie list related apis
export const GET_POPULAR_MOVIES = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const SEARCH_MOVIES = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`