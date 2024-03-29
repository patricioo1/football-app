import { combineReducers } from 'redux'
import { allLeaguesReducer } from './allleagues/reducers/allleagues/allLeaguesReducer'
import { matchDayReducer } from './allleagues/reducers/matchday/matchdayReducer'
import { singleLeagueBestScorersReducer } from './allleagues/reducers/singleLeagueInfo/SingleLeagueBestScorers/SingleLeagueBestScorersReducer'
import { singleLeagueInfoReducer } from './allleagues/reducers/singleLeagueInfo/singleLeagueInfoReducer'

export const rootReducer = combineReducers({
  leagues: allLeaguesReducer,
  matchday: matchDayReducer,
  singleLeagueInfo: singleLeagueInfoReducer,
  bestScorers: singleLeagueBestScorersReducer
})

export type RootState = ReturnType<typeof rootReducer>
