import * as actionTypes from '../../../actions/actions'

export type StandingsActions = ReturnType<typeof actionTypes.fetchSingleLeagueStandings> | ReturnType<typeof actionTypes.setSingleLeagueStandings> | ReturnType<typeof actionTypes.singleLeagueStandingsFailure>