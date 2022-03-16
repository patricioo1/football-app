import * as actionTypes from '../actions/actions'

const InitialState = {
  allLeagues: [],
  loading: true,
  selectedLeague: null,
  matchDay: [],
  error: null,
  singleLeague: [],
}

export const allLeaguesReducer = (state = InitialState, action = null) => {
  console.log(action);
  switch (action.type) {
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
