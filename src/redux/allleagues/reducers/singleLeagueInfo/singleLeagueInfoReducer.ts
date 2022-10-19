import {
  AppError,
  LeagueInfo,
  SelectedLeagueType,
} from '../../../../components/API/types'
import * as actionTypes from '../../actions/actions'
import { Actions } from '../types'

type State = {
  selectedLeague: SelectedLeagueType | undefined | null
  singleLeague: LeagueInfo | undefined | null
  loading: boolean
  error: AppError | null | undefined
} | undefined

const initialState = {
  selectedLeague: null,
  singleLeague: null,
  loading: true,
  error: null,
}

export const singleLeagueInfoReducer = (
  state: State | undefined,
  action: Actions | null = null
): State => {
  if (!state) {
    return initialState
  }
  console.log(action?.payload, "HALO")
  switch (action?.type) {
    case actionTypes.SET_SELECTED_LEAGUE:
      return {
        ...state,
        selectedLeague: action.payload
      }
    case actionTypes.FETCH_SINGLE_LEAGUE_INFO:
      return {
        ...state
      }
    case actionTypes.SET_SINGLE_LEAGUE_INFO:
      return {
        ...state,
        singleLeague: action.payload,
        loading: false,
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
