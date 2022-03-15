import * as actionTypes from '../actions/actions'

const InitialState = {
  matchDay: [],
  loading: true,
}

export const matchDayReducer = (action, state = InitialState) => {
  if (!action || !action?.type) {
    return state
  }
  switch (action.type) {
    case actionTypes.FETCH_MATCHDAY:
      return {
        ...state,
        date: action.payload,
        loading: false,
      }
    case actionTypes.SET_MATCHDAY:
      return {
        ...state,
        matchDay: action.payload,
      }
    default:
      return state
  }
}
