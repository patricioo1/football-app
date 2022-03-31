import { createAction } from 'redux-actions'
import { AllLeaguesType, MatchdayProperties, AppError, LeagueStandings } from '../../../components/API/types'

export const FETCH_ALL_LEAGUES_REQUEST = 'leagues/FETCH_ALL_LEAGUES_REQUEST'
export const FETCH_ALL_LEAGUES_SUCCESS = 'leagues/FETCH_ALL_LEAGUES_SUCCESS'
export const FETCH_ALL_LEAGUES_FAILURE = 'leagues/FETCH_ALL_LEAGUES_FAILURE'

export const SET_SELECTED_LEAGUE = 'leagues/SET_SELECTED_LEAGUE'
export const SET_SINGLE_LEAGUE_INFO = 'leagues/SET_SINGLE_LEAGUE_INFO'
export const FETCH_SINGLE_LEAGUE_INFO_FAILURE = 'leagues/FETCH_SINGLE_LEAGUE_INFO_FAILURE'

export const FETCH_MATCHDAY = '/leagues/FETCH_MATCHDAY'
export const SET_MATCHDAY = 'leagues/SET_MATCHDAY'
export const FETCH_MATCHDAY_FAILURE = 'leagues/FETCH_MATCHDAY_FAILURE'

export const FETCH_SINGLE_LEAGUE_STANDINGS = 'leagues/FETCH_SINGLE_LEAGUE_STANDINGS'
export const SET_SINGLE_LEAGUE_STANDINGS = 'leagues/SET_SINGLE_LEAGUE_STANDINGS'
export const SINGLE_LEAGUE_STANDINGS_FAILURE = 'leagues/SINGLE_LEAGUE_STANDINGS_FAILURE'

export const fetchAllLeaguesRequest = createAction<undefined>(FETCH_ALL_LEAGUES_REQUEST)
export const fetchAllLeaguesSuccess = createAction<AllLeaguesType[]>(FETCH_ALL_LEAGUES_SUCCESS)
export const fetchAllLeaguesFailure = createAction<AppError>(FETCH_ALL_LEAGUES_FAILURE)

export const setSelectedLeague = createAction(SET_SELECTED_LEAGUE)
export const setSingleLeagueInfo = createAction(SET_SINGLE_LEAGUE_INFO)
export const fetchSingleLeagueInfoFailure = createAction(FETCH_SINGLE_LEAGUE_INFO_FAILURE)

export const fetchMatchday = createAction<string>(FETCH_MATCHDAY)
export const setMatchday = createAction<MatchdayProperties[]>(SET_MATCHDAY)
export const fetchMatchdayFailure = createAction<AppError>(FETCH_MATCHDAY_FAILURE)

export const fetchSingleLeagueStandings = createAction<number | undefined>(FETCH_SINGLE_LEAGUE_STANDINGS)
export const setSingleLeagueStandings = createAction<LeagueStandings>(SET_SINGLE_LEAGUE_STANDINGS)
export const singleLeagueStandingsFailure = createAction<AppError>(SINGLE_LEAGUE_STANDINGS_FAILURE)
