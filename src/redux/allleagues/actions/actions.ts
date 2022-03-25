import { createAction } from 'redux-actions'
import { LeagueType, AppError } from '../../../components/API/types'
import { MatchdayProperties } from '../reducers/matchday/matchdayTypes'

export const FETCH_ALL_LEAGUES_REQUEST = 'leagues/FETCH_ALL_LEAGUES_REQUEST'
export const FETCH_ALL_LEAGUES_SUCCESS = 'leagues/FETCH_ALL_LEAGUES_SUCCESS'
export const FETCH_ALL_LEAGUES_FAILURE = 'leagues/FETCH_ALL_LEAGUES_FAILURE'
export const SET_SELECTED_LEAGUE = 'leagues/SET_SELECTED_LEAGUE'
export const SET_SINGLE_LEAGUE_INFO = 'leagues/SET_SINGLE_LEAGUE_INFO'
export const FETCH_MATCHDAY = '/leagues/FETCH_MATCHDAY'
export const SET_MATCHDAY = 'leagues/SET_MATCHDAY'

export const fetchAllLeaguesRequest = createAction<undefined>(FETCH_ALL_LEAGUES_REQUEST)
export const fetchAllLeaguesSuccess = createAction<LeagueType[]>(FETCH_ALL_LEAGUES_SUCCESS)
export const fetchAllLeaguesFailure = createAction<AppError>(FETCH_ALL_LEAGUES_FAILURE)
export const setSelectedLeague = createAction(SET_SELECTED_LEAGUE)
export const setSingleLeagueInfo = createAction(SET_SINGLE_LEAGUE_INFO)
export const fetchMatchday = createAction(FETCH_MATCHDAY)
export const setMatchday = createAction<MatchdayProperties[]>(SET_MATCHDAY)
