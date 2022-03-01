import { combineReducers } from 'redux'
import { allLeaguesReducer } from './allleagues/reducers/allLeaguesReducer'
import { matchDayReducer } from './allleagues/reducers/matchdayReducer'
import { singleLeagueInfoReducer } from './allleagues/reducers/singleLeagueInfoReducer'

export const rootReducer = combineReducers({
    leagues: allLeaguesReducer,
    matchday: matchDayReducer,
    singleLeagueInfo: singleLeagueInfoReducer
})