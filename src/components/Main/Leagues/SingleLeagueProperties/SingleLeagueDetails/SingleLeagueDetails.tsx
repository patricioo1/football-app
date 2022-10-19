import React from 'react'
import { useSelector } from 'react-redux'
import { CountryFlag, Details, SingleLeagueTitle } from './styled'
import { RootState } from '../../../../../redux/rootReducer'
import Loading from '../../../../Statuses/Loading/Loading'
import Error from '../../../../Statuses/Error/Error'

const SingleLeagueDetails: React.FC = () => {
  const leagueDetails = useSelector(
    (state: RootState) => state?.singleLeagueInfo?.selectedLeague
  )
  const loading = useSelector(
    (state: RootState) => state?.singleLeagueInfo?.loading
  )
  const error = useSelector(
    (state: RootState) => state?.singleLeagueInfo?.error
  )

  if (loading) return <Loading />
  if (error)
    return (
      <Error>
        <p>{error}</p>
      </Error>
    )

  return (
    <Details>
      <h2>{leagueDetails?.name}</h2>
      <SingleLeagueTitle>
        <CountryFlag src={leagueDetails?.area?.ensignUrl} alt="Country flag" />
        <p>{leagueDetails?.area?.name}</p>
      </SingleLeagueTitle>
      {`Round: ${leagueDetails?.currentSeason?.currentMatchday}`}
    </Details>
  )
}

export default SingleLeagueDetails
