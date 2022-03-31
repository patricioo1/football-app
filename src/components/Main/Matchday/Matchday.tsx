import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import { fetchMatchday } from '../../../redux/allleagues/actions/actions'
import * as s from './styled'
import Loading from '../../Statuses/Loading/Loading'
import Error from '../../Statuses/Error/Error'
import { RootState } from '../../../redux/rootReducer'
// import { MatchdayProperties } from './types'

dayjs().format()

const Matchday: React.FC = () => {
  const [date, setDate] = useState(new Date())
  const dispatch = useDispatch()
  const loading = useSelector((state: RootState) => state.matchday.loading)
  const matchday = useSelector((state: RootState) => state.matchday.matchDay)
  const error = useSelector((state: RootState) => state.matchday.error)
  console.log(matchday);

  useEffect(() => {
    if (date) {
      dispatch(fetchMatchday(date.toISOString().slice(0, 10)))
    }
  }, [dispatch, date])

  if (loading) return <Loading />
  if (error) return <Error><p>{error}</p></Error>
  return (
    <s.MatchdayWrapper>
      <s.MatchdayNavigation>
        <s.ButtonLeft
          onClick={() => setDate(dayjs(date).subtract(1, 'day').toDate())}
        />
        <s.MatchdayDate>{date.toISOString().slice(0, 10)} {new Date().toLocaleString('en-EN', { weekday: 'long' })}</s.MatchdayDate>
        <s.ButtonRight
          onClick={() => setDate(dayjs(date).add(1, 'day').toDate())}
        />
      </s.MatchdayNavigation>
      {matchday ? matchday
        .sort((a, b) => (a.competition.name > b.competition.name ? 1 : -1))
        .map((item) => (
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
        )) : <p>{error}</p>}
    </s.MatchdayWrapper>
  )
}

export default Matchday
