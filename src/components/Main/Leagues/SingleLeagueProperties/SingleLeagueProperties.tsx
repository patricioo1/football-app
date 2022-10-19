import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Tabs } from 'antd'
import SingleLegaueDetails from './SingleLeagueDetails/SingleLeagueDetails'
import SingleLeagueStandings from './SingleLeagueStandings/SingleLeagueStandings'
import SingleLeagueBestScorers from './SingleLeagueBestScorers/SingleLeagueBestScorers'
import { RootState } from '../../../../redux/rootReducer'
import * as s from './styled'

const SingleLeagueProperties: React.FC = () => {
  const [tab, setTab] = useState('1')
  const loading = useSelector(
    (state: RootState) => state?.singleLeagueInfo?.loading
  )
  const error = useSelector(
    (state: RootState) => state?.singleLeagueInfo?.error
  )
  const { TabPane } = Tabs

  const loadedData: boolean = !loading && error === null

  const tabChange = (key: string): void => {
    setTab(key)
  }

  if (loadedData) {
    return (
      <s.SingleLeagueNavigation onChange={tabChange} activeKey={tab}>
        <TabPane tab="Details" key={1}>
          <SingleLegaueDetails />
        </TabPane>
        <TabPane tab="Standings" key={2}>
          <SingleLeagueStandings />
        </TabPane>
        <TabPane tab="Best Scorers" key={3}>
          <SingleLeagueBestScorers />
        </TabPane>
      </s.SingleLeagueNavigation>
    )
  }
  return <p>{error}</p>
}

export default SingleLeagueProperties
