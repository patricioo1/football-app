import * as actionTypes from '../actions/actions'
import { Actions } from './types'

// type State = {
//   matchDay: never[],
//   loading: boolean
// }

const InitialState = {
  matchDay: [],
  loading: true,
}

export const matchDayReducer = (state = InitialState, action: Actions | null = null) => {
  if (!action) {
    return state
  }
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
