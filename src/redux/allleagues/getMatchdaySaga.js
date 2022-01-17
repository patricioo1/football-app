import { call, put } from "redux-saga/effects";
import * as leaguesActions from './actions'
import { getMatchday } from "../../components/API/API";
import { availableLeaguesId } from "./availableLeaguesId";

export function* getMatchdaySaga(action) {
    const actionDay = action.payload;
    try {
        const response = yield call(getMatchday, availableLeaguesId, actionDay)
        if (response?.matches) {
            const data = response.matches;
            const getScoreValue = (scoreObject) => {
                if (scoreObject?.penalties?.homeTeam !== null) {
                    return scoreObject.penalties
                }
                if (scoreObject?.extraTime?.homeTeam !== null) {
                    return scoreObject.extraTime
                }
                if (scoreObject?.fullTime?.homeTeam !== null) {
                    return scoreObject.fullTime;
                }
                if (scoreObject?.halfTime?.homeTeam !== null) {
                    return scoreObject.halfTime;
                }
                return {homeTeam: '-', awayTeam: '-'};
            }
            const parsedResponse = data.map((match) => {
                return {
                    ...match,
                    matchScore: getScoreValue(match.score),
                }
            })
            yield put(leaguesActions.setMatchday(parsedResponse))
        }
    }
    catch {
        console.log('error');
    }
}