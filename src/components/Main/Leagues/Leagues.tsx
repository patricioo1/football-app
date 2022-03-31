import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as s from './styled'
import {
  fetchAllLeaguesRequest,
  setSelectedLeague,
} from '../../../redux/allleagues/actions/actions'
import { RootState } from '../../../redux/rootReducer'
import Loading from '../../Statuses/Loading/Loading'
import Error from '../../Statuses/Error/Error'

const Leagues: React.FC = () => {
  const leagues = useSelector((state: RootState) => state.leagues.allLeagues)
  const loading = useSelector((state: RootState) => state.leagues.loading)
  const error = useSelector((state: RootState) => state.leagues.error)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllLeaguesRequest(undefined))
  }, [loading, dispatch])

  const loadedData = !loading && error === null && leagues

  if (loading) return <Loading />
  if (error) return <Error><p>{error}</p></Error>
  return (
    loadedData ? <>{
      leagues.map((item) => {
        const countryFlag = item.area.ensignUrl
        return (
          <s.SingleLeague
            key={item.id}
            onClick={() => {
              dispatch(setSelectedLeague(item))
              navigate(`/league/${item.id}`)
            }}
          >
            <p>
              {item.area.name}: {item.name}
            </p>
            {countryFlag ? (
              <s.CountryFlag src={countryFlag} alt="Flaga kraju" />
            ) : <p>{item.code}</p>}
            <s.CountryCode>
              <p>{item.area.countryCode}</p>
            </s.CountryCode>
          </s.SingleLeague>
        )
      })
     }</> : (
      <p>{error}</p>
    )
  )
}

export default Leagues
