import React from 'react'
import { useSelector } from 'react-redux'
import { CountryFlag, Details, SingleLeagueTitle } from './styled'
import { RootState } from '../../../../../redux/rootReducer'

const SingleLeagueDetails: React.FC = () => {
  const leagueDetails = useSelector(
    (state: RootState) => state.singleLeagueInfo.selectedLeague
  )
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
  )
}

export default SingleLeagueDetails
