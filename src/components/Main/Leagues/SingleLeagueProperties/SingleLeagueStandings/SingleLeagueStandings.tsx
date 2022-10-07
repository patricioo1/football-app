import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../../redux/rootReducer'
import * as s from './styled'
import { fetchSingleLeagueStandings } from '../../../../../redux/allleagues/actions/actions'

const SingleLeagueStandings = () => {
  const singleLeagueId = useSelector((state: RootState) => state.singleLeagueInfo.selectedLeague?.id)
  const leagueName = useSelector((state: RootState) => state.standings.singleLeagueStandings?.competition)
  const leagueStandings = useSelector((state: RootState) => state.standings.singleLeagueStandings?.standings[0].table);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleLeagueStandings(singleLeagueId))
  }, [dispatch, singleLeagueId])

   return (
    <s.StandingsWrapper>
      <s.LeagueName>
        <s.LeagueTitle>{leagueName?.name}</s.LeagueTitle>
        <s.LeagueTableProperties>
          <s.LeagueTablePropertiesSt>
            <span style={{marginRight: '10px'}}>#</span>
            <p>Team</p>
          </s.LeagueTablePropertiesSt>
          <s.LeagueTablePropertiesNd>
            <s.TeamPoints>P</s.TeamPoints>
            <s.TeamPoints>DIFF</s.TeamPoints>
            <s.TeamPoints>PTS</s.TeamPoints>
          </s.LeagueTablePropertiesNd>
        </s.LeagueTableProperties>
      </s.LeagueName>
      {leagueStandings?.map(league => (
        <s.SingleLeagueProperties key={league.position}>
          <s.SingleTeamName>
            <s.TeamPosition>{league.position}</s.TeamPosition>
            <p>{league.team.name.replace(/FC|CFC|BC|AFC/g, '')}</p>
          </s.SingleTeamName>
          <s.SingleTeamStats>
            <s.TeamPoints>{league.playedGames}</s.TeamPoints>
            <s.TeamPoints>{league.goalDifference}</s.TeamPoints>
            <s.TeamPoints points='true'>{league.points}</s.TeamPoints>
          </s.SingleTeamStats>
        </s.SingleLeagueProperties>
      ))}
    </s.StandingsWrapper>
  )
}

export default SingleLeagueStandings
