import { combineReducers } from 'redux'
import { allLeaguesReducer } from './allleagues/allLeaguesReducer'

export const rootReducer = combineReducers({
    leagues: allLeaguesReducer
})