import { 
    GET_MOVIE_LIST,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_FAIL
} from "./actionTypes";


export const getMovieList = (keyWord?: string) => {
    return {
        type: GET_MOVIE_LIST,
        payload: {
            keyword: keyWord
        }
    };
};
  
export const getMovieListSuccess = (movieList: any) => {
    return {
        type: GET_MOVIE_LIST_SUCCESS,
        payload: movieList,
    };
};
  
export const getMovieListFail = (error: string) => {
    return {
        type: GET_MOVIE_LIST_FAIL,
        payload: error,
    };
};