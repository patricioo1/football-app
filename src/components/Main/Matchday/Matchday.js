import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatchday } from '../../../redux/allleagues/actions';
import { CountryFlag, LeagueTitle, SingleLeagueWrapper, TeamWrapper, Score, TeamTitle, MatchInfo, MatchdayWrapper, MatchdayNavigation, ButtonRight, ButtonLeft } from './styled';
import dayjs from 'dayjs'
dayjs().format()

const Matchday = () => {
  const [date, setDate] = useState(new Date())
  const dispatch = useDispatch();
  // const loading = useSelector(state => state.leagues.loading)
  const matchday = useSelector(state => state.leagues.matchDay)

  useEffect(() => {
    if(date) {
      dispatch(fetchMatchday(date.toISOString().slice(0,10)))
    }
  }, [dispatch, date])

    return (
      <MatchdayWrapper>
        <MatchdayNavigation>
          <ButtonLeft onClick={() => setDate(dayjs(date).subtract(1, 'day').toDate())}/>
          <p>{date.toISOString().slice(0,10)}</p>
          <ButtonRight onClick={() => setDate(dayjs(date).add(1, 'day').toDate())}/>
        </MatchdayNavigation>
        {matchday.sort((a, b) => a.competition.name > b.competition.name ? 1 : -1).map((item) => {
        return (
          <SingleLeagueWrapper key={item.id}>
            <LeagueTitle>
              <CountryFlag src={item.competition.area.ensignUrl} alt="Country flag" />
              <p>{`${item.competition.area.name}: ${item.competition.name}`}</p>
            </LeagueTitle>
            <TeamWrapper>
              <TeamTitle>
              <p>{item.homeTeam.name}</p>
              <p>{item.awayTeam.name}</p>
              </TeamTitle>
              <MatchInfo>
              <p>{item.status === 'POSTPONED' ? item.status : ''}</p>
              </MatchInfo>
              <Score>
                <span>{item.matchScore.homeTeam}</span>
                <span>{item.matchScore.awayTeam}</span>
              </Score>
            </TeamWrapper>
          </SingleLeagueWrapper>
        )
      })}

      </MatchdayWrapper>
    );
};

export default Matchday;