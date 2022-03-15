import React from 'react'
import { useSelector } from 'react-redux'
import { Tabs } from 'antd'
import { SingleLeagueWrapper } from './styled'
import SingleLegaueDetails from './SingleLeagueDetails/SingleLeagueDetails'
import SingleLeagueStandings from './SingleLeagueStandings/SingleLeagueStandings'
import SingleLeagueBestScorers from './SingleLeagueBestScorers/SingleLeagueBestScorers'
import SingleLeagueNav from './SingleLeagueNav/SingleLeagueNav'
import { RootState } from '../../../../redux/rootReducer'
// eslint-disable-next-line
type Keys = {
  defaultActiveKey: number
}

const SingleLeagueProperties: React.FC = () => {
  // const leagueDetails = useSelector(state => state.leagues.selectedLeague)
  const loading = useSelector((state: RootState) => state.leagues.loading)
  const error = useSelector((state: RootState) => state.leagues.error)
  const { TabPane } = Tabs

  const loadedData: boolean = !loading && error === null

  if (loadedData) {
    return (
      <SingleLeagueWrapper>
        <SingleLeagueNav defaultActiveKey={1}>
          <TabPane tab="Details" key={1}>
            <SingleLegaueDetails />
          </TabPane>
          <TabPane tab="Standings" key={2}>
            <SingleLeagueStandings />
          </TabPane>
          <TabPane tab="Best Scorers" key={3}>
            <SingleLeagueBestScorers />
          </TabPane>
        </SingleLeagueNav>
      </SingleLeagueWrapper>
    )
  }
  return <p>{error}</p>
}

export default SingleLeagueProperties
