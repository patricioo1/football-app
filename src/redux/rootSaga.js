import { call, takeLatest } from 'redux-saga/effects'
import * as leagueActions from './allleagues/actions/actions'
import { allLeaguesSaga } from './allleagues/saga/allLeaguesSaga'
import { getSingleLeagueInfoSaga } from './allleagues/saga/getSingleLeagueInfoSaga'
import { getMatchdaySaga } from './allleagues/saga/getMatchdaySaga'
import { refreshResultSaga } from './allleagues/saga/refreshResultSaga'
import { singleLeagueStandingsSaga } from './allleagues/saga/singleLeagueStandingsSaga'

export default function* rootSaga() {
  yield takeLatest(leagueActions.FETCH_ALL_LEAGUES_REQUEST, allLeaguesSaga)
  yield takeLatest(leagueActions.SET_SELECTED_LEAGUE, getSingleLeagueInfoSaga)
  yield takeLatest(leagueActions.FETCH_MATCHDAY, getMatchdaySaga)
  yield takeLatest(leagueActions.FETCH_SINGLE_LEAGUE_STANDINGS, singleLeagueStandingsSaga)
  yield call(refreshResultSaga)
}
