import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../redux/rootReducer'

const SingleScorerInfo: React.FC = () => {
  const singleScorer = useSelector(
    (state: RootState) => state.bestScorers.singleScorer
  )
  const url = window.location.href;
  const strs = url.split('/');
  const id = strs.at(-1)
  console.log(singleScorer, id)//do sprawedzenia
  if (id === singleScorer?.player.id) {
      console.log("działa!");//tu tez
  }
  return (
    <div>
      <p>siema</p>
    </div>
  )
}

export default SingleScorerInfo
