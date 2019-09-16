import { all, fork, put, takeLatest, select } from 'redux-saga/effects'
import { alterTitleFromSagaCompletion } from './../actions'

export function * watchAlterTitle () {
  yield takeLatest('ALTER_TITLE_FROM_SAGA', function* () {
    let { title } = yield select(state => state.home.home.input)
    title = title + '（change from saga）'
    yield put(alterTitleFromSagaCompletion(undefined, title))
  })
}

export default function* rootSaga() {
  yield all([fork(watchAlterTitle)]);
}