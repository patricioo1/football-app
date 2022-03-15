import { call, put } from 'redux-saga/effects'
import { getSingleLeagueInfo } from '../../components/API/API'
import * as leagueActions from './actions'

export function* getSingleLeagueInfoSaga(action) {
  const leagueId = action.payload.id
  try {
    const response = yield call(getSingleLeagueInfo, leagueId)
    if (response) {
      console.log('TOTO')
      yield put(leagueActions.setSingleLeagueInfo(response))
    }
  } catch {
    const error = 'Could not fetch league information'
    yield put(leagueActions.fetchAllLeaguesFailure(error))
    console.log('Could not fetch league information')
  }
}
