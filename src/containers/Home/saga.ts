import { takeLatest, put, call, all } from "redux-saga/effects";

import { GET_MOVIE_LIST } from "./actionTypes";

import { getMovieListSuccess, getMovieListFail } from "./actions";

import { getMovieList } from "../../helper/apis";

function* onGetMovieList({ payload }: any): any {
    try {
        const response = yield call(getMovieList, payload.keyword);
        yield put(getMovieListSuccess(response));
    } catch (error: any) {
        yield put(getMovieListFail(error.response));
    }
}

export default function* watchAll() {
    yield takeLatest(GET_MOVIE_LIST, onGetMovieList)
}