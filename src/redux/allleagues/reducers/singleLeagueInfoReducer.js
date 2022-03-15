import * as actionTypes from '../actions/actions'

const InitialState = {
  selectedLeague: null,
  singleLeague: [],
  loading: true,
}

export const singleLeagueInfoReducer = (action, state = InitialState) => {
  if (!action || !action?.type) {
    return state
  }
  switch (action.type) {
    case actionTypes.SET_SELECTED_LEAGUE:
      return {
        ...state,
        selectedLeague: action.payload,
      }
    case actionTypes.SET_SINGLE_LEAGUE_INFO:
      return {
        ...state,
        loading: false,
        singleLeague: action.payload,
      }
    default:
      return state
  }
}
