import {
    GET_POPULAR_MOVIES,
    GET_POPULAR_MOVIES_SUCCESS,
    GET_POPULAR_MOVIES_FAIL,
  } from "./actionTypes";
  
  interface initial {
    popularMovies: [];
    page: number;
    totalPages: number;
    loadingPopularMovies: boolean;
  }

  const initialState = {
    popularMovies: [],
    page: 1,
    totalPages: 1,
    loadingPopularMovies: false,
  };
  
  const HomeReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case GET_POPULAR_MOVIES:
        state = { ...state, loadingPopularMovies: true };
        break;
      case GET_POPULAR_MOVIES_SUCCESS:
        const { results, page, total_pages } = action.payload
        state = { ...state,
            popularMovies: [...state.popularMovies, ...results],
            loadingPopularMovies: false,
            page,
            totalPages: total_pages
        } as initial;
        break;
      case GET_POPULAR_MOVIES_FAIL:
        state = {
          ...state,
          loadingPopularMovies: false,
        } as initial;;
        break;
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default HomeReducer;