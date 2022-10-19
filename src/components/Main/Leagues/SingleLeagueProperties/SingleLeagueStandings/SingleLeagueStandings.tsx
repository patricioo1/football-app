import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleLeagueInfo } from '../../../../../redux/allleagues/actions/actions'
import { RootState } from '../../../../../redux/rootReducer'
import * as s from './styled'

const SingleLeagueStandings = () => {
  const leagueName = useSelector(
    (state: RootState) =>
      state?.singleLeagueInfo?.singleLeague?.competition?.name
  )
  const leagueStandings = useSelector(
    (state: RootState) =>
      state?.singleLeagueInfo?.singleLeague?.standings[0].table
  )
  const latestLeagueIdFromUrl = window.location.href.split('/').at(-1)
  const dispatch = useDispatch()
  useEffect(() => {
    if (latestLeagueIdFromUrl) {
      dispatch(fetchSingleLeagueInfo(+latestLeagueIdFromUrl))
    }
  }, [dispatch])

  return (
    <s.StandingsWrapper>
      <s.LeagueName>
        <s.LeagueTitle>{leagueName}</s.LeagueTitle>
        <s.LeagueTableProperties>
          <s.LeagueTablePropertiesSt>
            <span style={{ marginRight: '10px' }}>#</span>
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
            <s.TeamPoints points="true">{league.points}</s.TeamPoints>
          </s.SingleTeamStats>
        </s.SingleLeagueProperties>
      ))}
    </s.StandingsWrapper>
  )
}

export default SingleLeagueStandings
