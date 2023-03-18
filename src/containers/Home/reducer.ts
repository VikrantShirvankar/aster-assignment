import {
    GET_MOVIE_LIST,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_FAIL
  } from "./actionTypes";
  
  interface initialState {
    movieList: []
    loadingMovieList: boolean;
    error: string
  }

  const initialState = {
    movieList: [],
    loadingMovieList: false,
    error: ''
  };
  
  const HomeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_MOVIE_LIST: {
            state = { ...state, loadingMovieList: true, error: '' };
            break;
        }
        case GET_MOVIE_LIST_SUCCESS: {
            const { results } = action.payload
            state = { ...state, movieList: [...results], loadingMovieList: false, error: '' } as initialState;
            break;
        }
        case GET_MOVIE_LIST_FAIL: {
            state = { ...state, loadingMovieList: false, error: 'Error loading movie data' } as initialState;;
            break;
        }
        default: {
            state = { ...state };
            break;
        }
    }
    return state;
  };
  
  export default HomeReducer;