import { all, fork } from "redux-saga/effects";

import HomeSaga from "./containers/Home/saga";

export default function* rootSaga() {
  yield all([fork(HomeSaga)]);
}