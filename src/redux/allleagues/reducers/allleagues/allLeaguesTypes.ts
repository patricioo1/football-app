import * as actionTypes from '../../actions/actions'

export type AllLeaguesAction = ReturnType<typeof actionTypes.fetchAllLeaguesRequest> | ReturnType <typeof actionTypes.fetchAllLeaguesSuccess> | ReturnType<typeof actionTypes.fetchAllLeaguesFailure>