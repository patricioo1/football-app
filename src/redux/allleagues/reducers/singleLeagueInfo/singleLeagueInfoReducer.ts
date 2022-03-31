import { AppError, SelectedLeagueType } from '../../../../components/API/types'
import * as actionTypes from '../../actions/actions'
import { Actions } from '../types'

type State = {
  selectedLeague: SelectedLeagueType | undefined | null,
  singleLeague: unknown,
  loading: boolean,
  error: AppError | null | undefined
}

const initialState = {
  selectedLeague: null,
  singleLeague: [],
  loading: true,
  error: null
}

export const singleLeagueInfoReducer = (state: State = initialState, action: Actions | null = null): State => {
  if (!action) {
    return state
  }
  switch (action.type) {
    case actionTypes.SET_SELECTED_LEAGUE:
      return {
        ...state,
        selectedLeague: action.payload
      }
    case actionTypes.SET_SINGLE_LEAGUE_INFO:
      return {
        ...state,
        singleLeague: action.payload,
        loading: false
      }
    case actionTypes.FETCH_SINGLE_LEAGUE_INFO_FAILURE:
      return {
        ...state,
        error: action.payload
      }  
    default:
      return state
  }
}
