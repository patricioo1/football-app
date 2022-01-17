import React from 'react'
import { useNavigate } from 'react-router';
import { SingleLeagueNavigation } from './styled';

const SingleLeagueNav = () => {
    const navigate = useNavigate();

    return (
      <SingleLeagueNavigation>
          <p onClick={() => navigate(`/league/id/details`)}>Details</p>
          <p onClick={() => navigate(`/league/id/standings`)}>Standings</p>
          <p onClick={() => navigate(`/league/id/scorers`)}>Best Scorers</p>
      </SingleLeagueNavigation>
    );
};

export default SingleLeagueNav;