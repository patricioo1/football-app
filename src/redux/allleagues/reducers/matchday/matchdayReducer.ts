import * as actionTypes from '../../actions/actions'
import { Actions } from '../types'
import { MatchdayProperties } from './matchdayTypes'

type State = {
  matchDay: MatchdayProperties[] | null | undefined,
  loading: boolean,
  date: null | undefined | Date
}

const InitialState = {
  matchDay: [],
  loading: true,
  date: null
}

export const matchDayReducer = (state: State = InitialState, action: Actions | null = null): State => {
  if (!action) {
    return state
  }
  console.log(action)
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
