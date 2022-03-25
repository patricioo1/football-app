import * as actionTypes from '../../actions/actions'
import { Actions } from '../types'

const InitialState = {
  selectedLeague: null,
  singleLeague: [],
  loading: true,
  error: null
}

export const singleLeagueInfoReducer = (state = InitialState, action: Actions | null = null) => {
  if (!action) {
    return state
  }
  console.log(action)
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
    default:
      return state
  }
}
