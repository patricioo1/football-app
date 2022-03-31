import * as actionTypes from '../../actions/actions'

export type MatchdayActions = ReturnType<typeof actionTypes.fetchMatchday> | ReturnType<typeof actionTypes.setMatchday> | ReturnType<typeof actionTypes.fetchMatchdayFailure>