import { put, select } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
import { fetchMatchday } from "./actions";



export function* refreshResultSaga() {
    while(true) {
        const currentDate = yield select(state => state.leagues.date)
        if (currentDate) {
            yield put(fetchMatchday(currentDate));
            yield delay(10000);
        }
    }
}