import { getSingleLeagueInfo } from "../../components/API/API";
import { call, put } from "redux-saga/effects";
import * as LeagueActions from './actions'

export function* getSingleLeagueInfoSaga(action) {
    const leagueId = action.payload.id;
    try {
        const response = yield call(getSingleLeagueInfo, leagueId);
        if (response) {
            yield put(LeagueActions.setSingleLeagueInfo(response))
        }
    }
    catch {
        console.log('error');
    }
}