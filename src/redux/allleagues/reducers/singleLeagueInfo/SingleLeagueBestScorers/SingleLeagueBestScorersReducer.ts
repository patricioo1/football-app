import { AppError, BestScorer } from '../../../../../components/API/types'
import * as actionTypes from '../../../actions/actions'
import { BestScorersActions } from './actionTypes'

type State = {
  bestScorers: BestScorer[] | undefined | null
  singleScorer: BestScorer | null
  loading: boolean
  error: AppError | undefined | null
}

const initialState: State = {
  bestScorers: null,
  singleScorer: null,
  loading: true,
  error: null,
}

export const singleLeagueBestScorersReducer = (
  state: undefined | State,
  action: BestScorersActions
): State => {
  console.log(action.payload)
  if (!state) return initialState
  switch (action?.type) {
    case actionTypes.FETCH_BEST_SCORERS:
      return {
        ...state,
      }
    case actionTypes.SET_BEST_SCORERS:
      return {
        ...state,
        bestScorers: action?.payload as BestScorer[],
        loading: false,
      }
    case actionTypes.BEST_SCORERS_FAILURE:
      return {
        ...state,
        error: action?.payload as AppError,
      }
    case actionTypes.SET_SINGLE_SCORER:
      return {
        ...state,
        singleScorer: action?.payload as unknown as BestScorer,
        loading: false,
      }
    default:
      return state
  }
}
