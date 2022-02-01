import { call, takeLatest } from "redux-saga/effects";
import * as leagueActions from './allleagues/actions';
import { allLeaguesSaga } from "./allleagues/allLeaguesSaga";
import { getSingleLeagueInfoSaga } from "./allleagues/getSingleLeagueInfoSaga";
import { getMatchdaySaga } from "./allleagues/getMatchdaySaga";
import { refreshResultSaga } from "./allleagues/refreshResultSaga";

export default function* rootSaga() {
    yield takeLatest(leagueActions.FETCH_ALL_LEAGUES_REQUEST, allLeaguesSaga);
    yield takeLatest(leagueActions.SET_SELECTED_LEAGUE, getSingleLeagueInfoSaga);
    yield takeLatest(leagueActions.FETCH_MATCHDAY, getMatchdaySaga);
    yield call(refreshResultSaga);
}