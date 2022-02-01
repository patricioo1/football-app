import React from 'react'
// import {useSelector} from 'react-redux'
import { StandingsWrapper } from './styled';

const SingleLeagueStandings = ({ leagueName }) => {
  // const leagueDetails = useSelector(state => state.leagues.selectedLeague);
  // const standings = useSelector(state => state.leagues.selectedLeague.standings[0].table)
  // console.log(standings)

    return (
      <StandingsWrapper>
          <p>{leagueName}</p>
      </StandingsWrapper>
    );
};

export default SingleLeagueStandings;