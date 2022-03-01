import React from 'react'
import { CountryFlag, Details } from './styled';
import { useSelector } from 'react-redux';
import { SingleLeagueTitle } from './styled';

const SingleLeagueDetails = () => {
  const leagueDetails = useSelector(state => state.singleLeagueInfo.selectedLeague)
  // const loading = useSelector(state => state.singleLeagueInfo.loading)

    return (
      <Details>
        <h2>{leagueDetails?.name}</h2>
        <SingleLeagueTitle>
          <CountryFlag src={leagueDetails?.area?.ensignUrl} alt="" />
          <p>{leagueDetails?.area?.name}</p>
        </SingleLeagueTitle>
        {`Round: ${leagueDetails?.currentSeason?.currentMatchday}`}
      </Details>
    );
};

export default SingleLeagueDetails;