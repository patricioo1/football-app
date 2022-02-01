import React from 'react'
import { useSelector } from 'react-redux';
import { SingleLeagueWrapper } from './styled';
import { Tabs } from 'antd'
import SingleLegaueDetails from './SingleLeagueDetails/SingleLeagueDetails'
import SingleLeagueStandings from './SingleLeagueStandings/SingleLeagueStandings';
import SingleLeagueBestScorers from './SingleLeagueBestScorers/SingleLeagueBestScorers'
import SingleLeaguenNav from './SingleLeagueNav/SingleLeagueNav'

const SingleLeagueProperties = () => {
  const leagueDetails = useSelector(state => state.leagues.selectedLeague)
  // const loading = useSelector(state => state.leagues.loading)
  const error = useSelector(state => state.leagues.error)
  console.log(error);
  const { TabPane } = Tabs;

  return (
    <SingleLeagueWrapper>
      <SingleLeaguenNav defaultActiveKey={1}>
        <TabPane tab='Details' key={1}>
          <SingleLegaueDetails />
        </TabPane>
        <TabPane tab='Standings' key={2}>
          <SingleLeagueStandings leagueName={leagueDetails.name} />
        </TabPane>
        <TabPane tab='Best Scorers' key={3}>
          <SingleLeagueBestScorers />
        </TabPane>
      </SingleLeaguenNav>
    </SingleLeagueWrapper>
    );
};

export default SingleLeagueProperties;