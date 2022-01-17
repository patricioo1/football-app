import React from 'react'
import { useSelector } from 'react-redux';
import { SingleLeagueWrapper } from './styled';
// import { Routes, Route } from 'react-router'
// import SingleLeagueDetails from './SingleLeagueDetails/SingleLeagueDetails'
// import SingleLeagueStandings from './SingleLeagueStandings/SingleLeagueStandings'
// import SingleLeagueBestScorers from './SingleLeagueBestScorers/SingleLeagueBestScorers'
import SingleLeagueNav from './SingleLeagueNav/SingleLeagueNav';

const SingleLeagueProperties = () => {
  const leagueDetails = useSelector(state => state.leagues.selectedLeague)
  // const matches = useSelector(state => state.leagues.matches)
  // const loading = useSelector(state => state.leagues.loading)
  console.log(leagueDetails.id);

  return (
    <SingleLeagueWrapper>
      <SingleLeagueNav />
      {/* <Routes>
        <Route path='/league/:id/details' element={<SingleLeagueDetails />} />
        <Route path='/league/:id/standings' element={<SingleLeagueStandings />} />
        <Route path='/league/:id/scorers' element={<SingleLeagueBestScorers />} />
      </Routes> */}
    </SingleLeagueWrapper>
    );
};

export default SingleLeagueProperties;