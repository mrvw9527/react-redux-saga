import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]
middleware.push(logger)

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
)

store.run = () => { sagaMiddleware.run(rootSaga) }

export default store;