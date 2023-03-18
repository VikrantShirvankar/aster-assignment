import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import HomeReducer from './containers/Home/reducer'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware]})
sagaMiddleware.run(rootSaga);

export default store
