import * as actionTypes from './actions'

const InitialState = {
    allLeagues: [],
    loading: true,
    selectedLeague: null,
    matchDay: [],
    otherMatchDays: [],
    error: null
}

export const allLeaguesReducer = (state = InitialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case actionTypes.FETCH_ALL_LEAGUES_REQUEST:
            return {
                ...state,
                loading: false
            }
        case actionTypes.FETCH_ALL_LEAGUES_SUCCESS:
            return {
                ...state,
                allLeagues: action.payload
            }
        case actionTypes.FETCH_ALL_LEAGUES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case actionTypes.SET_SELECTED_LEAGUE:
            return {
                ...state,
                selectedLeague: action.payload
            }
        case actionTypes.SET_SINGLE_LEAGUE_INFO:
            return {
                ...state,
                selectedLeague: {
                    ...state.selectedLeague,
                    standings: action.payload
                }
            }
        case actionTypes.FETCH_MATCHDAY:
            return {
                ...state,
                date: action.payload,
                loading: false
            }
        case actionTypes.SET_MATCHDAY:
            return {
                ...state,
                matchDay: action.payload
            }
        default:
            return state;
    }
}