import * as actionTypes from '../actions/actions'

const InitialState = {
  matchDay: [],
  loading: true,
}

export const matchDayReducer = (state = InitialState, action = null) => {
  switch (action.type) {
    case actionTypes.FETCH_MATCHDAY:
      return {
        ...state,
        date: action.payload
      }
    case actionTypes.SET_MATCHDAY:
      return {
        ...state,
        matchDay: action.payload,
        loading: false
      }
    default:
      return state
  }
}
