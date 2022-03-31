import { call, put } from 'redux-saga/effects'
import { getSingleLeagueInfo } from '../../../components/API/API'
import * as leagueActions from '../actions/actions'

export function* getSingleLeagueInfoSaga(action) {
  const leagueId = action.payload.id
  try {
    const response = yield call(getSingleLeagueInfo, leagueId)
    if (response) {
      yield put(leagueActions.setSingleLeagueInfo(response))
    }
  } catch {
    const error = 'Could not fetch league informations'
    yield put(leagueActions.fetchSingleLeagueInfoFailure(error))
  }
}
