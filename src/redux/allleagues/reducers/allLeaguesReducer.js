import * as actionTypes from '../actions/actions'

const InitialState = {
    allLeagues: [],
    loading: true,
    selectedLeague: null,
    matchDay: [],
    error: null,
    singleLeague: []
}

export const allLeaguesReducer = (state = InitialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case actionTypes.FETCH_ALL_LEAGUES_REQUEST:
            return {
                ...state,
                loading: false,
                error: null
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
        // case actionTypes.FETCH_SINGLE_LEAGUE_INFO:
        //     return {
        //         ...state,
        //         loading: false
        //     }
        default:
            return state;
    }
}