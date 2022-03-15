import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import { fetchMatchday } from '../../../redux/allleagues/actions/actions'
import * as s from './styled'
import Loading from '../../Statuses/Loading/Loading'
import { RootState } from '../../../redux/rootReducer'
import { MatchdayProperties } from './types'

dayjs().format()

const Matchday = () => {
  const [date, setDate] = useState(new Date())
  const dispatch = useDispatch()
  const loading = useSelector((state: RootState) => state.matchday.loading)
  const matchday = useSelector((state: RootState) => state.matchday.matchDay)

  useEffect(() => {
    if (date) {
      dispatch(fetchMatchday(date.toISOString().slice(0, 10)))
    }
  }, [dispatch, date])

  if (loading) return <Loading />
  return (
    <s.MatchdayWrapper>
      <s.MatchdayNavigation>
        <s.ButtonLeft
          onClick={() => setDate(dayjs(date).subtract(1, 'day').toDate())}
        />
        <p>{date.toISOString().slice(0, 10)}</p>
        <s.ButtonRight
          onClick={() => setDate(dayjs(date).add(1, 'day').toDate())}
        />
      </s.MatchdayNavigation>
      {matchday ? matchday
        .sort((a: MatchdayProperties, b: MatchdayProperties) => (a.competition.name > b.competition.name ? 1 : -1))
        .map((item: MatchdayProperties) => (
          <s.SingleLeagueWrapper key={item.id}>
            <s.LeagueTitle>
              {item.competition.area.ensignUrl ? (
                <s.CountryFlag
                  src={item.competition.area.ensignUrl}
                  alt="Country flag"
                />
              ) : null}
              <p>{`${item.competition.area.name}: ${item.competition.name}`}</p>
            </s.LeagueTitle>
            <s.TeamWrapper>
              <s.TeamTitle>
                <p>{item.homeTeam.name}</p>
                <p>{item.awayTeam.name}</p>
              </s.TeamTitle>
              <s.MatchInfo>
                <p>{item.status === 'POSTPONED' ? item.status : ''}</p>
              </s.MatchInfo>
              <s.Score>
                <span>{item.matchScore.homeTeam}</span>
                <span>{item.matchScore.awayTeam}</span>
              </s.Score>
            </s.TeamWrapper>
          </s.SingleLeagueWrapper>
        )) : <Loading />}
    </s.MatchdayWrapper>
  )
}

export default Matchday
