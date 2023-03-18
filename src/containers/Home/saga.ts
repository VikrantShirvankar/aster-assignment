import { takeLatest, put, call, all } from "redux-saga/effects";

import { GET_POPULAR_MOVIES, SEARCH_MOVIES } from "./actionTypes";

import {
  getPopularMoviesSuccess,
  getPopularMoviesFail,
} from "./actions";

import { getPopularMovies, searchMovies } from "../../helper/apis";

function* onGetPopularMovies(): any {
    try {
        const response = yield call(getPopularMovies);
        yield put(getPopularMoviesSuccess(response));
    } catch (error: any) {
        yield put(getPopularMoviesFail(error.response));
    }
}

function* onSearchMovies(payload: any): any {
    const { keyword } = payload
    try {
      const response = yield call(searchMovies(keyword));
      console.log('response >>', response)
      yield put(getPopularMoviesSuccess(response));
    } catch (error: any) {
      yield put(getPopularMoviesFail(error.response));
    }
}

export default function* watchAll() {
    yield takeLatest(GET_POPULAR_MOVIES, onGetPopularMovies)
    yield takeLatest(SEARCH_MOVIES, onSearchMovies)
}