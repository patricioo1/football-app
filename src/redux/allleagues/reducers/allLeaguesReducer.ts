import * as actionTypes from '../actions/actions'
import { Actions } from './types'

type LeagueType = {
  id: number,
  name: string,
  code: string
  area: {
    name: string,
    ensignUrl: string,
    countryCode: string
  }
}

type State = {
  allLeagues: LeagueType[] | undefined | null,
  loading: boolean,
  error: null | undefined
}

const InitialState = {
  allLeagues: [],
  loading: true,
  error: null
}

export const allLeaguesReducer = (state: State = InitialState, action: Actions | null = null): State => {
  if (!action) {
    return state
  }
  switch(action.type) {
    case actionTypes.FETCH_ALL_LEAGUES_REQUEST:
      return {
        ...state
      }
    case actionTypes.FETCH_ALL_LEAGUES_SUCCESS:
      return {
        ...state,
        allLeagues: action.payload,
        loading: false
      }
    case actionTypes.FETCH_ALL_LEAGUES_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
