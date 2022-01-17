import * as actionTypes from './actions'

const InitialState = {
    allLeagues: [],
    loading: false,
    selectedLeague: null,
    matchDay: [],
    otherMatchDays: []
}

export const allLeaguesReducer = (state = InitialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case actionTypes.FETCH_ALL_LEAGUES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ALL_LEAGUES_SUCCESS:
            return {
                ...state,
                allLeagues: action.payload
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
                    matches: action.payload
                }
            }
        case actionTypes.FETCH_MATCHDAY:
            return {
                ...state,
                date: action.payload,
                loading: true
            }
        case actionTypes.SET_MATCHDAY:
            return {
                ...state,
                matchDay: action.payload
            }
        case actionTypes.FETCH_OTHER_MATCHDAYS:
            return {
                ...state,
                date: action.payload,
                loading: true
            }
        default:
            return state;
    }
}