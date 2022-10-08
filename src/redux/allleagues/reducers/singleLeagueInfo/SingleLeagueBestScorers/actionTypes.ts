import * as actionTypes from '../../../actions/actions';

export type BestScorersActions = ReturnType<typeof actionTypes.fetchBestScorers> | ReturnType<typeof actionTypes.setBestScorers> | ReturnType<typeof actionTypes.bestScorersFailure>

export type SingleScorer = {
    numberOfGoals: number,
  player: {
    dateOfBirth: string,
    id: number,
    name: string,
    nationality: string,
    position: string
  },
  team: {
    id: number,
    name: string
  }
}