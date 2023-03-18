import { 
    GET_POPULAR_MOVIES,
    GET_POPULAR_MOVIES_SUCCESS,
    GET_POPULAR_MOVIES_FAIL,
    SEARCH_MOVIES,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAIL
} from "./actionTypes";


export const getPopularMovies = () => {
    return {
        type: GET_POPULAR_MOVIES,
    };
};
  
export const getPopularMoviesSuccess = (popularMovies: any) => {
    return {
        type: GET_POPULAR_MOVIES_SUCCESS,
        payload: popularMovies,
    };
};
  
export const getPopularMoviesFail = (error: any) => {
    return {
        type: GET_POPULAR_MOVIES_FAIL,
        payload: error,
    };
};


export const searchMovies = (keyword: string) => {
    return {
        type: SEARCH_MOVIES,
        payload: {
            keyword
        }
    };
};
  
export const searchMoviesSuccess = (searchResult: any) => {
    return {
        type: SEARCH_MOVIES_SUCCESS,
        payload: searchResult,
    };
};
  
export const searchMoviesFail = (error: any) => {
    return {
        type: SEARCH_MOVIES_FAIL,
        payload: error,
    };
};