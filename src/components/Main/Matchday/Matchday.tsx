import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import * as s from './styled'
import Error from '../../Statuses/Error/Error'
import { RootState } from '../../../redux/rootReducer'
import MatchdayNavigation from './MatchdayNavigation'
import Loading from '../../Statuses/Loading/Loading'

dayjs().format()

const Matchday: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const matchday = useSelector((state: RootState) => state.matchday.matchDay)
  const error = useSelector((state: RootState) => state.matchday.error)

  if (error)
    return (
      <Error>
        <p>{error}</p>
      </Error>
    )

  return (
    <>
      <MatchdayNavigation onLoading={setLoading} />
      {!loading && matchday ? (
        <s.MatchdayWrapper>
          {matchday
            .sort((a, b) => (a.competition.name > b.competition.name ? 1 : -1))
            .map(item => (
              <s.SingleLeagueWrapper key={item.id}>
                <s.LeagueTitle>
                  {item.competition.area.ensignUrl ? (
                    <s.CountryFlag
                      src={item.competition.area.ensignUrl}
                      alt="Country flag"
                    />
                  ) : null}
                  <p>{item.competition.name}</p>
                </s.LeagueTitle>
                <s.TeamWrapper>
                  <s.SingleTeam>{item.homeTeam.name}</s.SingleTeam>
                  <s.Score>
                    <span>{item.matchScore.homeTeam}</span>
                    <span>{item.matchScore.awayTeam}</span>
                  </s.Score>
                  <s.SingleTeam>{item.awayTeam.name}</s.SingleTeam>
                </s.TeamWrapper>
                <s.MatchInfo>
                  <p>{item.status === 'POSTPONED' ? item.status : null}</p>
                </s.MatchInfo>
              </s.SingleLeagueWrapper>
            ))}
        </s.MatchdayWrapper>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Matchday
