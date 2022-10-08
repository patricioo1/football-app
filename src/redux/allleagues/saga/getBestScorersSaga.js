import { call, put } from 'redux-saga/effects'
import { getBestScorers } from '../../../components/API/API'
import * as leagueActions from '../actions/actions'

export function* singleLeagueBestScorersSaga(action) {
  const actionCode = action.payload
  try {
    const response = yield call(getBestScorers, actionCode)
    if (response) {
      yield put(leagueActions.setBestScorers(response.scorers))
    }
  } catch {
    const error = 'Could not fetch best league scorers'
    yield put(leagueActions.bestScorersFailure(error))
  }
}
