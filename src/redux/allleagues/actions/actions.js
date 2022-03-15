import { createAction } from 'redux-actions'

export const FETCH_ALL_LEAGUES_REQUEST = 'leagues/FETCH_ALL_LEAGUES_REQUEST'
export const FETCH_ALL_LEAGUES_SUCCESS = 'leagues/FETCH_ALL_LEAGUES_SUCCESS'
export const FETCH_ALL_LEAGUES_FAILURE = 'leagues/FETCH_ALL_LEAGUES_FAILURE'
export const SET_SELECTED_LEAGUE = 'leagues/SET_SELECTED_LEAGUE'
export const FETCH_SINGLE_LEAGUE_INFO = 'leagues/SET_SINGLE_LEAGUE_INFO'
export const SET_SINGLE_LEAGUE_INFO = 'leagues/SET_SINGLE_LEAGUE_INFO'
export const FETCH_MATCHDAY = '/leagues/FETCH_MATCHDAY'
export const SET_MATCHDAY = 'leagues/SET_MATCHDAY'

export const fetchAllLeaguesRequest = createAction(FETCH_ALL_LEAGUES_REQUEST)
export const fetchAllLeaguesSuccess = createAction(FETCH_ALL_LEAGUES_SUCCESS)
export const fetchAllLeaguesFailure = createAction(FETCH_ALL_LEAGUES_FAILURE)
export const setSelectedLeague = createAction(SET_SELECTED_LEAGUE)
export const fetchSingleLeaguesInfo = createAction(FETCH_SINGLE_LEAGUE_INFO)
export const setSingleLeagueInfo = createAction(SET_SINGLE_LEAGUE_INFO)
export const fetchMatchday = createAction(FETCH_MATCHDAY)
export const setMatchday = createAction(SET_MATCHDAY)
