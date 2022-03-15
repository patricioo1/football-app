import { call, put } from 'redux-saga/effects'
import { getAllLeagues } from '../../../components/API/API'
import * as leaguesActions from '../actions/actions'
import { availableLeaguesId } from '../availableLeaguesId'

export function* allLeaguesSaga() {
  try {
    const response = yield call(getAllLeagues)
    if (response?.competitions) {
      const fetchedLeagues = response.competitions
      const filteredLeagues = fetchedLeagues.filter(league =>
        availableLeaguesId.includes(league.id)
      )
      yield put(leaguesActions.fetchAllLeaguesSuccess(filteredLeagues))
    }
  } catch {
    const error = 'Could not fetch leagues'
    yield put(leaguesActions.fetchAllLeaguesFailure(error))
  }
}
