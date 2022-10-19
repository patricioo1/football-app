import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
  fetchBestScorers,
  setSingleScorer,
} from '../../../../../redux/allleagues/actions/actions'
import { RootState } from '../../../../../redux/rootReducer'
import Error from '../../../../Statuses/Error/Error'
import Loading from '../../../../Statuses/Loading/Loading'
import * as s from './styled'
import PlayerImage from '../../../../../images/football_player.svg'

const SingleLeagueBestScorers: React.FC = () => {
  const leagueCode = useSelector(
    (state: RootState) => state?.singleLeagueInfo?.selectedLeague?.code
  )
  const bestScorers = useSelector(
    (state: RootState) => state.bestScorers.bestScorers
  )
  const loading = useSelector((state: RootState) => state.bestScorers.loading)
  const error = useSelector((state: RootState) => state.bestScorers.error)
  const leagueId = useSelector(
    (state: RootState) => state?.singleLeagueInfo?.selectedLeague?.id
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchBestScorers(leagueCode))
  }, [dispatch, leagueCode])

  if (loading) return <Loading />
  if (error) return <Error />
  return (
    <s.ScorersWrapper>
      {bestScorers ? (
        bestScorers.map(item => (
          <s.SingleScorerWrapper key={item.player.id}>
            <s.Player src={PlayerImage} alt="" />
            <s.PlayerName
              onClick={() => {
                dispatch(setSingleScorer(item))
                navigate(`/league/${leagueId}/best-scorers/${item.player.id}`)
              }}
            >
              {item.player.name}
            </s.PlayerName>
          </s.SingleScorerWrapper>
        ))
      ) : (
        <p>{error}</p>
      )}
    </s.ScorersWrapper>
  )
}

export default SingleLeagueBestScorers
