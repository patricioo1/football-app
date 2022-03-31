import { call, put } from "redux-saga/effects";
import * as leagueActions from '../actions/actions'
import { getSingleLeagueStandings } from "../../../components/API/API";

export function* singleLeagueStandingsSaga(action) {
    const actionId = action.payload
    try {
        const response = yield call(getSingleLeagueStandings, actionId)
        if (response) {
            yield put(leagueActions.setSingleLeagueStandings(response))
        }
    } catch {
        const error = 'We could not fetch league standing'
        yield put(leagueActions.singleLeagueStandingsFailure(error))
    }
}