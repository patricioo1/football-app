import * as actionTypes from '../../actions/actions'
import { LeagueType, AppError } from '../../../../components/API/types'
import { AllLeaguesAction } from './allLeaguesTypes'

type State = {
  allLeagues: LeagueType[] | undefined | null,
  loading: boolean,
  error: AppError | null | undefined
}

const initialState: State = {
  allLeagues: [],
  loading: true,
  error: null
}

export const allLeaguesReducer = (state: undefined | State, action: AllLeaguesAction): State => {
  if (!state) {
    return initialState
  }
  switch(action.type) {
    case actionTypes.FETCH_ALL_LEAGUES_REQUEST:
      return {
        ...state
      }
    case actionTypes.FETCH_ALL_LEAGUES_SUCCESS:
      return {
        ...state,
        allLeagues: action.payload as LeagueType[] | undefined | null,
        loading: false
      }
    case actionTypes.FETCH_ALL_LEAGUES_FAILURE:
      return {
        ...state,
        error: action.payload as AppError
      }
    default:
      return state
  }
}
