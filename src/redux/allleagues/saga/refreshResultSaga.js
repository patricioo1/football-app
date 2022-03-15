import { put, select, delay } from 'redux-saga/effects'

import { fetchMatchday } from '../actions/actions'

export function* refreshResultSaga() {
  while (true) {
    const currentDate = yield select(state => state.leagues.date)
    if (currentDate) {
      yield put(fetchMatchday(currentDate))
      yield delay(10000)
    }
  }
}
