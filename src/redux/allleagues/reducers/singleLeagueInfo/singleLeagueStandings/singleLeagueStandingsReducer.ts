import { AppError, LeagueStandings } from '../../../../../components/API/types'
import * as actionTypes from '../../../actions/actions'
import { StandingsActions } from './actionTypes'

type State = {
    singleLeagueStandings: LeagueStandings | null | undefined,
    loading: boolean,
    error: AppError | null | undefined
}

const initialState: State = {
    singleLeagueStandings: null,
    loading: true,
    error: null
}

export const singleLeagueStandingsReducer = (state: undefined | State, action: StandingsActions): State => {
    if (!state) {
        return initialState
    }
    console.log(action)
    switch (action.type) {
        case actionTypes.FETCH_SINGLE_LEAGUE_STANDINGS:
            return {
                ...state,
                loading: false
            }
        case actionTypes.SET_SINGLE_LEAGUE_STANDINGS:
            return {
                ...state,
                singleLeagueStandings: action.payload as LeagueStandings
            }
        case actionTypes.SINGLE_LEAGUE_STANDINGS_FAILURE:
            return {
                ...state,
                error: action.payload as AppError
            }    
        default:
            return state
    }
}