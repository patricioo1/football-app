import { combineReducers } from 'redux'
import { allLeaguesReducer } from './allleagues/reducers/allleagues/allLeaguesReducer'
import { matchDayReducer } from './allleagues/reducers/matchday/matchdayReducer'
import { singleLeagueInfoReducer } from './allleagues/reducers/singleLeagueInfo/singleLeagueInfoReducer'
import { singleLeagueStandingsReducer } from './allleagues/reducers/singleLeagueInfo/singleLeagueStandings/singleLeagueStandingsReducer'

export const rootReducer = combineReducers({
  leagues: allLeaguesReducer,
  matchday: matchDayReducer,
  singleLeagueInfo: singleLeagueInfoReducer,
  standings: singleLeagueStandingsReducer
})

export type RootState = ReturnType<typeof rootReducer>
