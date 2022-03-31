import * as actionTypes from '../../actions/actions'
import { MatchdayProperties, AppError } from '../../../../components/API/types'
import { MatchdayActions } from './actionTypes'

type DateParams = Date | null | undefined | string

type State = {
  matchDay: MatchdayProperties[] | null | undefined,
  loading: boolean,
  date: DateParams,
  error: AppError | null | undefined
}

const initialState: State = {
  matchDay: [],
  loading: true,
  date: null,
  error: null
}

export const matchDayReducer = (state: undefined | State, action: MatchdayActions): State => {
  if (!state) {
    return initialState
  }
  switch (action.type) {
    case actionTypes.FETCH_MATCHDAY:
      return {
        ...state,
        date: action.payload as DateParams
      }
    case actionTypes.SET_MATCHDAY:
      return {
        ...state,
        matchDay: action.payload as MatchdayProperties[],
        loading: false
      }
    case actionTypes.FETCH_MATCHDAY_FAILURE:
      return {
        ...state,
        error: action.payload as AppError
      }  
    default:
      return state
  }
}
